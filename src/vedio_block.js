import React from "react";
import "./styles/main.css";
import ImageItem from "./image_item";


export default class WebcamContiner extends React.Component   {
    state = {
        imageType: {
            position1:"Before: Standing straight",
            position2:"Before: Knees bent 45\xB0",
            position3:"Before: Raise toes up",
            position4:"After: Standing straight",
            position5:"After: Knees bent 45\xB0",
            position6:"After: Raise toes up",
        }
    }

    render()    {
        return(
            <div className = "ui six column grid" id = "image_container">
                <ImageItem 
                setFlag = {this.props.setFlag} 
                getFlag = {this.props.getFlag} 
                getImageItem = {this.props.getImageItem}  
                imageType = {this.state.imageType.position1} 
                onItemClick = {this.props.onItemClick} 
                setImageUrl = {this.props.setImageUrl} 
                imageId = {this.props.imageId} 
                setMaetrics = {this.props.setMaetrics}/>

                <ImageItem 
                setFlag = {this.props.setFlag} 
                getFlag = {this.props.getFlag} 
                getImageItem = {this.props.getImageItem}  
                imageType = {this.state.imageType.position4} 
                onItemClick = {this.props.onItemClick} 
                setImageUrl = {this.props.setImageUrl} 
                imageId = {this.props.imageId} 
                setMaetrics = {this.props.setMaetrics}/>

                <ImageItem 
                setFlag = {this.props.setFlag} 
                getFlag = {this.props.getFlag} 
                getImageItem = {this.props.getImageItem}  
                imageType = {this.state.imageType.position2} 
                onItemClick = {this.props.onItemClick} 
                setImageUrl = {this.props.setImageUrl} 
                imageId = {this.props.imageId} 
                setMaetrics = {this.props.setMaetrics}/>

                <ImageItem 
                setFlag = {this.props.setFlag} 
                getFlag = {this.props.getFlag} 
                getImageItem = {this.props.getImageItem}  
                imageType = {this.state.imageType.position5} 
                onItemClick = {this.props.onItemClick} 
                setImageUrl = {this.props.setImageUrl} 
                imageId = {this.props.imageId} 
                setMaetrics = {this.props.setMaetrics}/>

                <ImageItem 
                setFlag = {this.props.setFlag} 
                getFlag = {this.props.getFlag} 
                getImageItem = {this.props.getImageItem}  
                imageType = {this.state.imageType.position3} 
                onItemClick = {this.props.onItemClick} 
                setImageUrl = {this.props.setImageUrl} 
                imageId = {this.props.imageId} 
                setMaetrics = {this.props.setMaetrics}/>

                <ImageItem 
                setFlag = {this.props.setFlag} 
                getFlag = {this.props.getFlag} 
                getImageItem = {this.props.getImageItem}  
                imageType = {this.state.imageType.position6} 
                onItemClick = {this.props.onItemClick} 
                setImageUrl = {this.props.setImageUrl} 
                imageId = {this.props.imageId} 
                setMaetrics = {this.props.setMaetrics}/>  
            </div>
        );
    }
}
