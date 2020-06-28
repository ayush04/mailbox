import React from "react";
import {
  makeStyles,
  createStyles,
  CssBaseline,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Theme
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
})
);

const SideNav = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer variant="permanent"
        className={classes.drawer}
        classes={{
        paper: classes.drawerPaper
      }}>
        <div className={classes.toolbar} />
          
        <Divider />
          <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text} onClick={() => props.onSelectFolder('' + index)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} id={`${index}`} />
            </ListItem>
          ))}
          </List>
      </Drawer>
          
    </div>
  );
};

export default SideNav;
