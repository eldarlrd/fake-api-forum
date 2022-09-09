// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const allPostURL = "https://jsonplaceholder.typicode.com/posts/";
// Function Declaration
export default function Postal() {
  const [ post, setPost ] = React.useState(null);
  const [ show, setShow ] = React.useState(false);
// API Fetch
  React.useEffect(() => {
    axios.get(allPostURL).then(response => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
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
              View exclusively
            </Link>
            <br /><br />
          </section>

          : null }

          <button onClick={() => handleClick(post.id)}>
            Show/Hide Post #{post.id}
          </button>
        </div>
      );
    })
  );
};