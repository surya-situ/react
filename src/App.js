import React,{lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css'

// components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

//Redux
import { Provider } from 'react-redux';
import store from './utils/store';

/** 
 *? importing it by using lazy import
//import Instamart from './components/Instamart';
**/

// router
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';


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


/**  
 *? lazy loading:
**/
const Instamart = lazy(() => import('./components/Instamart'))
 
const AppLayout = () => {

    const [user, setUser] = useState({
        name: 'Suryakanta Das',
        email: 'suryakanta@gmail.com'
    });


    return (
        //store={store} = store is important but {store} could be named anything:
        <Provider store={store}>
            <Header />
            {/* the content should always change in outlet */}
            <Outlet />
            <Footer />
        </Provider>
        
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                // passing the props{user information} to to every card
                element: <Body user={{
                    name:'Suryakanta Das',
                    email: 'suryakanta@gmail.com'
                }}/>
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile", //localhost:1234/about/profile
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                // to get into each card 
                // the /:id is the unique id {/:} is needed but id could be named anything.
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }, 
            {
                path: '/instamart',
                /** 
                  * ? suspense
                **/
                element:(<Suspense fallback={Shimmer} > <Instamart /> </Suspense> ),
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.querySelector('.root'));

// root.render(< AppLayout/>);
root.render(<RouterProvider router={appRouter} />)
