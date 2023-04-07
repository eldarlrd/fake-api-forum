import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../ui/about";
let singleCommentURL;

export default function CommentSingle() {
  const [ singleComment, setSingleComment ] = useState(null);
// API Fetch
  useEffect(() => {
    axios.get(singleCommentURL).then(response => {
        setSingleComment(response.data);
    });
  }, []);

  singleCommentURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");
// Loading Screen
  if (!singleComment) return(
    <div className="loader-container comment">
      <div className="spinner"></div>
    </div>
  );
// Render
  return (
    <div className="comment">
      <section className="section-single">
        <h1>{"Comment #" + singleComment.id + ": "}
          <span>{singleComment.name}</span>
        </h1>
        <p>{singleComment.body}</p>
        <br />
        <a className="section-link" href={singleCommentURL} target="_blank" rel="noreferrer">
          View API
        </a>
        <br /><br />
        <Link className="section-link" to={"/comments"}>
          Back to All Comments
        </Link>
        <br /><br />
      </section>
      <About />
    </div>
  );
};