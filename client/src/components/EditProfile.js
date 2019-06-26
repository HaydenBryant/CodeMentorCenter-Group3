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
                            />
                            <label htmlFor="Mentor"> Would you like to be a mentor?</label>
                            <br />
                            <input
                                type='checkbox'
                                name="Mentee"
                                value={this.state.isAMentee}
                                onChange={this.onChange}
                            />
                            <label htmlFor="Mentee"> Would you like to be a mentee?</label>
                            <br />

                            {/* Warning: A component is changing an uncontrolled input of type date to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components */}

                            <input
                                type='date'
                                placeholder="* Date of Birth"
                                name="DOB"
                                value={this.state.DOB}
                                onChange={this.onChange}
                                required
                            /> 
                            <label htmlFor="DOB"> What is your date of birth?</label>
                            <br />
                            <input
                                type='text'
                                placeholder="Company Name"
                                name="company"
                                value={this.state.company}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="Website URL"
                                name="website"
                                value={this.state.website}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='location'
                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="* Coding Languages"
                                name="codingLanguages"
                                value={this.state.codingLanguages}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='text'
                                placeholder="* Frameworks"
                                name="frameworks"
                                value={this.state.frameworks}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='text'
                                placeholder="Skill Level"
                                name="skillLevel"
                                value={this.state.skillLevel}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='text'
                                placeholder="SPeaking Languages"
                                name="speakingLanguages"
                                value={this.state.speakingLanguages}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='text'
                                placeholder="Bio"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="Github Username"
                                name="githubUsername"
                                value={this.state.githubUsername}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="CMC Link"
                                name="cmcLink"
                                value={this.state.cmcLink}
                                onChange={this.onChange}
                            /> <br />

                            <h3>Social Media</h3>

                            <input
                                type='text'
                                placeholder="Youtube Handle"
                                name="youtube"
                                value={this.state.social.youtube}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="Twitter Handle"
                                name="twitter"
                                value={this.state.social.twitter}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="Facebook URL"
                                name="Facebook"
                                value={this.state.social.facebook}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="Linkedin URL"
                                name="linkedin"
                                value={this.state.social.linkedin}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="Instagram Handle"
                                name="instagram"
                                value={this.state.social.instagram}
                                onChange={this.onChange}
                            /> <br />
                            
                            {/* will be hidden and captured by default. Need to work on how. */}
                            <input
                                type='date'
                                placeholder="Date"
                                name="date"
                                value={this.state.date}
                                onChange={this.onChange}
                                />
                                <label htmlFor="date"> Todays Date</label> <br />

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