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

                            <input
                                type='text'
                                placeholder="* Profile Name"
                                name="handle"
                                value={this.state.handle}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='checkbox'
                                name="Mentor"
                                value={this.state.isAMentor}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='checkbox'
                                name="Mentee"
                                value={this.state.isAMentee}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='date'
                                placeholder="* Date of Birth"
                                name="DOB"
                                value={this.state.DOB}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='text'
                                placeholder="Company Name"
                                name="Company"
                                value={this.state.company}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type="submit"
                                value="submit"
                                className="btn btn-info btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;