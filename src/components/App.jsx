import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./Films";
import Film from "./Film";
import Navbar from "./Navbar";
import Person from "./Person";
import Persons from "./Persons";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
<h1>Reacting to Routing </h1>
      <Routes>
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmsid" element={<Film />} />
          <Route path="/people" element={<Persons />} />
          <Route path="/people/:peopleid" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
