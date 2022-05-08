import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

const SearchByName = (props) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const search = (event, value) => {
    const index = props.data.filter((el) => el.name === value);
    navigate(`/characterProfile/${index[0].id}`);
  };
  return (
    <Autocomplete
      onChange={search}
      options={props.data.map((el) => el.name)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Character name" />}
    />
  );
};

export default SearchByName;
