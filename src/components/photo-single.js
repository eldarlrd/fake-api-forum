// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
let singlePhotoURL;
// Function Declaration
export default function PhotoSingle() {
  const [ singlePhoto, setSinglePhoto ] = React.useState(null);
// API Fetch
  React.useEffect(() => {
    axios.get(singlePhotoURL).then(response => {
        setSinglePhoto(response.data);
    });
  }, []);

  singlePhotoURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");

  if (!singlePhoto) return null;
// Render
  return (
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
      <Link className="section-link"to={"/comments"}>
        Back to all photos
      </Link>
      <br /><br />
    </section>
  );
};