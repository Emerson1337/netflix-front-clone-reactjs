import React, { useEffect, useState } from 'react';
import './App.css';

//COMPONENTS
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

//API
import Tmdb from './Tmdb';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //PEGANDO LISTA DOS FILMES
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //PEGANDO O FILME EM DESTAQUE
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, [])

  return (
    <div className="page">
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

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
