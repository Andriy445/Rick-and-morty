/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterList.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Character } from "../Character/Character";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

export const CharacterList = () => {
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchShelters();
  }, [page]);

  const fetchShelters = async () => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setCharacterData(res.data.results);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      {isLoaded ? (
        <>
          <List sx={{ bgcolor: "background.paper" }}>
            {characterData.map((el) => (
              <ListItem key={el.id} className="list-item">
                <Link to={`/characterProfile/${el.id}`}>
                  <Character data={el} />
                </Link>
              </ListItem>
            ))}
            <Stack spacing={2} direction="row" justifyContent="center">
              <PaginationButtons
                prevPage={() => prevPage()}
                nextPage={() => nextPage()}
                page={page}
              />
            </Stack>
          </List>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};
