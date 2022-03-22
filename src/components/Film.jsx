import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Film = () => {
    const [films, setFilm] = useState([]);
    const {userid} = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${userid}`)
          .then((res) => res.json())
          .then((data) => setFilm(data))
          .catch((e) => alert(e.message));
      }, [userid]);
    return(
        <div className="container">
      {films.map((film) => (
        <>
          <div className="card">
            <h4 key={film.title}>
              <b>{film.title}</b>
            </h4>
            <p>
              <b>Produced by:</b> {film.producer}
            </p>
            <p>
              <b>Directed by:</b> {film.director}
            </p>
            <p>
              <b>Released in:</b> {film.release_date}
            </p>
            <p>
              <b>Rotten Tomato Score:</b> {film.rt_score}
            </p>
            <p>{film.description}</p>
            <a id="film-des" href={film.url}>
              API Resource Link
            </a>
          </div>
        </>
      ))}
    </div>
    )
}

export default Film;