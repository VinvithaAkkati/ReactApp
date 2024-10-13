import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container' >
                <img className='logo' src="https://thumbs.dreamstime.com/b/fast-delivery-logo-design-food-service-creative-template-running-burger-corporate-identity-restaurant-cafe-vector-124330704.jpg"></img>
            </div>
            <div className='nav-elements'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurentCard = () => {
 return (
    //<div className='resto-card-container'>
        <div className="resto-card">
        <img className="restro-logo" src="https://images.adsttc.com/media/images/63bd/752c/a9f4/9f1c/c9dd/e0b3/slideshow/moonhouse-restaurant-ewert-leaf_1.jpg?1673360713"></img>
        <h3>Meghana Foods</h3>
        <h4>Biryani, Asian, American</h4>
        <h4>4.4 starts</h4>
        <h4>34 min</h4>
        </div>
    //</div>
 );
}
const Body = () => {
return (
    <div className='body-container'>
        <div className='search-bar'> Search</div>
        <div className='resto-card-container'>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
        </div>
    </div>
);
}
const AppLayout = () => {
  
    return (
    //Header
        <div className = "app">
            <Header></Header>
            <Body></Body>
            {/* <Footer></Footer> */} 
        </div>
    //Body
    //Footer
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


