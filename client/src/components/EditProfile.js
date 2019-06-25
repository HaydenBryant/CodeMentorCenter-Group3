import React, { Component } from "react";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: "",
            isAMentor: "",
            isAMentee: "",
            // photo: "",     //not sure how we will choose to handle
            dob: "",
            company: "",   //add school option?
            website: "",
            location: "",
            codingLanguages: "",  //separated by ", " then .split
            frameworks: "",
            skillLevel: "",
            speakingLanguages: "",
            bio: "",
            githubUsername: "",
            cmcLink: "",
            social: {
                youtube: "",
                twitter: "",
                facebook: "",
                linkedin: "",
                instagram: ""
            },
            date: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            handle: this.state.handle,
            isAMentor: this.state.isAMentor,
            isAMentee: this.state.isAMentee,
            // photo: this.state.photo,
            dob: this.state.dob,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            codingLanguages: this.state.codingLanguages,
            frameworks: this.state.frameworks,
            skillLevel: this.state.skillLevel,
            speakingLanguages: this.state.speakingLanguages,
            bio: this.state.bio,
            githubUsername: this.state.githubUsername,
            cmcLink: this.state.cmcLink,
            youtube: this.state.social.youtube,
            twitter: this.state.social.twitter,
            facebook: this.state.social.facebook,
            linkedin: this.state.social.linkedin,
            instagram: this.state.social.instagram,
        }

        // this.props.EditProfile(userData, this.props.history);
        console.log(this.state);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        // const { errors } = this.state;

        return (
            <div className="editProfile">
                <div className="container">
                    <div className="row">
                        <h1 className="intro">Create your profile here</h1>
                        <small className="req">* = Required Fields</small>
                        <form onSubmit={this.onSubmit}>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;