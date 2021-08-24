/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './MovieRow.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {

  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    if (scrollX !== 0) {
      setScrollX(scrollX + Math.round(window.innerWidth) / 2);
    }
  }

  function handleRightArrow() {
    if (Math.abs(scrollX) < (items.results.length * 100)) {
      setScrollX(scrollX - Math.round(window.innerWidth) / 2);
    }
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150,
        }}>

          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item">

              <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}