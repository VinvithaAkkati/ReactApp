

const heading = React.createElement("h1",{id:"heading"},"h1 from React!");
 
const parent = React.createElement(
    "div",
    {id:"parent"}, 
   [ React.createElement("div",{id:"child"},
        [heading,React.createElement("h2",{id:"heading2"},"h2 from React")]),
        React.createElement("div",{id:"child2"},
            [heading,React.createElement("h2",{id:"heading2"},"h2 from Child2")])]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);