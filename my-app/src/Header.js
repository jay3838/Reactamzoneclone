import React from 'react';
import './Header.css';
import SearchIcon from  '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { db,auth } from "./Firebase";

function Header() {
    const [{ basket,user}, dispatch] = useStateValue();
    
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
        // auth().signOut().then(() => {
        //     alert("singout succefuly");
        //   }).catch((error) => {
        //     // An error happened.
        //   });
      }
    
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" alt="amazone"/>
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuthenticaton} className="header__option">
                    <span className="header__optionOne">Hello {user ? user.email:'Gest'}</span>
                    <span className="header__optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <Link to='/Orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
                <div className="header__option">
                <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>

                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>




        </div>
    );
}

export default Header;