import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./component/card/CardList.jsx";
import SearchField from "./component/search/SearchField.jsx";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const App = () => {
  const [robot, setRobot] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRobot, setFilterRobot] = useState(robot);

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // console.log(users); //array পেয়েছি
        setRobot(users);
      });
  }, []);

  useEffect(() => {
    const newRobot = robot.filter((value) => {
      return value.name.toLowerCase().includes(search);
    });
    setFilterRobot(newRobot);
    //console.log(newRobot);
  }, [search, robot]);

  const inputSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    //console.log(searchString);
    setSearch(searchString);
  };

  return (
    <div className="full-body">
      <Container fixed>
        <Typography variant="h3" align="center" component="h1" gutterBottom>
          Monster Robo Hash
        </Typography>
        <Typography variant="button" align="center" component="h2" gutterBottom>
          Functional Component
        </Typography>

        <SearchField functionProps={inputSearch} />
        <CardList arr={filterRobot} />
      </Container>
    </div>
  );
};

export default App;
