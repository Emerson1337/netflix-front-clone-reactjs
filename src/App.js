import React, { useEffect, useState } from 'react';
import './App.css';

//COMPONENTS
import MovieRow from './components/MovieRow';

//API
import Tmdb from './Tmdb';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //PEGANDO LISTA DOS FILMES
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, [])

  return (
    <div className="page">
      <section className="lists">
        <div>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
