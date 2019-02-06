import "./styels/main.css";

import React from "react";
import WebcamView from "./webcam_view";
import Draggable from 'react-draggable';

export default class WebcamContiner extends React.Component {

    state = {
        Left: true,
        Right: true,
        LeftDisabled: true,
        RightDisabled: true,
        LeftLineX: 175,
        LeftX: 280,
        LeftY: 150,
        RightLineX: 475,
        RightX: 380,
        RightY: 150,
    }

    angVal = {
        angLeft: 0,
        angRight: 0
    }
    onMeasurementClickt  = (buttenId) => {
        if(buttenId === "Left")   {
            this.setState({
                Left: !this.state.Left,
                LeftDisabled: !this.state.LeftDisabled
            })
        }
        if(buttenId === "Right")    {
            this.setState({
                Right: !this.state.Right,
                RightDisabled: !this.state.RightDisabled
            })
        }
    }

    onStopRightLineX = (event) =>     {
        this.setState(
            {
                RightLineX: event.clientX
            }
        );
    }
    
    onStopLeftLineX = (event) =>     {
        this.setState(
            {
                LeftLineX: event.clientX,
            }
        );
    }
    
    onStoptLeftX = (event) =>     {
        this.setState(
            {
                LeftX: event.clientX,
                LeftY: event.clientY
            }
        );
    }

    onStoptRightX = (event) =>     {
        this.setState(
            {
                RightX: event.clientX,
                RightY: event.clientY
            }
        );
    }

    getAng = () => {
        let grad1 = this.getGradient(
            0, this.state.LeftLineX, this.state.LeftY, this.state.LeftX
            );
        let grad2 = this.getGradient(
            400, this.state.LeftLineX, this.state.LeftY, this.state.LeftX
            );
        let angLeft = this.getAngleLeft(grad1, grad2);
        this.angVal.angLeft = angLeft;

        let grad3 = this.getGradient(
            0, this.state.RightLineX, this.state.RightY, this.state.RightX
            );
        let grad4 = this.getGradient(
            400, this.state.RightLineX, this.state.RightY, this.state.RightX
            );
        let angRight = this.getAngleRight(grad4, grad3);
        this.angVal.angRight = angRight;
    }

    componentDidMount() {
        this.getAng();
    }

    componentDidUpdate() {
        this.getAng();
        console.log(this.angVal);
        
    }

    getGradient = (Y1, X1, Y2, X2) => {
        return((Y1-Y2)/(X1-X2));
    } 
getAngleRight = (M1, M2)   =>  {
    if(this.state.RightLineX < this.state.RightX) {
        let tmp = M1;
        M1 = M2;
        M2 = tmp;
    }
    if((M1-M2)/(1+M1*M2)>0) {
        return(Math.round(Math.atan((M1-M2)/(1+M1*M2))*(180/Math.PI)));
    }else   {
        return(180 - Math.round(Math.atan((M1-M2)/(1+M1*M2))*(180/Math.PI))*(-1))
    }
}
    getAngleLeft = (M1, M2)   =>  {
        if(this.state.LeftLineX > this.state.LeftX) {
            let tmp = M1;
            M1 = M2;
            M2 = tmp;
        }
        if((M1-M2)/(1+M1*M2)>0) {
            return(Math.round(Math.atan((M1-M2)/(1+M1*M2))*(180/Math.PI)));
        }else   {
            return(180 - Math.round(Math.atan((M1-M2)/(1+M1*M2))*(180/Math.PI))*(-1))
        }
    }

    render()    {
        return(
            <div className = "ui Huge rounded image" id="webcam-container" >
                <Draggable
                    disabled = {this.state.LeftDisabled}
                    axis="x"
                    handle=".handle"
                    bounds = "parent"
                    defaultPosition={{x: 175, y: 2}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={(e) => this.onStopLeftLineX(e)}>

                    <div className="handle line"
                    id="left-line"
                    hidden={this.state.Left}/>
                </Draggable>

                <Draggable
                    disabled = {this.state.LeftDisabled}
                    axis="both"
                    handle=".handle"
                    bounds = "parent"
                    defaultPosition={{x: 280, y: 150}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={(e) => this.onStoptLeftX(e)}>

                    <div className="handle"
                    id="left-X"
                    hidden={this.state.Left}>
                    {this.angVal.angLeft}
                    </div>
                </Draggable>

                <Draggable
                    disabled = {this.state.RightDisabled}
                    axis="x"
                    handle=".handle"
                    bounds = "parent"
                    defaultPosition={{x: 475, y: 2}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={(e) => this.onStopRightLineX(e)}>

                    <div className="handle line"
                    id="right-line"
                    hidden={this.state.Right}/>
                </Draggable>

                <Draggable
                    disabled = {this.state.LeftRight}
                    axis="both"
                    handle=".handle"
                    bounds = "parent"
                    defaultPosition={{x: 380, y: 150}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={(e) => this.onStoptRightX(e)}>

                    <div className="handle"
                    id="right-X"
                    hidden={this.state.Right}>
                    {this.angVal.angRight}
                    </div>
                </Draggable>

                <WebcamView onButtonClickt={this.onMeasurementClickt}/>
            </div>
        );
    }
}