import React from "react";
import ReactDom from "react-dom";
import MainScreenComponent from "./main_screen_container";
import VedioBlock from "./vedio_block";

class App extends React.Component   {
    render()    {
        return(
            <div>
                <MainScreenComponent/>
                <VedioBlock/>
            </div>
        );
    }
}


ReactDom.render(
    <App/>
   ,document.querySelector("#root")
);