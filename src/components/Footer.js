import React,{useContext} from 'react'
import UserContext from '../utils/UserContext'

const Footer = () => {

    const {user} = useContext(UserContext)

    return (
        <div className='bg-yellow-500 flex justify-center align-middle p-5'>

            <h4>Footer</h4>
            <h3>{user.name}</h3>
        </div>
    )
    
}

export default Footer