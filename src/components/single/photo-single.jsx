import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../ui/about";
let singlePhotoURL;

export default function PhotoSingle() {
  const [ singlePhoto, setSinglePhoto ] = useState(null);
// API Fetch
  useEffect(() => {
    axios.get(singlePhotoURL).then(response => {
        setSinglePhoto(response.data);
    });
  }, []);

  singlePhotoURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");
// Loading Screen
  if (!singlePhoto) return(
    <div className="loader-container photo">
      <div className="spinner"></div>
    </div>
  );
// Render
  return (
    <div className="photo">
      <section className="section-single">
        <h1>{"Photo #" + singlePhoto.id + ": "}
          <span>{singlePhoto.title}</span>
        </h1>
        <img
          src={singlePhoto.url}
          alt="Fake Example"
        />
        <br /><br />
        <a className="section-link" href={singlePhotoURL} target="_blank" rel="noreferrer">
          View API
        </a>
        <br /><br />
        <Link className="section-link" to={"/photos"}>
          Back to All Photos
        </Link>
        <br /><br />
      </section>
      <About />
    </div>
  );
};