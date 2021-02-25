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
        </div>
      </div>
    </div>
  );
}

export default Mentors;
