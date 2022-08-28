import "./App.css";
import React from "react";
import TableData from "./components/TableData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters.js";
import NavBar from "./components/NavBar";
import BookCharacters from "./components/BookCharacters";
import Comments from "./components/Comments";

function App() {
  return (
    <Router>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/books" element={<TableData />}></Route>
        <Route path="/book/comments/:id/:name" element={<Comments />}></Route>
        <Route path="/book/characters/:id" element={<BookCharacters />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
