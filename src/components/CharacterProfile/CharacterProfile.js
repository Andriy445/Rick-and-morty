import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./CharacterProfile.css";

export const CharacterProfile = () => {
  const [CharacterInfo, setCharacterInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          const result = res.data;
          setCharacterInfo(result);
          setIsLoaded(true);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const { name, species, gender, location, episode, status, created, image } =
    CharacterInfo;

  const formatDate = (time) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(time).toLocaleString(undefined, options);
  };

  return (
    <div className="profile-wrapper">
      {isLoaded ? (
        <>
          <div className="photo">
            <img src={image} alt="Character photo" />
          </div>
          <div className="info">
            <h1 className="name">{name}</h1>
            <h4>Gender: {gender}</h4>
            <h4>Species: {species}</h4>
            <h4>Location: {location.name}</h4>
            <h4>Epsiodes: {episode.length}</h4>
            <h4>Status: {status}</h4>
            <h4>Created: {formatDate(created)}</h4>
          </div>
        </>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};
