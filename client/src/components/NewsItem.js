import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";
import { Link } from "react-router-dom";

const NewsItem = ({ title, id, image, date }) => {
  const localeDate = new Date(date).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return (
    <MDBCard border="cyan" className="m-3">
      <MDBCardHeader color="cyan">{title}</MDBCardHeader>
      <MDBCardBody className="text-secondary">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"
              alt=""
              style={{ width: 100, height: 100 }}
            />
            <small className="ml-3 cyan-text">At {localeDate}</small>
          </div>
          <div className="align-self-end">
            <i
              className="fas fa-trash"
              style={{
                fontSize: "20px",
                color: "#007bff",
                marginRight: 20,
                cursor: "pointer"
              }}
            />
            <Link to={`/news/${id}`}>Read more >>></Link>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default NewsItem;
