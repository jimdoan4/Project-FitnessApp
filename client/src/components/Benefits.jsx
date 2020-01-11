import React, { Component } from "react";

function Benefits() {
  return (
    <div>
      <div className="bg-dark text-white workout-margin workout-jumbo">
        <img
          className="card-img"
          src="https://media2.s-nbcnews.com/i/newscms/2018_23/1343962/orangetheory-today-180605-tease_829d05efed33c035869f3ade23fe1ce8.jpg"
          alt="Membership"
        />
        <div className="card-img-overlay text-center">
          <h1
            className="display-5 centered workout-all-margin"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "4.7vw",
              padding: "15px"
            }}
          >
            MEMBERSHIP BENEFITS
          </h1>
        </div>
      </div>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="container text-center">
          <h2 className="display-4 sub-header">
            PERSONAL TRAINING AT ATLANTA CYCLE CLUB
          </h2>
          <p className="lead">
            You can, and you will. With the right personal trainer, you’re
            partners in the impossible.
          </p>
          <button className="start-button">GET STARTED TODAY</button>
        </div>
      </div>

      <br />
    </div>
  );
}
export default Benefits;
