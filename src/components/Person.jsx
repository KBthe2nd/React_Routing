import React from "react";
import {  useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Person = () => {
  const [peoples, setPeople] = useState([]);
  const {userid} = useParams();
  

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((e) => alert(e.message));
  }, []);


  return (
    <div className="container">
      {peoples.map((people) => (
        <>
          <div className="card" key={people.id}>
            <h4 key={people.id}>
              <b>{people.name}</b>
            </h4>
            <p>
              <b>Gender:</b> {people.gender}
            </p>
            <p>
              <b>Age:</b> {people.age}
            </p>
            <p>
              <b>Eye Color:</b> {people.eye_color}
            </p>
            <p>
              <b>Hair Color:</b> {people.hair_color}
            </p>
            <a id="film-des" href={people.url}>
              API Resource Link
            </a>
            
          </div>
        </>
      ))}
    </div>
  );
};

export default Person;
