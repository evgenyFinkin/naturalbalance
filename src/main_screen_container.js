import React from "react";
import MeasurementContainer from "./measurement_container"

import "./styels/main.css";

export default class WebcamContiner extends React.Component   {

    render()    {
        return(
            <div className="ui container" id = "MeasurementContainer_box">
                <MeasurementContainer id = "float"/>
                <div id = "button_panel">
                    <ul>
                        <li className="marg">
                            <button className="ui brown basic button">
                            Take Picture
                            </button>
                        </li>
                        <li className="marg">
                            <button className="ui grey basic button">
                            Compare Pictures
                            </button>
                        </li>
                        <li className="marg">
                            <button className="ui black basic button">
                            Print
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
