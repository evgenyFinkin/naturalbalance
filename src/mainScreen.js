import "./styles/main.css";

import React from "react";

import MainScreenComponent from "./main_screen_container";
import VedioBlock from "./vedio_block";
import feetPlaceholder from "./pictures/yckrk5d5i.jpg";
export default class MainScreen extends React.Component   {
    state = {
        flag: false,
        imageItem:  {
            imageItemSelect: "Select the type of picture and capture it",
            imageUrl: feetPlaceholder,
            maetrics:    {
                L: 0,
                R: 0,
            },
        }
    }
    render()    {
        return(
                <div>
                    <MainScreenComponent
                    headline = {this.state.imageItem.imageItemSelect}
                    getFlag = {(flag) => this.setState({flag})}
                    getImageUrl = {(url) => this.setState({imageUrl: url})}
                    getMaetrics = {(l,r) => this.setState({
                        maetrics: {
                            L: l,
                            R: r
                        }
                    })}
                    setImageItem = {this.state.imageItem}
                    setImageUrl = {this.state.imageUrl}
                    />
                    <VedioBlock 
                    onItemClick = {(itemName) => this.setState({imageItemSelect: itemName})}
                    setImageUrl = {this.state.imageUrl}
                    getImageItem = {(imageItemSelect, imageUrl, maetrics) => this.setState({
                        imageItem:  {
                            imageItemSelect,
                            imageUrl,
                            maetrics:    {
                                L: maetrics.L,
                                R: maetrics.R
                            }}})}
                    getFlag = {(flag) => this.setState({flag})}
                    setFlag = {this.state.flag}
                    imageId = {this.state.imageItem.imageItemSelect}
                    setMaetrics = {this.state.maetrics}
                    />
                </div>
        );
    }
}