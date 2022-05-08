import React, { useState } from "react";
import "./Character.css";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import FavoriteIcon from "@mui/icons-material/Favorite";

export function Character(props) {
  const { name, status, image, id } = props.data;
  const [liked, setLiked] = useState(false);

  const test = () => {
    setLiked((prev) => !prev);
    props.likePressed(id);
  };

  return (
    <>
      <Card sx={{ height: 370 }} className="card">
        <Link to={`/characterProfile/${id}`}>
          <img className="image" src={image} alt="Character" />
        </Link>
        <IconButton onClick={test}>
          <FavoriteIcon style={{ color: liked ? "red" : "grey" }} />
        </IconButton>
        <CardContent>
          <h3 className="title">{name}</h3>
          <p className="status">Status: {status}</p>
        </CardContent>
      </Card>
    </>
  );
}
