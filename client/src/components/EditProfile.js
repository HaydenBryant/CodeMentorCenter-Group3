import React, { Component } from "react";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: "",
            userType:"",
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
            resume: "",
            youtube: "",
            twitter: "",
            facebook: "",
            linkedin: "",
            instagram: "",
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
            userType: this.state.userType,
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
            resume: this.state.resume,
            youtube: this.state.youtube,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram,
        }

        // this.props.EditProfile(userData, this.props.history);
        console.log(this.state);
    }

    // onSubmitCheckbox(e){
    //     e.preventDefault();

    // }

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
                                type='radio'
                                checked={this.state.userType === "mentor"}
                                name="userType"
                                value="mentor"
                                onChange={this.onChange}
                            />
                            <label htmlFor="Mentor"> Would you like to be a mentor?</label>
                            <br />
                            <input
                                type='radio'
                                name="userType"
                                checked={this.state.userType === "mentee"}
                                value="mentee"
                                onChange={this.onChange}
                            />
                            <label htmlFor="Mentee"> Would you like to be a mentee?</label>
                            <br />
                            <input
                                type='radio'
                                name="userType"
                                checked={this.state.userType === "both"}
                                value="both"
                                onChange={this.onChange}
                            />
                            <label htmlFor="Mentee"> Would you like to be a mentor and mentee?</label>
                            <br />

                            <input
                                type='date'
                                placeholder="* Date of Birth"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.onChange}
                                required
                            />
                            <label htmlFor="dob"> What is your date of birth?</label>
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
                                placeholder="Speaking Languages"
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
                                type='url'
                                placeholder="Resume Link"
                                name="resume"
                                value={this.state.resume}
                                onChange={this.onChange}
                            /> <br />

                            <h3>Social Media</h3>

                            <input
                                type='text'
                                placeholder="Youtube Handle"
                                name="youtube"
                                value={this.state.youtube}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="Twitter Handle"
                                name="twitter"
                                value={this.state.twitter}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="facebook URL"
                                name="facebook"
                                value={this.state.facebook}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="Linkedin URL"
                                name="linkedin"
                                value={this.state.linkedin}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='text'
                                placeholder="Instagram Handle"
                                name="instagram"
                                value={this.state.instagram}
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