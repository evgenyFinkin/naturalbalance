import React from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export default class OpenCameraButton extends React.Component {
    onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        console.log('takePhoto');
      }
    render()    {
        return(
            <div>
                <Camera  onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }/>
            </div>
        );
    }
}