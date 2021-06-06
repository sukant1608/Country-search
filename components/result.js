import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 1000,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

function AutoGridNoWrap({ list }) {
  const classes = useStyles();

  function handlClick(value) {
    Router.push({ pathname: `/${value.name}`, query: value });
  }
  return (
    <div className={classes.root}>
      {list.result.map((element) => (
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs zeroMinWidth>
              <h1>{element.name}</h1>
              <Typography noWrap>Region : {element.region}</Typography>
              <Button
                onClick={() => {
                  handlClick(element);
                }}
              >
                Click for more details
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}

export default connect((store) => ({ list: store.searchResult }))(
  AutoGridNoWrap
);
