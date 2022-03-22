import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Films = () => {
  const [films, setFilm] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((data) => setFilm(data))
      .catch((e) => alert(e.message));
  }, []);

  return (
<div className="container">
              <ul>
                  {films.map(film => (
                      <>
                      <li
                      key={film.id}> <span>{film.title}</span>
                      <Link to={`/people/${film.id}`}>
                      Full Details
                      </Link>
                      </li>
                      </>
                  ))}
                  
              </ul>
          </div>
  );
};

export default Films;
