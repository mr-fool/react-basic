import React from "react";
import ReactDom from "react-dom";

const App = () => {
    return ( 
    <h1> 
        <div>Good bye wired </div>
    </h1> 
    )
}


ReactDom.render(<App/>,document.querySelector("#root"));