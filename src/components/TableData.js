import { Typography } from "@mui/material";
import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TableData() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios
      .get("http://findworker-app.herokuapp.com/api/book/get.php")
      .then(function (response) {
        console.log(response.data);
        setBooks(response.data);
      });
  }

  return (
    <div>
      <div className="container border p-4">
        <Typography variant="h5" className="text-center mb-3">
          Books Table
        </Typography>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Author</th>
              <th>IBSN</th>
              <th>Released</th>
              <th>Comment Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, key) => (
              <tr key={key}>
                <td style={{ width: "5%" }}>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.authors[0]}</td>
                <td>{book.isbn}</td>
                <td>{book.released}</td>
                <td style={{ width: "5%" }}>{book.comment_count}</td>
                <td>
                  <Link to={`/book/characters/${book.id}`}>
                  <button className="btn btn-primary me-2 btn1">
                    Characters
                  </button></Link>
                  <Link to={`/book/comments/${book.id}/${book.name}`}>
                  <button className="btn btn-primary btn1">Comments</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
