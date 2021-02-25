import React from "react";
import MentorItem from "./MentorItem";
import "./Mentors.css";
function Mentors() {
  return (
    <div className="mentors">
      <h1>Schedule a meeting:</h1>
      <div className="mentors__container">
        <div className="mentors_wrapper">
          <ul className="mentors__items">
            <MentorItem
              src="https://news.asu.edu/sites/default/files/koop-bills-cropped.jpg"
              text="Thomas - Undergraduate Senior Majoring in Neuroscience"
              label="University of Michigan Ann Arbor"
              path="/ThomasKing"
            />
            <MentorItem
              src="https://i.ytimg.com/vi/sfZmTGUfHtw/maxresdefault.jpg"
              text="Eric - PHD in Entrepreneurship"
              label="University of Michigan Ann Arbor"
              path="/EricFretz"
            />
            <MentorItem
              src="https://news.asu.edu/sites/default/files/koop-bills-cropped.jpg"
              text="Thomas - Undergraduate Senior Majoring in Neuroscience"
              label="University of Michigan Ann Arbor"
              path="/University of Michigan"
            />
          </ul>
          <ul className="mentors__items">
            <MentorItem
              src="https://pyxis.nymag.com/v1/imgs/3d4/0aa/89125115b0e10b94e3378d484712450727-25-thanos.rsocial.w1200.jpg"
              text="Thanos - Entrepreneur"
              label="No College"
              path="/Thanos"
            />
            <MentorItem
              src="https://i.ytimg.com/vi/sfZmTGUfHtw/maxresdefault.jpg"
              text="Eric - PHD in Entrepreneurship"
              label="University of Michigan Ann Arbor"
              path="/EricFretz"
            />
            <MentorItem
              src="data:image/jpeg;base64,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"
              text="Jonathan - Undergraduate Majoring in Computer Science"
              label="University of Michigan Ann Arbor"
              path="/JonathanAlpert"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mentors;
