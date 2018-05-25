import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Button } from '@material-ui/core'
import { Store } from '../app/store'


const styles = theme => ({
  root: {
    height: 180
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing.unit
  }
 
});

class SimpleSlide extends React.Component {
  render() {
    const { classes } = this.props;
    // const { checked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          {/* <Switch checked={checked} onChange={this.handleChange} aria-label="collapse" /> */}

          <Store.Consumer>
            {({ answer, handleCloseAns, checked }) => (
              <React.Fragment>
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                  <Paper elevation={4} className={classes.paper}>
                    <h2>
                      This year you will make:
                      <br /> {answer}
                    </h2>
                    <Button onClick={handleCloseAns} color="primary">
                      ok
                    </Button>
                  </Paper>
                </Slide>
              </React.Fragment>
            )}
          </Store.Consumer>
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlide);
