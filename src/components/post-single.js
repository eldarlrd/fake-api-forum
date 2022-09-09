// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
let singlePostURL;
// Function Declaration
export default function PostSingle() {
  const [ singlePost, setSinglePost ] = React.useState(null);
// API Fetch
  React.useEffect(() => {
    axios.get(singlePostURL).then(response => {
        setSinglePost(response.data);
    });
  }, []);

  singlePostURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");

  if (!singlePost) return null;
// Render
  return (
    <section className="section-single">
      <h1>{"Post #" + singlePost.id + ": "}
        <span>{singlePost.title}</span>
      </h1>
      <p>{singlePost.body}</p>
      <br />
      <a className="section-link" href={singlePostURL} target="_blank" rel="noreferrer">
        View API
      </a>
      <br /><br />
      <Link className="section-link" to={"/posts"}>
        Back to all posts
      </Link>
      <br /><br />
    </section>
  );
};