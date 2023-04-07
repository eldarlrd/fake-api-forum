import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../ui/about";
const allPostURL = "https://jsonplaceholder.typicode.com/posts/";

export default function Postal() {
  const [ post, setPost ] = useState(null);
  const [ show, setShow ] = useState(false);
// API Fetch
  useEffect(() => {
    axios.get(allPostURL).then(response => {
      setPost(response.data);
    });
  }, []);
// Loading Screen
  if (!post) return (
    <div className="loader-container post">
      <div className="spinner"></div>
    </div>
  );
// Content Map
  return (
    <div className="post"> {
    post.map(post => {
      const handleClick = id => {
        setShow(prevShow => ({
          ...prevShow,
          [id]: !prevShow[id]
        }));
      };
// Render
      return (
        <div id={post.id} key={post.id}>

          { show[post.id] ?

          <section>
            <h1>{"Post #" + post.id + ": "}
              <span>{post.title}</span>
            </h1>
            <p>{post.body}</p>
            <br />
            <a className="section-link" href={allPostURL + post.id} target="_blank" rel="noreferrer">
              View API
            </a>
            <br /><br />
            <Link className="section-link" to={"/posts/" + post.id}>
              View Exclusively
            </Link>
            <br /><br />
          </section>

          : null }

          <button onClick={() => handleClick(post.id)}>
            { show[post.id] ? "Hide" : "Show" } Post #{post.id}
          </button>
        </div>
      );
    })}
    <About />
    </div>
  );
};