import React from 'react';
import './Cart.css'
const Cart = ({ detail }) => {
     console.log(detail)
     const { name: { common }, flags: { png }, capital, languages: { spa, grn, }, region, population } = detail
     return (
          <div>
               <div>
                    <img src={png} alt="" />
               </div>
               <h3>Name: {common}</h3>
               <p>Capital: {capital}</p>
               <p>Language: {spa} and {grn}</p>
               <p>Region: {region}</p>
               <p>Population: {population}</p>
          </div>
     );
};

export default Cart;