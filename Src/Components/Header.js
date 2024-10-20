import {HEADER_LOGO} from '../Utils/constant';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container' >
                <img className='logo' src={HEADER_LOGO}></img>
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
};
export default Header;