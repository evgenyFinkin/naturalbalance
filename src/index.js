import "./styles/main.css";

import React from "react";
import ReactDom from "react-dom";
import MainScreenComponent from "./main_screen_container";
import VedioBlock from "./vedio_block";
import feetPlaceholder from "./pictures/yckrk5d5i.jpg";

class App extends React.Component   {

    state = {
        imageItemSelect: "Select the type of picture and capture it",
        imageUrl: feetPlaceholder,
        maetrics:    {
            L: 0,
            R: 0,
        }    
    }


    render()    {
        return(
            <div>
                <MainScreenComponent 
                headline = {this.state.imageItemSelect} 
                getImageUrl = {(url) => this.setState({imageUrl: url})}
                getMaetrics = {(l,r) => this.setState({
                    maetrics: {
                        L: l,
                        R: r
                    }
                })}
                setImageUrl = {this.state.imageUrl}
                />
                <VedioBlock 
                onItemClick = {(itemName) => this.setState({imageItemSelect: itemName})}
                setImageUrl = {this.state.imageUrl}
                imageId = {this.state.imageItemSelect}
                setMaetrics = {this.state.maetrics}
                />
            </div>
        );
    }
}


ReactDom.render(
    <App/>
   ,document.querySelector("#root")
);