import "./styles/main.css";

import React from "react";
import MeasurementContainer from "./measurement_container";
import ComparePictures from "./compare_pictures";

export default class WebcamContiner extends React.Component   {

    state = {
        mode: "Take Picture",
        visibility: {
            pic: {visibility: "visible"},
            com: {visibility: "hidden"}
        }
    }

    pictureMod = ()=> {
        this.setState({
            mode: "Take Picture",
            visibility: {
                pic: {visibility: "visible"},
                com: {visibility: "hidden"}
            }
        });
    }

    compareMod = ()=>   {
        this.setState({
            mode: "Compare Pictures",
            visibility: {
                pic: {visibility: "hidden"},
                com: {visibility: "visible"}
            }
        });
    }

    render()    {
        return(
            <div className="ui container" id = "MeasurementContainer_box">
             <h1>{this.props.headline}</h1>
                <MeasurementContainer
                    id = "float"
                    getImageUrl = {this.props.getImageUrl}
                    getMaetrics = {this.props.getMaetrics}
                    setVisibility = {this.state.visibility.pic}
                 />
                 <ComparePictures
                    setVisibility = {this.state.visibility.com}
                    setImageUrl = {this.props.setImageUrl}
                 />
                <div id = "button_panel">
                    <ul>
                        <li className="marg">
                            <button 
                                className = "ui brown basic button"
                                onClick = {this.pictureMod}
                            >
                                Take Picture
                            </button>
                        </li>
                        <li className="marg">
                        <button 
                            className="ui grey basic button"
                            onClick = {this.compareMod}
                        >
                            Compare Pictures
                        </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
