import React from "react";
import TextField from "@mui/material/TextField";
import "./SearchField.css";

const SearchField = (props) => {
  return (
    <div className="searchDiv">
      <TextField
        type="search"
        onChange={props.functionProps}
        id="outlined-basic"
        label="Enter Name"
        variant="outlined"
        margin="normal"
        className="text-field"
      />
    </div>
  );
};

export default SearchField;
