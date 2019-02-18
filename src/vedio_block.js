import React from "react";
import "./styels/main.css";
import ImageItem from "./image_item";


export default class WebcamContiner extends React.Component   {
    state = {
        imageType: {
            position1:"Left: front",
            position2:"Left: side",
            position3:"Left: angle",
            position4:"Right: front",
            position5:"Right: side",
            position6:"Right: angle",
        }
    }

    render()    {
        return(
            <div className = "ui six column grid row" id = "image_container">
                    <ImageItem className="six wide column" imageType = {this.state.imageType.position1} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl}/>
                    <ImageItem className="six wide column" imageType = {this.state.imageType.position2} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl}/>
                    <ImageItem className="six wide column" imageType = {this.state.imageType.position3} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl}/>
                    <ImageItem className="six wide column" imageType = {this.state.imageType.position4} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl}/>
                    <ImageItem className="six wide column" imageType = {this.state.imageType.position5} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl}/>
                    <ImageItem className="six wide column" imageType = {this.state.imageType.position6} onItemClick = {this.props.onItemClick} setImageUrl = {this.props.setImageUrl}/>    
            </div>
        );
    }
}