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
        },
        flag: false
    }

    pictureMod = ()=> {
        this.setState({
            mode: "Take Picture",
            visibility: {
                pic: {visibility: "visible"},
                com: {visibility: "hidden"}
            },
            flag: false
        });
    }
    compareMod = ()=>   {
        this.setState({
            mode: "Compare Pictures",
            visibility: {
                pic: {visibility: "hidden"},
                com: {visibility: "visible"}
            },
            flag: true
        });
    }
    measureMod = ()=>   {
        this.setState({
            mode: "Measure Picture",
            visibility: {
                pic: {visibility: "visible"},
                com: {visibility: "hidden"}
            },
            flag: false
        });
    }

    render()    {
        return(
            <div className="ui container" id = "MeasurementContainer_box">
             <h1 style={this.state.visibility.pic}>{this.props.headline}</h1>
                <MeasurementContainer
                    id = "float"
                    getFlag = {this.props.getFlag}
                    getImageUrl = {this.props.getImageUrl}
                    getMaetrics = {this.props.getMaetrics}
                    setVisibility = {this.state.visibility.pic}
                    setImageItem = {this.props.setImageItem}
                    setMode = {this.state.mode}
                 />
                <ComparePictures
                    id = "ComparePictures"
                    setVisibility = {this.state.visibility.com}
                    setImageItem = {this.props.setImageItem}
                    mod = {this.state.flag}
                 />
                 
                <div id = "button_panel">
                    <ul>
                        <li className="marg">
                            <button 
                                className = "ui brown basic button"
                                onClick = {this.pictureMod}>
                                Take Picture
                            </button>
                        </li>
                        <li className="marg">
                            <button 
                                className="ui grey basic button"
                                onClick = {this.compareMod}>
                                Compare Pictures
                            </button>
                        </li>
                        <li className="marg">
                            <button 
                            className="ui pink basic button"
                            onClick = {this.measureMod}>
                            Measure image
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
