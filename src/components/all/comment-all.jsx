import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../ui/about";
const allCommentURL = "https://jsonplaceholder.typicode.com/comments/";

export default function CommentAll() {
  const [ comment, setComment ] = useState(null);
  const [ show, setShow ] = useState(false);
// API Fetch
  useEffect(() => {
    axios.get(allCommentURL).then(response => {
      setComment(response.data);
    });
  }, []);
// Loading Screen
  if (!comment) return (
    <div className="loader-container comment">
      <div className="spinner"></div>
    </div>
  );
// Content Map
  return (
    <div className="comment"> {
    comment.map(comment => {
      const handleClick = id => {
        setShow(prevShow => ({
          ...prevShow,
          [id]: !prevShow[id]
        }));
      };
// Render
      return (
        <div id={comment.id} key={comment.id}>

          { show[comment.id] ?

          <section>
            <h1>{"Comment #" + comment.id + ": "}
              <span>{comment.name}</span>
            </h1>
            <p>{comment.body}</p>
            <br />
            <a className="section-link" href={allCommentURL + comment.id} target="_blank" rel="noreferrer">
              View API
            </a>
            <br /><br />
            <Link className="section-link" to={"/comments/" + comment.id}>
              View Exclusively
            </Link>
            <br /><br />
          </section>

          : null }

          <button onClick={() => handleClick(comment.id)}>
            { show[comment.id] ? "Hide" : "Show" } Comment #{comment.id}
          </button>
        </div>
      );
    })}
    <About />
    </div>
  );
};