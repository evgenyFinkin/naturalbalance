import React from "react";
import WebcamView from "./webcam_view";


export default class WebcamContiner extends React.Component {

    render()    {
        return(
            <div className = "ui webcam-frame" >
                <WebcamView />
            </div>
        );
    }
}