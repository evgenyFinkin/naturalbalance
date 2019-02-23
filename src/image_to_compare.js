import "./styles/main.css";

import React from "react";

export default class ImageToCompare extends React.Component   {

    render()    {
        return(
            <div 
                className="ui segment"
                id = "image-to-compare-item">
                <p
                    id = "small_picture_name">{this.props.setImageItem.headline}
                </p>
                <img 
                    src = {this.props.setImageItem.image}
                    alt = "feet placeholder" 
                />
                 <div id = "low_measurement">
                    <p>Left foot: {this.props.setImageItem.maetrics.L}</p>
                    <p>Right foot: {this.props.setImageItem.maetrics.R}</p>
                 </div>
            </div>
        );
    }
}