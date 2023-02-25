import React,{useState} from 'react';
import '../App.css'

import Title from './Title';


const Header = () => {

  const[loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='header'>
        <Title />

        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
            {

              loggedIn ? ( <button onClick={() => setLoggedIn(false)}>log out</button> ) : ( <button  onClick={() => setLoggedIn(true)}>log in</button> )
            
            }
            
        </div>
    </div>
  )
}

export default Header;