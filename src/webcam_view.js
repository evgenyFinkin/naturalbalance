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
                <button className = "ui inverted green  button">Left measurement</button>
                <button onClick={this.capture} className = "ui inverted button">Capture photo</button>
                <button className = "ui inverted primary button">Right measurement</button>
                </div>
            </div>
        );
    }
}