import React from "react";
import CardContainer from "./CardContainer.jsx";
import Grid from "@mui/material/Grid";
import "./Card.css";
const CardList = (props) => {
  const { arr } = props;

  return (
    <div className="card-list">
      <div className="inner-card-list">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className="grid"
        >
          {arr.map((value) => {
            return <CardContainer value={value} key={value.id} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default CardList;
