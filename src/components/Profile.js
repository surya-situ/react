import React,{useState, useEffect} from 'react'

const Profile = ({name}) => {

    const[count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 2)
    }

    useEffect(() => {

        // let stopInterval = setInterval(() => {
        //     console.log('calling interval')
        // }, 1000)

        console.log('useEffect')

        return () => {
            // clearInterval(stopInterval)
            console.log('useEffect Return');
        }
    },[]);

    console.log('render')

    return (
        <div>
            <h3>Profile component</h3>
            <p>Made by {name}</p>
            <p>Count: {count}</p>

            <button onClick={increase}>increase</button>
        </div>
    )
}

export default Profile