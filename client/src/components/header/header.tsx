import React from "react";
import clsx from "clsx";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  useTheme,
  CssBaseline,
  AppBar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ContactDialog from "../contact-dialog/contact-dialog";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

interface IHeaderProps {
  onAddContact: Function
}

const Header = (props: IHeaderProps) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const theme = useTheme();

  const openModal = () => {
    setModalOpen(true);
  };
  // check if setModalOpen is sync
  const closeModal = () => {
    setModalOpen(false);
  };

  const onAddContact = (name: string, email: string) => {
    props.onAddContact({
      name,
      email
    });
    closeModal();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: false
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MailBox
          </Typography>
          <Button color="inherit">Create Mail</Button>
          <Button color="inherit" onClick={openModal}>
            Add Contact
          </Button>
        </Toolbar>
        <ContactDialog isOpen={modalOpen} cancelButtonClickHandler={closeModal} onAddContact={onAddContact} />
      </AppBar>
    </div>
  );
};

export default Header;
