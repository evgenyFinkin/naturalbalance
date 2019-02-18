import React from "react";
import "./styels/main.css";

import feetPlaceholder from "./pictures/yckrk5d5i.jpg";

export default class ImageItem extends React.Component   {
    render()    {
        return(
            <div className="ui segment" id = "placeholder_picture_angle"  onClick = {() => this.props.onItemClick(this.props.imageType)}>
                <p className="ui center aligned container">{this.props.imageType}</p>
                <img src = {this.props.setImageUrl}
                 alt = "feet placeholder" 
                 className="ui center aligned container"
                 />
            </div>
        );
    }
}