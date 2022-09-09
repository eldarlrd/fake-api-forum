// Boilerplate
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const allPhotoURL = "https://jsonplaceholder.typicode.com/photos/";
// Function Declaration
export default function PhotoAll() {
  const [ photo, setPhoto ] = React.useState(null);
  const [ show, setShow ] = React.useState(false);
// API Fetch
  React.useEffect(() => {
    axios.get(allPhotoURL).then(response => {
      setPhoto(response.data);
    });
  }, []);

  if (!photo) return null;

  return (
    photo.map(photo => {
      const handleClick = id => {
        setShow(prevShow => ({
          ...prevShow,
          [id]: !prevShow[id]
        }));
      };
// Render
      return (
        <div id={photo.id} key={photo.id}>

          { show[photo.id] ?

          <section>
            <h1>{"Photo #" + photo.id + ": "}
              <span>{photo.title}</span>
            </h1>
            <img
              src={photo.url}
              alt="Fake Example"
            />
            <br /><br />
            <a className="section-link" href={allPhotoURL + photo.id} target="_blank" rel="noreferrer">
              View API
            </a>
            <br /><br />
            <Link className="section-link" to={"/photos/" + photo.id}>
              View exclusively
            </Link>
            <br /><br />
          </section>

          : null }

          <button onClick={() => handleClick(photo.id)}>
            Show/Hide Photo #{photo.id}
          </button>
        </div>
      );
    })
  );
};