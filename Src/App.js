import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';

const AppLayout = () => {
  console.log(<Body></Body>)
    return (
        <div className = "app">
            <Header></Header>
            <Body></Body>
            {/* <Footer></Footer> */} 
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


