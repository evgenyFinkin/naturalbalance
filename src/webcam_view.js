import "./styles/main.css";

import React from "react";
import Webcam from "react-webcam";
import feetPlaceholder from "./pictures/yckrk5d5i.jpg";


export default class WebcamCapture extends React.Component {
    
    state = {
        imageUrl: feetPlaceholder
    }

    state = {
        Left: false,
        Right: false
    }
    onButtonClicktLeft = () => {
        this.setState({Left: !this.state.Left});
        this.props.onButtonClickt("Left");
    }
    onButtonClicktRight = () => {
        this.setState({Right: !this.state.Right});
        this.props.onButtonClickt("Right");
    }
    
    setRef = webcam => {
        this.webcam = webcam;
      };

      capture = () => {
        this.props.getFlag(true);
        this.setState({
            imageUrl: this.webcam.getScreenshot()
        });
        this.props.getImageUrl(this.webcam.getScreenshot());
      };
      render()    {
        const videoConstraints = {
            facingMode: "user"
          };

        return(
            <div >
                <Webcam
                audio={false}
                ref={this.setRef}
                videoConstraints={videoConstraints}
                className = "ui Huge image webcam"
                imageSmoothing = {true}
                screenshotQuality = {1}
                screenshotFormat = "image/jpeg"
                />
                <div id = "capture">
                <button className = "ui inverted green button"
                onClick = {this.onButtonClicktLeft}>
                Left measurement
                </button>
                <button onClick={this.capture}
                className="ui inverted button">
                Capture picture
                </button>
                <button className = "ui inverted primary button"
                onClick = {this.onButtonClicktRight}>
                Right measurement
                </button>
                </div>

            </div>
        );
    }
}