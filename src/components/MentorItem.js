import React from "react";
import { Link } from "react-router-dom";
function MentorItem(props) {
  return (
    <>
      <li className="mentors__item">
        <Link className="mentors__item__link" to={props.path}>
          <figure
            className="mentors__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="mentors__item__img"
              src={props.src}
              alt="Mentor Image"
            />
          </figure>
          <div className="mentors__item__info">
            <h5 className="mentors__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MentorItem;
