import React from "react";
import { MDBCloseIcon, MDBListGroupItem } from "mdbreact";

const CommentItem = () => {
  return (
    <MDBListGroupItem>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Author</h5>
        <div>
          <small className="mr-5">Date</small>
          <MDBCloseIcon />
        </div>
      </div>
      <hr />
      <p className="mb-1">Text</p>
    </MDBListGroupItem>
  );
};

export default CommentItem;
