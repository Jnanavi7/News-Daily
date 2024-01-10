import React from "react";

const NewsItem = (props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="the picture isnt available"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...{" "}
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }} >  {source} </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              by {author} on {new Date(date).toGMTString}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }

  export default NewsItem;

