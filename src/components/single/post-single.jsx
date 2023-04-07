import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../ui/about";
let singlePostURL;

export default function PostSingle() {
  const [ singlePost, setSinglePost ] = useState(null);
// API Fetch
  useEffect(() => {
    axios.get(singlePostURL).then(response => {
        setSinglePost(response.data);
    });
  }, []);

  singlePostURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");
// Loading Screen
  if (!singlePost) return(
    <div className="loader-container post">
      <div className="spinner"></div>
    </div>
  );
// Render
  return (
    <div className="post">
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
          Back to All Posts
        </Link>
        <br /><br />
      </section>
      <About />
    </div>
  );
};