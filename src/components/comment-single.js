// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
let singleCommentURL;
// Function Declaration
export default function CommentSingle() {
  const [ singleComment, setSingleComment ] = React.useState(null);
// API Fetch
  React.useEffect(() => {
    axios.get(singleCommentURL).then(response => {
        setSingleComment(response.data);
    });
  }, []);

  singleCommentURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");

  if (!singleComment) return null;
// Render
  return (
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
        Back to all comments
      </Link>
      <br /><br />
    </section>
  );
};