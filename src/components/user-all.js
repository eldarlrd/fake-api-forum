// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const allUserURL = "https://jsonplaceholder.typicode.com/users/";
// Function Declaration
export default function UserAll() {
  const [ user, setUser ] = React.useState(null);
  const [ show, setShow ] = React.useState(false);
// API Fetch
  React.useEffect(() => {
    axios.get(allUserURL).then(response => {
      setUser(response.data);
    });
  }, []);

  if (!user) return null;

  return (
    user.map(user => {
      const handleClick = id => {
        setShow(prevShow => ({
          ...prevShow,
          [id]: !prevShow[id]
        }));
      };
// Render
      return (
        <div id={user.id} key={user.id}>

          { show[user.id] ?

          <section>
            <h1>{"User #" + user.id + ": "}
              <span>{user.name}</span>
            </h1>
            <p><span>Username: </span>{user.username}</p>
            <p><span>Email: </span>{user.email}</p>
            <br />
            <a className="section-link" href={allUserURL + user.id} target="_blank" rel="noreferrer">
              View API
            </a>
            <br /><br />
            <Link className="section-link" to={"/users/" + user.id}>
              View exclusively
            </Link>
            <br /><br />
          </section>

          : null }

          <button onClick={() => handleClick(user.id)}>
            Show/Hide User #{user.id}
          </button>
        </div>
      );
    })
  );
};