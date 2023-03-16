import {createContext} from 'react';

const UserContext = createContext({
    name:'Dummy Name',
    email:'dummy@gmail.com'
})

export default UserContext;