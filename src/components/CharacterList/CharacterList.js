/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterList.css";
import Button from "@mui/material/Button";
import { Character } from "../Character/Character";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import SearchByName from "../SearchByName/SearchByName";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const CharacterList = () => {
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [liked, setLiked] = useState([]);
  const [loadedLiked, setLoadedLiked] = useState(false);
  const url = `https://rickandmortyapi.com/api/character/`;

  useEffect(() => {
    getCharacters();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00ADB5",
        darker: "#053e85",
      },
    },
  });

  const getCharacters = async () => {
    try {
      const res = await axios.get(url);
      setCharacterData(res.data.results);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = async () => {
    setPage(page + 1);
    try {
      const res = await axios.get(`${url}?page=${page + 1}`);
      setCharacterData((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.log(err);
    }
  };

  const likePressed = (id) => {
    const count = liked.filter((el) => el === id).length + 1;
    if (count % 2 === 0) {
      setLiked((prev) => prev.filter((el) => el !== id));
    } else {
      setLiked((prev) => [...prev, id]);
    }
  };

  const getLikedCharacters = async () => {
    try {
      const res = await axios.get(`${url}${liked}`);
      setCharacterData(res.data.length > 1 ? res.data : [res.data]);
      setLoadedLiked(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoaded ? (
        <Box sx={{ flexGrow: 1 }} bgcolor="white" padding="2rem">
          <div className="search-wrapper">
            <SearchByName data={characterData} />
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                onClick={getLikedCharacters}
                disabled={liked.length > 0 ? false : true}
              >
                Show liked
              </Button>
            </ThemeProvider>
          </div>

          <Grid container spacing={2} columns={16}>
            {characterData.map((el) => (
              <Grid item xs={4} key={el.id}>
                <Character data={el} likePressed={likePressed} />
              </Grid>
            ))}
          </Grid>
          {!loadedLiked ? (
            <div className="loader-button-wrapper">
              <ThemeProvider theme={theme}>
                <Button
                  onClick={nextPage}
                  disabled={page > 42 ? true : false}
                  variant="contained"
                  color="primary"
                >
                  Show more...
                </Button>
              </ThemeProvider>
            </div>
          ) : null}
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};
