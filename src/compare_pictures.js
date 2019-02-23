
import "./styles/main.css";

import React from "react";
import ImageToCompare from "./image_to_compare";
import feetPlaceholder from "./pictures/yckrk5d5i.jpg";


export default class ComparePictures extends React.Component {
    state = {
        after:{
            headline: this.props.setImageItem.imageItemSelect,
            image: feetPlaceholder,
            maetrics: {
                L: 0,
                R: 0
            },
        },
        before:{
            headline: this.props.setImageItem.imageItemSelect,
            image: feetPlaceholder,
            maetrics: {
                L: 0,
                R: 0
            },
        }
    }
    componentWillUpdate(nextProps)   {
            if(nextProps.setImageItem.imageItemSelect !== this.state.after.headline
                && nextProps.setImageItem.imageItemSelect[0] === "A"
                && nextProps.mod)  {
                this.setState({
                    after:{
                        headline: nextProps.setImageItem.imageItemSelect,
                        image: nextProps.setImageItem.imageUrl,
                        maetrics:{
                            L: nextProps.setImageItem.maetrics.L,
                            R: nextProps.setImageItem.maetrics.R
                        }
                    }
                });
                return true;
            }
            if(nextProps.setImageItem.imageItemSelect !== this.state.before.headline
                && nextProps.setImageItem.imageItemSelect[0] === "B"
                && nextProps.mod)  {
                this.setState({
                    before:{
                        headline: nextProps.setImageItem.imageItemSelect,
                        image: nextProps.setImageItem.imageUrl,
                        maetrics:{
                            L: nextProps.setImageItem.maetrics.L,
                            R: nextProps.setImageItem.maetrics.R
                        }
                    }
                });
                return true;
            }
        return false;
    }

    render()    {
        return(
        <div className = "ui two column grid" id = "ComparePictures" style={this.props.setVisibility}>
             <ImageToCompare setImageItem = {this.state.before}/>
             <ImageToCompare setImageItem = {this.state.after}/>
        </div>
        );
    }
}