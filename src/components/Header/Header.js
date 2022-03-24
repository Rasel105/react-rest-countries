import React from 'react';
import './Header.css'
const Header = () => {
     return (
          <div className='header'>
               <h1>Rest Countries</h1>
               <div>
                    <a href="/home">Home</a>
                    <a href="/details">Details</a>
                    <a href="/about">About</a>
                    <a href="/contant">Contact</a>
               </div>
          </div>
     );
};

export default Header;