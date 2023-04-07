import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../ui/about";
let singleUserURL;

export default function UserSingle() {
  const [ singleUser, setSingleUser ] = useState(null);
// API Fetch
  useEffect(() => {
    axios.get(singleUserURL).then(response => {
        setSingleUser(response.data);
    });
  }, []);

  singleUserURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");
// Loading Screen
  if (!singleUser) return(
    <div className="loader-container user">
      <div className="spinner"></div>
    </div>
  );
// Render
  return (
    <div className="user">
      <section className="section-single">
        <h1>{"User #" + singleUser.id + ": "}
          <span>{singleUser.name}</span>
        </h1>
        <p><span>Username: </span>{singleUser.username}</p>
        <p><span>Email: </span>{singleUser.email}</p>
        <br />
        <a className="section-link" href={singleUserURL} target="_blank" rel="noreferrer">
          View API
        </a>
        <br /><br />
        <Link className="section-link" to={"/users"}>
          Back to All Users
        </Link>
        <br /><br />
      </section>
    <About />
    </div>
  );
};