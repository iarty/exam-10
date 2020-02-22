import React, { useEffect } from "react";
import { getNewsById } from "../store/actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentItem from "../components/CommentItem";
import CommentForm from "../components/CommentForm";

const FullNews = () => {
  const dispatch = useDispatch();
  const oneNews = useSelector(state => state.news.oneNews);
  const loadingNews = useSelector(state => state.news.loading);
  const { id } = useParams();
  let { title, image, data, date } = oneNews;

  const localeDate = new Date(date).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  useEffect(() => {
    dispatch(getNewsById(id));
  }, [dispatch, id]);

  if (image) {
    image = "http://localhost:3000/" + image;
  }

  return (
    <>
      {loadingNews ? (
        <div>Loading...</div>
      ) : (
        !!Object.keys(oneNews).length && (
          <div>
            <h1>{title}</h1>
            <small>{localeDate}</small>
            <hr />
            <div className="d-flex">
              <img src={image} alt="" style={{ width: 350, height: 350 }} />
              <p className="ml-3">{data}</p>
            </div>
          </div>
        )
      )}
      <hr />
      <h3>Comments</h3>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <hr />
      <CommentForm />
    </>
  );
};

export default FullNews;
