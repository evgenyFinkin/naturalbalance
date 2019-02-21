
import "./styles/main.css";

import React from "react";
import ImageItem from "./image_item";

export default class ComparePictures extends React.Component {
    state = {
        imageType: {
            position1:"Before: ",
            position2:"After: ",
        }
    }
    render()    {
        return(
        <div className = "ui two column grid" id = "ComparePictures" style={this.props.setVisibility}>
             <ImageItem imageType = {this.state.imageType.position1} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
             <ImageItem imageType = {this.state.imageType.position2} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
        </div>
        );
    }
}