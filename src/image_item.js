import React from "react";
import ReactToPrint from "react-to-print";
import "./styles/main.css";
export default class ImageItem extends React.Component   {
    state = {
        imgUrl: this.props.setImageUrl,
        maetrics: {
            L: 0,
            R: 0,
        }
    }

    shouldComponentUpdate(nextProps)    {
    if(nextProps.setImageUrl !== this.state.imgUrl 
    && this.props.imageId === this.props.imageType)  {
        this.setState({
            imgUrl: this.props.setImageUrl,
            maetrics:{
                L: this.props.setMaetrics.L,
                R: this.props.setMaetrics.R,
            }
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
                <p
                    id = "small_picture_name">{this.props.imageType}
                </p>
                <img 
                    src = {this.state.imgUrl}
                    alt = "feet placeholder" 
                />
                 <div id = "low_measurement">
                    <p>Left foot: {this.state.maetrics.L}</p>
                    <p>Right foot: {this.state.maetrics.R}</p>
                    <ReactToPrint
                        trigger = {() => <button className="mini ui inverted button" id = "printButton">Print</button>}
                        content = {() => this.componentRef}
                        pageStyle = 
                        "@page{margin-top: 30%}#placeholder_picture_angle{max-height: 70%; min-width: 100%;}#printButton{visibility: hidden}"
                    />
                 </div>
            </div>
        );
    }
}