import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Persons = () => {
    const [peps, setPeps] = useState([]);
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people`)
          .then((res) => res.json())
          .then((data) => setPeps(data))
          .catch((e) => alert(e.message));
      }, []);

      return(
          <div className="container">
              <ul>
                  {peps.map(pep => (
                      <>
                      <li
                      key={pep.id}> <span>{pep.name}</span>
                      <Link to={`/people/${pep.id}`}>
                      Full Details
                      </Link>
                      </li>
                      </>
                  ))}
                  
              </ul>
          </div>

      );
}
export default Persons;