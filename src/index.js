import React from "react";
import ReactDom from "react-dom";
import MainScreenComponent from "./main_screen_container"

class App extends React.Component   {
    render()    {
        return(
            <div>
                <MainScreenComponent/>
            </div>
        );
    }
}


ReactDom.render(
    <App/>
   ,document.querySelector("#root")
);