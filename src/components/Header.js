import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import useOnline from '../utils/useOnline';

import Title from './Title';


const Header = () => {

  const[loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='flex justify-between bg-red-50 sha'>
        <Title />

        <div className='flex'>
            <ul className='flex px-10 py-8'>

              <li className='px-3'><Link to='/'>Home</Link></li>
              <li className='px-3'><Link to='/about'>About</Link></li>
              <li className='px-3'> <Link to="/contact">Contact</Link></li>
              <li className='px-3'> <Link to="/instamart">Instamart</Link></li>
              <li>Cart</li>

            </ul>

            <h1>{useOnline ? '✅' : '⛔'}</h1>

            {

              loggedIn ? ( <button onClick={() => setLoggedIn(false)}>log out</button> ) : ( <button  onClick={() => setLoggedIn(true)}>log in</button> )
            
            }
            
        </div>
    </div>
  )
}

export default Header;