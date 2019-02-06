import React from "react";
import ReactDom from "react-dom";
import MeasurementContainer from "./measurement_container"

export default class WebcamContiner extends React.Component   {

    render()    {
        return(
            <div className="ui center aligned container" id = "MeasurementContainer_box">
                <MeasurementContainer/>
            </div>
        );
    }
}
