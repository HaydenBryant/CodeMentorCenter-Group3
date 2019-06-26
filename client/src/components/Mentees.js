import React, { Component } from 'react';

class Mentees extends Component {
    state = {
        Name:'',
        Email:''

// Full Name
// Email
// Location
// Summary
// Profile Image
// Programming Languages
// Languages Spoken
    }
    Register = () => {
        console.log(this.state);
        const data = {
            name: this.state.Name,
            email: this.state.Email
        }
    }
    
    render() {
        return (
        <div>
        <h2> Mentees </h2>
    
        </div>
        )
    }
}




export default Mentees;