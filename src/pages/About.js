import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {profile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title"> {"Andrew Wang"} </div>
        <div className="brief_description">
          {"Hi! I'm Andrew, I'm a rising sophomore at CMU. I'm into photography and learning programming/foreign languages"}
        </div>
      </div>
    </div>

      </div>
    )
  }
}