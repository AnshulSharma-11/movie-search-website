
import React, { useState } from 'react'
import "./Moviecss.css";
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

export default function Movie() {

  let [shows, setShows] = useState([]);
  let [selectedShow, setSelectedShow] = useState(null);

  // search show
  let searchShow = async (name) => {
    let res = await fetch
    (`https://api.tvmaze.com/search/shows?q=${name}`);
    const data = await res.json();
    setShows(data);
  };

  // get full details
  let getShowDetails = async (id) => {
    let res = await fetch
    (`https://api.tvmaze.com/shows/${id}`);
    let data = await res.json();
    setSelectedShow(data);
  };

  return (
    <div className="App">
      <h1>🎬 Movie / Series Search</h1>

      <SearchBar searchShow={searchShow} />

      <div className="movie-container">
        {shows.map((item) => (
          <MovieCard
            key={item.show.id}
            show={item.show}
            getShowDetails={getShowDetails}
          />
        ))}
      </div>

      {selectedShow && (
        <MovieDetails
          show={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      )}
    </div>
  );
}
