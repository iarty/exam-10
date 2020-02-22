import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";
import { Link } from "react-router-dom";

const NewsItem = () => {
  return (
    <MDBCard border="cyan" className="m-3">
      <MDBCardHeader color="cyan">Title</MDBCardHeader>
      <MDBCardBody className="text-secondary">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"
              alt=""
              style={{ width: 100, height: 100 }}
            />
            <small className="ml-3 cyan-text"> At 12.10.2020 20:25</small>
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
            <Link to={`/news/3`}>Read more >>></Link>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default NewsItem;
