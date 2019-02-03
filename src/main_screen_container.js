import "./styels/main.css";

import React from "react";
import WebcamView from "./webcam_view";
import Draggable, {DraggableCore} from 'react-draggable';


export default class WebcamContiner extends React.Component {
    render()    {
        return(
            <div className = "ui Huge rounded image" id="webcam-container" >
                <Draggable
                    axis="x"
                    handle=".handle"
                    defaultPosition={{x: 175, y: 2}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div className="handle line" id="left-line"/>
                </Draggable>
                <Draggable
                    axis="x"
                    handle=".handle"
                    defaultPosition={{x: 475, y: 2}}
                    position={null}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div className="handle line" id="right-line"/>
                </Draggable>
                <WebcamView/>
            </div>
        );
    }
}