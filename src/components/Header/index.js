/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './style.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://github.com/Emerson1337.png" />
        </a>
      </div>
    </header>
  )
}