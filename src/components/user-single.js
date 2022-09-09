// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
let singleUserURL;
// Function Declaration
export default function UserSingle() {
  const [ singleUser, setSingleUser ] = React.useState(null);
// API Fetch
  React.useEffect(() => {
    axios.get(singleUserURL).then(response => {
        setSingleUser(response.data);
    });
  }, []);

  singleUserURL = "https://jsonplaceholder.typicode.com" + window.location.pathname.replace("/fake-api-forum", "");

  if (!singleUser) return null;
// Render
  return (
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
        Back to all users
      </Link>
      <br /><br />
    </section>
  );
};