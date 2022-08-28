import { Typography } from "@mui/material";
import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

export default function BookCharacters() {

  const {id} = useParams();
  const [characters, setCharacters] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  let dep = [sort];



  useEffect(() => {
    console.log("hello");
    getCharacters(sort);
  }, dep);

  const char_count = characters.map(c => {
      return c.character_count;
  });

  console.log(char_count);

  const getCharacters = (sort) => {
    switch(sort) {
       case "":
           axios.get(`http://findworker-app.herokuapp.com/api/character/get.php?id=${id}`)
            .then(function (response) {
                setCharacters(response.data);
            });
            break;
        case "1":
            axios.get(`http://findworker-app.herokuapp.com/api/character/get.php?id=${id}&name=name`)
            .then(function (response) {
                setCharacters(response.data);
            });
            break;
        case "2":
            axios.get(`http://findworker-app.herokuapp.com/api/character/get.php?id=${id}&gender=gender`)
            .then(function (response) {
                setCharacters(response.data);
            });
            break;
        case "3":
            axios.get(`http://findworker-app.herokuapp.com/api/character/get.php?id=${id}&age=age`)
            .then(function (response) {
                setCharacters(response.data);
            });
            break;
        default:
            axios.get(`http://findworker-app.herokuapp.com/api/character/get.php?id=${id}`)
            .then(function (response) {
                console.log(response.data);
                setCharacters(response.data);
            });
            break;
    }
  };

  const setSortValue = (e) => {
    // const sortValue = e.target.value;
    setSort(e.target.value);
  }

  const filterCharacters = (event) => {
    event.preventDefault();
    console.log(filter);
    switch(filter) {
      case "1":
        axios
          .get(
            `http://findworker-app.herokuapp.com/api/character/get.php?id=${id}&sort=male`
          )
          .then(function (response) {
            console.log(response.data);
            setCharacters(response.data);
          });
        break;
      case "2":
        axios
          .get(
            `http://findworker-app.herokuapp.com/api/character/get.php?id=${id}&sort=female`
          )
          .then(function (response) {
            console.log(response.data);
            setCharacters(response.data);
          });
        break;
      default:
        break;
    }
  };

  const setFilterValue = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div>
      <div className="container border p-4">
        <Typography variant="h5" textAlign={"center"}>
          characters Table
        </Typography>
        <div className="r">
          <Form>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Filter</Form.Label>
              <Form.Select className="formwidth" onChange={setSortValue}>
                <option></option>
                <option value="1">Name</option>
                <option value="2">Gender</option>
                <option value="3">Age</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <Form onSubmit={filterCharacters}>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Filter</Form.Label>
              <Form.Select className="formwidth" onChange={setFilterValue}>
                <option></option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              <button className="btn btn-primary btn1">Filter</button>
            </Form.Group>
          </Form>
        </div>
        <h4>Character Count: {char_count[0]}</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Born</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, key) => (
              <tr key={key}>
                <td style={{ width: "5%" }}>{character.id}</td>
                <td>{character.name}</td>
                <td>{character.born}</td>
                <td>{character.gender}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
