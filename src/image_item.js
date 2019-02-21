import React from "react";
import ReactToPrint from "react-to-print";
import "./styels/main.css";


export default class ImageItem extends React.Component   {
    state = {
        imgUrl: this.props.setImageUrl
    }
    shouldComponentUpdate(nextProps)    {
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
            <div className="ui segment"
                id = "placeholder_picture_angle" 
                onClick = {() => this.props.onItemClick(this.props.imageType)}
                ref = {e => (this.componentRef = e)}>
                <p className="ui center aligned container"
                    id = "small_picture_name">{this.props.imageType}
                </p>
                <img 
                    src = {this.state.imgUrl}
                    alt = "feet placeholder" 
                 />
                 <div id = "low_measurement">
                    <p>Left foot:</p>
                    <p>Right foot:</p>
                    <ReactToPrint
                        trigger = {() => <button className="mini ui inverted button">Print</button>}
                        content = {() => this.componentRef}
                        pageStyle = "./styels/component.css"
                    />
                 </div>
            </div>
        );
    }
}

