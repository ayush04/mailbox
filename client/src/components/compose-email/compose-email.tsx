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
  InputBase,
  Button
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
    },
    hidden: {
      display: "none"
    },
    input: {
      width: "100%",
      padding: "7px"
    },
    editor: {
      "font-size": "16px",
      "font-family": "Roboto, Helvetica, Arial, sans-serif",
      padding: "10px",
      "overflow-y": "auto",
      height: "300px"
    },
    footer: {
      padding: "7px"
    }
  })
);

interface IComposeEmailProps {
  isOpen: boolean;
  onCloseComposeEmail: Function;
}

const ComposeEmail = (props: IComposeEmailProps) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={6}
      className={
        props.isOpen ? classes.root : classes.root + " " + classes.hidden
      }
    >
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
            <IconButton
              aria-label="Cancel"
              color="inherit"
              onClick={() => props.onCloseComposeEmail()}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="div">
        <InputBase placeholder="To" className={classes.input}></InputBase>
        <Divider component="hr" className={classes.divider} />
        <InputBase placeholder="From" className={classes.input}></InputBase>
        <Divider component="hr" className={classes.divider} />
      </Box>
      <div
        contentEditable={true}
        placeholder="Compose a message.."
        className={classes.editor}
      ></div>
      <Divider component="hr" className={classes.divider} />
      <Box component="div" className={classes.footer}>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default ComposeEmail;
