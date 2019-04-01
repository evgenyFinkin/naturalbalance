import "./styles/main.css";

import React from "react";
import WebcamView from "./webcam_view";
import Draggable from 'react-draggable';
import LineTo ,{ Line } from 'react-lineto';

export default class WebcamContiner extends React.Component {
    state = {
        Left: true,
        Right: true,
        LeftDisabled: true,
        RightDisabled: true,
        angleValueLeft: 0,
        angleValueRight: 0,

        lineLeftTop:{x: 650, y: 112},
        lineLeftButom:{x: 648, y: 590},
        objLeft:{x:763, y:278},
        lineRightTop:{x: 950, y: 112},
        lineRightButom:{x: 948, y: 590},
        objRight:{x:865, y:282},
        zl: -3000,
        zr: -3000,
    }

    angleValueObject = {
        LeftLine: 650,
        LeftPointX: 750,
        LeftPointY: 270,
        RightLine: 950,
        RightPointX: 860,
        RightPointY: 270,
    }


    handleDragRL = (e, ui) =>  {
        this.setState({
            lineRightTop:   {
                x: this.state.lineRightTop.x + ui.deltaX,
                y: this.state.lineRightTop.y
            },
            lineRightButom: {
                x: this.state.lineRightButom.x + ui.deltaX,
                y: this.state.lineRightButom.y
            }
        });
    }
    handleDragRO = (e, ui) =>  {
        this.setState({
            objRight:   {
                x: this.state.objRight.x + ui.deltaX,
                y: this.state.objRight.y + ui.deltaY
            }
        });
    }
    handleDragLL = (e, ui) =>  {
        this.setState({
            lineLeftTop:   {
                x: this.state.lineLeftTop.x + ui.deltaX,
                y: this.state.lineLeftTop.y
            },
            lineLeftButom: {
                x: this.state.lineLeftButom.x + ui.deltaX,
                y: this.state.lineLeftButom.y
            }
        });
    }
    handleDragLO = (e, ui) =>  {
        this.setState({
            objLeft:   {
                x: this.state.objLeft.x + ui.deltaX,
                y: this.state.objLeft.y + ui.deltaY
            }
        });
    }

    onMeasurementClickt  = (buttenId) => {
        if(buttenId === "Left")   {
            this.setState({
                Left: !this.state.Left,
                LeftDisabled: !this.state.LeftDisabled,
                zl: -this.state.zl
            })
        }
        if(buttenId === "Right")    {
            this.setState({
                Right: !this.state.Right,
                RightDisabled: !this.state.RightDisabled,
                zr: -this.state.zr
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
            480,
            this.angleValueObject.LeftLine,
            this.angleValueObject.LeftPointY,
            this.angleValueObject.LeftPointX
            );
        this.setState({
            angleValueLeft: this.getAngleLeft(grad1, grad2,
                this.angleValueObject.LeftLine,
                this.angleValueObject.LeftPointX)
        });
        
        let grad3 = this.getGradient(
            0,
            this.angleValueObject.RightLine,
            this.angleValueObject.RightPointY,
            this.angleValueObject.RightPointX
            );
        let grad4 = this.getGradient(
            480,
            this.angleValueObject.RightLine,
            this.angleValueObject.RightPointY,
            this.angleValueObject.RightPointX
            );
            this.setState({
                angleValueRight: this.getAngleRight(grad4, grad3,
                    this.angleValueObject.RightLine,
                    this.angleValueObject.RightPointX)
            });
            this.props.getMaetrics(this.state.angleValueLeft, this.state.angleValueRight);
            
    }
    componentDidMount() {
        this.getAng();
    }
    getGradient = (Y1, X1, Y2, X2) => {
        return((Y1-Y2)/(X1-X2));
    } 
getAngleRight = (M1, M2, X1, X2)   =>  {
    if(X1 < X2) {
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
    getAngleLeft = (M1, M2, X1, X2)   =>  {
        if(X1 > X2) {
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
        //console.log(this.props.setImageItem.imgUrl)
        return(
            <div
            className = "ui Huge rounded image"
            style={this.props.setVisibility}>
                <Draggable
                    disabled = {this.state.LeftDisabled}
                    axis="x"
                    handle=".handle"
                    bounds = "parent"
                    defaultPosition={{x: 175, y: 2}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDragLL}
                    onStop={(e) => this.onStopLeftLineX(e)}>

                    <div className="handle line D"
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
                    onDrag={this.handleDragLO}
                    onStop={(e) => this.onStoptLeftX(e)}>

                    <div className="handle C"
                    id="left-X"
                    ref={this.loadXLefx}
                    hidden={this.state.Left}>
                    <h1>O</h1>
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
                    onDrag={this.handleDragRL}
                    onStop={(e) => this.onStopRightLineX(e)}>

                    <div className="handle line A"
                    id="right-line"
                    hidden={this.state.Right}/>
                </Draggable>

                <Draggable
                    disabled = {this.state.RightDisabled}
                    axis="both"
                    handle=".handle"
                    bounds = "parent"
                    defaultPosition={{x: 380, y: 150}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDragRO}
                    onStop={(e) => this.onStoptRightX(e)}>

                    <div className="handle B"
                    id="right-X"
                    hidden={this.state.Right}>
                    <h1>O</h1>
                    </div>
                </Draggable>
            
                <WebcamView 
                    onButtonClickt={this.onMeasurementClickt} 
                    getImageUrl = {this.props.getImageUrl}
                    getFlag = {this.props.getFlag}
                    setImageItem = {this.props.setImageItem}
                    setMode = {this.props.setMode}
                />
                    <LineTo 
                    from="A" to= "B"
                    fromAnchor = "top"
                    borderStyle = {this.props.setVisibility.visibility !== "visible" ? 'hidden' : 'dashed'}
                    zIndex = {this.state.zr}
                    borderWidth = {2}
                    borderColor = "lightskyblue"
                    delay = {true}
                    />
                    <LineTo 
                    from="A" to= "B"
                    fromAnchor = "bottom"
                    borderStyle = {this.props.setVisibility.visibility !== "visible" ? 'hidden' : 'dashed'}
                    zIndex = {this.state.zr}
                    borderWidth = {2}
                    borderColor = "lightskyblue"
                    delay = {true}
                    />
                    <LineTo 
                    from="D" to= "C"
                    fromAnchor = "top"
                    borderStyle = {this.props.setVisibility.visibility !== "visible" ? 'hidden' : 'dashed'}
                    zIndex = {this.state.zl}
                    borderWidth = {2}
                    borderColor = "rgb(99, 219, 99)"
                    delay = {true}
                    />
                    <LineTo 
                    from="D" to= "C"
                    fromAnchor = "bottom"
                    borderStyle = {this.props.setVisibility.visibility !== "visible" ? 'hidden' : 'dashed'}
                    zIndex = {this.state.zl}
                    borderWidth = {2}
                    borderColor = "rgb(99, 219, 99)"
                    delay = {true}
                    />
                <div className = "">
                    <p style ={{color: "lightskyblue"}} >Right:{this.state.angleValueRight}&deg;</p>
                    <p style ={{color: "rgb(99, 219, 99)"}}>Left:{this.state.angleValueLeft}&deg;</p>
                </div>

            </div>
        );
    }
}