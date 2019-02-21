import React from "react";
import "./styles/main.css";
import ImageItem from "./image_item";


export default class WebcamContiner extends React.Component   {

    
    state = {
        imageType: {
            position1:"Before: front",
            position2:"Before: side",
            position3:"Before: angle",
            position4:"After: front",
            position5:"After: side",
            position6:"After: angle",
        }
    }

    render()    {
        return(
            <div className = "ui six column grid" id = "image_container">
                <ImageItem imageType = {this.state.imageType.position1} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
                <ImageItem imageType = {this.state.imageType.position4} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
                <ImageItem imageType = {this.state.imageType.position2} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
                <ImageItem imageType = {this.state.imageType.position5} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
                <ImageItem imageType = {this.state.imageType.position3} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>
                <ImageItem imageType = {this.state.imageType.position6} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl} imageId = {this.props.imageId} setMaetrics = {this.props.setMaetrics}/>  
            </div>
        );
    }
}