import React from 'react';
import ReactDOM from 'react-dom';

 const heading = React.createElement("h1",{id:"heading"},"h1 from React!!");
 
// const parent = React.createElement(
//     "div",
//     {id:"parent"}, 
//    [ React.createElement("div",{id:"child"},
//         [heading,React.createElement("h2",{id:"heading2"},"h2 from React")]),
//         React.createElement("div",{id:"child2"},
//             [heading,React.createElement("h2",{id:"heading2"},"h2 from Child2")])]);

 const jsxElement = <h1>This is from JSX</h1>;
 const Title = ()=>{
    return <h1>This is Title FC</h1>;
 }
 const JsxElement = () => {
    return (
        <div>
            <Title/>
    <h1>
        This is Functionl Component 
    </h1></div>)
 }
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<JsxElement />);

//const heading= React.createElement("h1",{id:"heading"},"h1 from React! 🚀")