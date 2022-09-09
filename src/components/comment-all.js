// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const allCommentURL = "https://jsonplaceholder.typicode.com/comments/";
// Function Declaration
export default function CommentAll() {
  const [ comment, setComment ] = React.useState(null);
  const [ show, setShow ] = React.useState(false);
// API Fetch
  React.useEffect(() => {
    axios.get(allCommentURL).then(response => {
      setComment(response.data);
    });
  }, []);

  if (!comment) return null;

  return (
    comment.map(comment => {
      const handleClick = id => {
        setShow(prevShow => ({
          ...prevShow,
          [id]: !prevShow[id]
        }));
      };
// Render
      return (
        <div id={comment.id} key={comment.id}>

          { show[comment.id] ?

          <section>
            <h1>{"Comment #" + comment.id + ": "}
              <span>{comment.name}</span>
            </h1>
            <p>{comment.body}</p>
            <br />
            <a className="section-link" href={allCommentURL + comment.id} target="_blank" rel="noreferrer">
              View API
            </a>
            <br /><br />
            <Link className="section-link" to={"/comments/" + comment.id}>
              View exclusively
            </Link>
            <br /><br />
          </section>

          : null }

          <button onClick={() => handleClick(comment.id)}>
            Show/Hide Comment #{comment.id}
          </button>
        </div>
      );
    })
  );
};