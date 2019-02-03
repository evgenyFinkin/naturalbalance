import "./styels/main.css";

import React from "react";
import WebcamView from "./webcam_view";
import Draggable, {DraggableCore} from 'react-draggable';


export default class WebcamContiner extends React.Component {

    render()    {

        return(
            
            <div id = "webcam-container" >
            

            <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>

                <WebcamView/>
            </div>
        );
    }
}