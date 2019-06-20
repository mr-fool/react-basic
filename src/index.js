import React from "react";
import ReactDom from "react-dom";

const App = () => {
    return React.createElement("h1", {className: "title"},'Good bye wired');
}


ReactDom.render(<App/>,document.querySelector("#root"));