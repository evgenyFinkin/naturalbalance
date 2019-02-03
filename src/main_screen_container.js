import "./styels/main.css";

import React from "react";
import WebcamView from "./webcam_view";
import Draggable from 'react-draggable';


export default class WebcamContiner extends React.Component {
    
    state = {
        Left: true,
        Right: true,
        LeftDisabled: true,
        RightDisabled: true
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
                    onStop={this.handleStop}>

                    <div className="handle line"
                    id="left-line"
                    hidden={this.state.Left}/>

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
                    onStop={this.handleStop}>
                    <div className="handle line"
                    id="right-line"
                    hidden={this.state.Right}/>
                </Draggable>
                <WebcamView onButtonClickt={this.onMeasurementClickt}/>
            </div>
        );
    }
}