import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const allUserURL = 'https://jsonplaceholder.typicode.com/users/';

export const Users = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  // API Fetch
  useEffect(() => {
    axios.get(allUserURL).then(response => {
      setUser(response.data);
    });
  }, []);
  // Loading Screen
  if (!user)
    return (
      <div className='loader-container user'>
        <div className='spinner' />
      </div>
    );

  // Content Map
  return (
    <div className='user'>
      {' '}
      {user.map(user => {
        const handleClick = id => {
          setShow(prevShow => ({
            ...prevShow,
            [id]: !prevShow[id]
          }));
        };

        // Render
        return (
          <div id={user.id} key={user.id}>
            {show[user.id] ?
              <section>
                <h1>
                  {'User #' + user.id + ': '}
                  <span>{user.name}</span>
                </h1>
                <p>
                  <span>Username: </span>
                  {user.username}
                </p>
                <p>
                  <span>Email: </span>
                  {user.email}
                </p>
                <br />
                <a
                  className='section-link'
                  href={allUserURL + user.id}
                  target='_blank'
                  rel='noreferrer'>
                  View API
                </a>
                <br />
                <br />
                <Link className='section-link' to={'/users/' + user.id}>
                  View Exclusively
                </Link>
                <br />
                <br />
              </section>
            : null}

            <button
              onClick={() => {
                handleClick(user.id);
              }}>
              {show[user.id] ? 'Hide' : 'Show'} User #{user.id}
            </button>
          </div>
        );
      })}
    </div>
  );
};
