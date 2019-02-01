import "./styels/main.css";

import React from "react";
import Webcam from "react-webcam";

export default class WebcamCapture extends React.Component {
    
    setRef = webcam => {
        this.webcam = webcam;
      };

      capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
      };

      render()    {

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
          };

        return(
            <div>
                <Webcam
                audio={false}
                ref={this.setRef}
                videoConstraints={videoConstraints}
                className = "ui Big rounded image"
                id = "webcam"
                imageSmoothing = {true}
                screenshotQuality = {1}
                />
                <div id = "capture">
                <button className = "ui inverted primary button">Left measurement</button>
                <button onClick={this.capture} className = "ui inverted button">Capture photo</button>
                <button className = "ui inverted primary button">Right measurement</button>
                </div>
            </div>
        );
    }
}