import React from 'react';
import './SingleCountry.css'
const SingleCountry = ({ handleDetailsCart, country }) => {
     // console.log(country)
     const { flags: { png }, name: { common }, capital, region, population, area } = country;

     return (
          <div className='country'>
               <div>
                    <img src={png} alt="" />
               </div>
               <div className='country-detail'>
                    <p>Name: {common}</p>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <p>Population: {population}</p>
                    <p>Area: {area}</p>
               </div>
               <button onClick={() => handleDetailsCart(country)} className='details-btn'>
                    <h3>Country Details</h3>
               </button>
          </div>
     );
};

export default SingleCountry;