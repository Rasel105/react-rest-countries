import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Countries.css'
const Countries = () => {
     const [countries, setCountries] = useState([])
     const [detail, setDetails] = useState([])
     useEffect(() => {
          fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
               .then(data => setCountries(data))
     }, [])
     const handleDetailsCart = (details) => {
          setDetails(details)
     }
     return (
          <div className='display-contries'>
               <div className='country-container'>
                    {
                         countries.map(country => <SingleCountry
                              key={country.cca3}
                              country={country}
                              handleDetailsCart={handleDetailsCart}
                         ></SingleCountry>)
                    }
               </div>
               <div className='country-details'>
                    <h1>Details Countries</h1>
                    <Cart detail={detail} />
               </div>
          </div>
     );
};

export default Countries;