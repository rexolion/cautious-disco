import * as React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Cart from './Cart/Cart';
import './Header.css';

const Header = () => {
  return (
    <header className={'Header'}>
      <div className="Header-container">
        <img
          className="Header-logo"
          alt="Logo"
          src="https://www.logolynx.com/images/logolynx/3c/3c3aa2e0f3283d8a069dd4f96f2719d9.jpeg"
        />
        <SearchBar/>
        <Cart/>
      </div>
    </header>
  );
};

export default Header;
