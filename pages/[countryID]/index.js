import { withRouter } from "next/router";
import { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.router.query;
  }

  render() {
    const element = this.state;
    return (
      <>
        <Paper style={{ padding: "20px" }}>
          <h1
            style={{
              margin: "0",
              display: "inline-block",
            }}
          >
            {element.name}
          </h1>
          <img
            style={{ height: "50px", width: "100px", float: "right" }}
            src={element.flag}
          />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs zeroMinWidth>
              <Typography style={{ marginTop: "10px" }}>
                Native Name : {element.nativeName}
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
                Region : {element.region}
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
                Sub-Region : {element.subregion}
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
                Capital : {element.capital}
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
                Currencies : {element.currencies}
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
                TimeZones : {element.timezones}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}
export default withRouter(CountryDetails);
