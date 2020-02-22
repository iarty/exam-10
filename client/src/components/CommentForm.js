import React from "react";
import { MDBBtn } from "mdbreact";

const CommentForm = () => {
  return (
    <form className="w-50" style={{ margin: "auto" }}>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Your name</label>
        <input
          type="text"
          name="author"
          className="form-control"
          id="formGroupExampleInput"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Your message</label>
        <textarea
          className="form-control"
          name="comment"
          id="exampleFormControlTextarea1"
          rows="5"
        />
      </div>
      <MDBBtn type="submit" color="cyan" size="sm">
        Send comment
      </MDBBtn>
    </form>
  );
};

export default CommentForm;
