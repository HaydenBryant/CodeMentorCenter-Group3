import React, { Component } from 'react';

class Mentors extends Component {
    state = {
        Name:'',
        Email:''
    }
    Register = () => {
        console.log(this.state);
        const data = {
            name: this.state.Name,
            email: this.state.Email

            // Full Name
            // Email
            // Location
            // Summary
            // Profile Image 
            // Programming Languages
            // Languages Spoken
            // CMC link
            // FutureCV is required
            // Rating: Scale 1 - 5 
            // Reviews/Comments



        }
    }

        render() {
            return (
            <div>
            <h2> Mentor's </h2>
            </div>
            )
        }
}

export default Mentors;