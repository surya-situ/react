import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


/* 
                Header
                    -Logo
                    -Nav items
                    -cart
                Body
                    -Search bar
                    -Restaurant list
                        -Restaurant Card
                            -Image
                            -Name
                            -Rating
                            -Cuisines
                Footer   
                    -Links
                    -Copyright         
            
*/





 
const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
            <Body />
            <Footer />
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(< AppLayout/>);
