//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 1;
const intervalValue = (seconds) => {
    return Math.floor(counter/seconds);
};

setInterval(function() {
    counter++
    //render your react application
    ReactDOM.render(<Home
            one={intervalValue(10)}
            two={intervalValue(100)}
            three={intervalValue(1000)}
            four={intervalValue(10000)}
            five={intervalValue(100000)}
            six={intervalValue(1000000)}
        />, document.querySelector("#app"));

}, 100);
