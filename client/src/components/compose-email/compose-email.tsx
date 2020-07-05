import React from "react";
import clsx from "clsx";
import {
  Paper,
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  InputBase
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      right: "0",
      width: "600px",
      bottom: "0",
      margin: "24px",
      display: "flex",
      outline: "none",
      "z-index": "2000",
      position: "fixed",
      "max-width": "calc(100% - 48px)",
      "max-height": "calc(100% - 48px)",
      "min-height": "500px",
      "flex-direction": "column"
    },
    title: {
      flexGrow: 1
    },
    divider: {
      backgroundColor: "rgba(0, 0, 0, 0.12)"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  })
);

const ComposeEmail = () => {
  const classes = useStyles();
  return (
    <Paper elevation={6} className={classes.root}>
      <Box component="div">
        <AppBar
          position="relative"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: false
          })}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              New Message
            </Typography>
            <IconButton aria-label="Cancel" color="inherit">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="div">
        <InputBase placeholder="To"></InputBase>
              <Divider component="hr" className={classes.divider} />
              <InputBase placeholder="From"></InputBase>
              <Divider component="hr" className={classes.divider} />
      </Box>
      <div>compose email</div>
    </Paper>
  );
};

export default ComposeEmail;
