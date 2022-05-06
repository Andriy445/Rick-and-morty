import React from "react";
import "./Character.css";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Grid from "@mui/material/Grid";

export function Character(props) {
  const { id, name, status } = props.data;

  const test = (e) => {
    e.stopPropagation();
    console.log(e.target);
  };
  return (
    <>
      <ListItemText primary={`${id}. ${name} - ${status}`} />
      {/* <ListItemText secondary={`${status}`} /> */}
      <IconButton edge="end" onClick={test}>
        <ThumbUpIcon />
      </IconButton>
      
    </>
  );
}
