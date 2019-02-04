import "./styels/main.css";

import React from "react";
import Webcam from "react-webcam";


export default class WebcamCapture extends React.Component {
    

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
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
      };
      render()    {
        const videoConstraints = {
            width: 480,
            height: 300,
            facingMode: "user"
          };

        return(

            <div>
                <Webcam
                audio={false}
                ref={this.setRef}
                videoConstraints={videoConstraints}
                className = "ui Huge rounded image webcam"
                imageSmoothing = {true}
                screenshotQuality = {1}
                />
                <div id = "capture">
                <button className = "ui inverted green  button"
                onClick = {this.onButtonClicktLeft}>
                Left measurement
                </button>

                <button onClick={this.capture}
                className="ui inverted button">
                Capture photo
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