import React from 'react';

class Profile extends React.Component {

    constructor(props){
        super(props);
        //create state 
        this.state = {
            count: 0,
        }
    }

    render(){
        return (
            <div>

                <h1>Profile class component</h1>
                <p>Name: {this.props.name}</p>
                <p>Count: {this.state.count}</p>

                <button onClick={() => {
                    this.setState
                }}></button>
            </div>

        )
    }
}

export default Profile;