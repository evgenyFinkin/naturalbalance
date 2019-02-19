import React from "react";
import "./styels/main.css";


export default class ImageItem extends React.Component   {
    state = {
        imgUrl: this.props.setImageUrl
    }
    shouldComponentUpdate(nextProps)    {
    // if(this.props.imageId === this.props.imageType)    {
    //     console.log("Test")
    // }
    if(nextProps.setImageUrl !== this.state.imgUrl 
    && this.props.imageId === this.props.imageType)  {
        this.setState({
            imgUrl: this.props.setImageUrl
        });
        return false;
    }else {
        return true;
    }
}

    render()    {
        return(
            <div className="ui segment" id = "placeholder_picture_angle"  onClick = {() => this.props.onItemClick(this.props.imageType)}>
                <p className="ui center aligned container">{this.props.imageType}</p>
                <img src = {this.state.imgUrl}
                 alt = "feet placeholder" 
                 className="ui center aligned container"
                 />
            </div>
        );
    }
}