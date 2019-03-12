import "./styles/main.css";

import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Route, Link} from "react-router-dom";

import MainScreenComponent from "./main_screen_container";
import VedioBlock from "./vedio_block";
import feetPlaceholder from "./pictures/yckrk5d5i.jpg";
import LoginPage from "./login";
import MainScreen from "./mainScreen";

class App extends React.Component   {
    /*<Route path="/" exact component={LoginPage}/> */
    render()    {
        return(
            <BrowserRouter>
                <div>
                    
                    <Route path="/" exact component={MainScreen}/>
                </div>
            </BrowserRouter>
        );
    }
}
 //             <div>
    //                 <MainScreenComponent
    //                 headline = {this.state.imageItem.imageItemSelect}
    //                 getFlag = {(flag) => this.setState({flag})}
    //                 getImageUrl = {(url) => this.setState({imageUrl: url})}
    //                 getMaetrics = {(l,r) => this.setState({
    //                     maetrics: {
    //                         L: l,
    //                         R: r
    //                     }
    //                 })}
    //                 setImageItem = {this.state.imageItem}
    //                 setImageUrl = {this.state.imageUrl}
    //                 />
    //                 <VedioBlock 
    //                 onItemClick = {(itemName) => this.setState({imageItemSelect: itemName})}
    //                 setImageUrl = {this.state.imageUrl}
    //                 getImageItem = {(imageItemSelect, imageUrl, maetrics) => this.setState({
    //                     imageItem:  {
    //                         imageItemSelect,
    //                         imageUrl,
    //                         maetrics:    {
    //                             L: maetrics.L,
    //                             R: maetrics.R
    //                         }}})}
    //                 getFlag = {(flag) => this.setState({flag})}
    //                 setFlag = {this.state.flag}
    //                 imageId = {this.state.imageItem.imageItemSelect}
    //                 setMaetrics = {this.state.maetrics}
    //                 />
    //             </div>
    //     );
    // }

ReactDom.render(
    <App/>
   ,document.querySelector("#root")
);