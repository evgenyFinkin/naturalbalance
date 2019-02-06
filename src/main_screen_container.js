import React from "react";
import ReactDom from "react-dom";
import MeasurementContiner from "./measurement_continer"

export default class WebcamContiner extends React.Component   {
    //id = "MeasurementContiner_box"
    render()    {
        return(
            <div className="ui center aligned container" id = "MeasurementContiner_box">
                <MeasurementContiner/>
            </div>
        );
    }
}
