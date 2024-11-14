import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const allPhotoURL = 'https://jsonplaceholder.typicode.com/photos/';

export const Photos = () => {
  const [photo, setPhoto] = useState(null);
  const [show, setShow] = useState(false);

  // API Fetch
  useEffect(() => {
    axios.get(allPhotoURL).then(response => {
      setPhoto(response.data);
    });
  }, []);
  // Loading Screen
  if (!photo)
    return (
      <div className='loader-container photo'>
        <div className='spinner' />
      </div>
    );

  // Content Map
  return (
    <div className='photo'>
      {' '}
      {photo.map(photo => {
        const handleClick = id => {
          setShow(prevShow => ({
            ...prevShow,
            [id]: !prevShow[id]
          }));
        };

        // Render
        return photo.id <= 250 ?
            <div id={photo.id} key={photo.id}>
              {show[photo.id] ?
                <section>
                  <h1>
                    {'Photo #' + photo.id + ': '}
                    <span>{photo.title}</span>
                  </h1>
                  <img src={photo.url} alt='Fake Example' />
                  <br />
                  <br />
                  <a
                    className='section-link'
                    href={allPhotoURL + photo.id}
                    target='_blank'
                    rel='noreferrer'>
                    View API
                  </a>
                  <br />
                  <br />
                  <Link className='section-link' to={'/photos/' + photo.id}>
                    View Exclusively
                  </Link>
                  <br />
                  <br />
                </section>
              : null}

              <button
                onClick={() => {
                  handleClick(photo.id);
                }}>
                {show[photo.id] ? 'Hide' : 'Show'} Photo #{photo.id}
              </button>
            </div>
          : null;
      })}
    </div>
  );
};
