import React from "react";
import "./Card.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CardContainer = (props) => {
  const { id, name, email, website } = props.value;
  return (
    <Grid item xs={11} sm={5} md={4} lg={3}>
      <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2`} alt={`img ${id}`} />
        <div className="card-text">
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {email}
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {website}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default CardContainer;
