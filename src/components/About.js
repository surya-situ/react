import React from 'react';
import { Outlet } from 'react-router-dom';
// import ProfileClass from './ProfileClass';
import ProfileFunctio2n from './Profile';


let About = () => {

    console.log('parent render.');
    return (
        <div>
            <h1>About us page</h1>
            <p>This is the Namaste react live course <span style={{color: 'white', backgroundColor:'green', padding: '2px 15px', fontSize:'50px', borderRadius:'10px'}}>+</span> +</p>

            <ProfileFunctio2n name={'SuryaKanta Das'} />
            {/* <ProfileClass name ={'surya Class components'} /> */}
        </div>
    )
};

export default About;