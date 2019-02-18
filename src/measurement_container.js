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

        angleValueLeft: 0,
        angleValueRight: 0,
    }


    angleValueObject = {
        LeftLine: 175,
        LeftPointX: 280,
        LeftPointY: 150,
        RightLine: 475,
        RightPointX: 380,
        RightPointY: 150,

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
        this.angleValueObject.RightLine = event.clientX;
        this.getAng();
    }
    
    onStopLeftLineX = (event) =>     {
        this.angleValueObject.LeftLine = event.clientX;
        this.getAng();
    }
    
    onStoptLeftX = (event) =>     {
        this.angleValueObject.LeftPointX = event.clientX;
        this.angleValueObject.LeftPointY = event.clientY;
        this.getAng();
    }

    onStoptRightX = (event) =>     {
        this.angleValueObject.RightPointX = event.clientX;
        this.angleValueObject.RightPointY = event.clientY;
        this.getAng();
    }

    getAng = () => {
        let grad1 = this.getGradient(
            0,
            this.angleValueObject.LeftLine,
            this.angleValueObject.LeftPointY,
            this.angleValueObject.LeftPointX
            );
        let grad2 = this.getGradient(
            400,
            this.angleValueObject.LeftLine,
            this.angleValueObject.LeftPointY,
            this.angleValueObject.LeftPointX
            );
        this.setState({
            angleValueLeft: this.getAngleLeft(grad1, grad2)
        });
        
        let grad3 = this.getGradient(
            0,
            this.angleValueObject.RightLine,
            this.angleValueObject.RightPointY,
            this.angleValueObject.RightPointX
            );
        let grad4 = this.getGradient(
            400,
            this.angleValueObject.RightLine,
            this.angleValueObject.RightPointY,
            this.angleValueObject.RightPointX
            );
            this.setState({
                angleValueRight: this.getAngleRight(grad4, grad3)
            });
    }
    componentDidMount() {
        this.getAng();
    }
    
    getGradient = (Y1, X1, Y2, X2) => {
        return((Y1-Y2)/(X1-X2));
    } 
getAngleRight = (M1, M2)   =>  {
    if(this.state.RightLineX < this.state.RightX) {
        let tmp = M1;
        M1 = M2;
        M2 = tmp;
        console.log("getAngleRight");
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
            console.log("getAngleLeft");
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
                    ref={this.loadXLefx}
                    hidden={this.state.Left}>
                    {this.state.angleValueLeft}
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
                    {this.state.angleValueRight}
                    </div>
                </Draggable>

                <WebcamView onButtonClickt={this.onMeasurementClickt} getImageUrl = {this.props.getImageUrl}/>
            </div>
        );
    }
}