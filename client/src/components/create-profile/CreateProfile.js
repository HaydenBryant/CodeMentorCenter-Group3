import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profileActions';


class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: "",
            userType:"",
            // photo: "",     //not sure how we will choose to handle
            dob: "",
            company: "",   //add school option?
            school: "",
            website: "",
            town: "",
            state: "",
            zipCode: "",
            country: "",
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
            // date: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
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
            town: this.state.town,
            state: this.state.state,
            zipCode: this.state.zipCode,
            country: this.state.country,
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

        this.props.createProfile(userData, this.props.history);
        // console.log(this.state);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        // const { errors } = this.state;

        return (
            <div className="createProfile">
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
                                type='text'
                                placeholder="school Name"
                                name="school"
                                value={this.state.school}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="Website URL"
                                name="website"
                                value={this.state.website}
                                onChange={this.onChange}
                            /> <br />

                            {/* create separate Component for state */}
                            <input
                                type='text'
                                placeholder="* Town"
                                name="town"
                                value={this.state.town}
                                onChange={this.onChange}
                                required
                            />
                            <input
                                type='text'
                                placeholder="* State"
                                name="state"
                                value={this.state.state}
                                onChange={this.onChange}
                                required
                            /> <br />
                            <input
                                type='number'
                                placeholder="* Zip Code"
                                name="zipCode"
                                value={this.state.zipCode}
                                onChange={this.onChange}
                                required
                            />
                            <input
                                type='text'
                                placeholder="* Country"
                                name="country"
                                value={this.state.country}
                                onChange={this.onChange}
                                required
                            /> <br />


                            <input
                                type='text'
                                placeholder="* Coding Languages"
                                name="codingLanguages"
                                value={this.state.codingLanguages}
                                onChange={this.onChange}
                                info="Please separate each language with a ,"
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
                                info="Please separate each language with a ,"
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
                                type='url'
                                placeholder="Youtube URL"
                                name="youtube"
                                value={this.state.youtube}
                                onChange={this.onChange}
                            /> <br />
                            <input
                                type='url'
                                placeholder="Twitter URL"
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
                                type='url'
                                placeholder="Instagram URL"
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

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    profile: state.profile,
    // errors: state.errors
  });
  export default connect(mapStateToProps, { createProfile })(
    withRouter(CreateProfile)
  );