import React,{useState, useContext} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';


import Title from './Title';


const Header = () => {

  const[loggedIn, setLoggedIn] = useState(true);

  const isOnline = useOnline();

  // from userContext {using useContext}
  const {user} = useContext(UserContext)

  //store
  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className='flex justify-between bg-red-50 sm:bg-blue-100 md:bg-yellow-100'>
        <Title />

        <div className='flex'>
            <ul className='flex px-10 py-8'>

              <li className='px-3'> <Link to='/'>Home</Link> </li>
              <li className='px-3'> <Link to='/about'>About</Link> </li>
              <li className='px-3'> <Link to="/contact">Contact</Link> </li>
              <li className='px-3'> <Link to="/instamart">Instamart</Link> </li>
              <li className='px-3'> <Link to="/cart">Cart-{cartItems.length} items</Link></li>

            </ul>

            {/* <h1>{isOnline ? '✅' : '⛔'}</h1>
            <span className='font-bold'>{user.name}</span>
            {

              loggedIn ? ( <button onClick={() => setLoggedIn(false)}>log out</button> ) : ( <button  onClick={() => setLoggedIn(true)}>log in</button> )
            
            } */}
            
        </div>
    </div>
  )
}

export default Header;