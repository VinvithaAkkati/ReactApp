/**
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *  </div>
 * </div>
 */

//React is the core library that handles all component creation related for UI 
//It can be used in phones and different platforms Its used to define structure of UI
const heading = React.createElement("h1",{id:"heading"},"h1 from React!");
 
const parent = React.createElement(
    "div",
    {id:"parent"}, 
    React.createElement("div",{id:"child"},
        [heading,React.createElement("h2",{id:"heading2"},"h2 from React")]));

//But reactDOM is used for web DOM manipulations , rESPONSIBLE FOR RENDERING REACT COMPOnents to Web
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering is a process of Converting react components into HTML elements that can be attached io DOM and displayed on Browser
root.render(parent);