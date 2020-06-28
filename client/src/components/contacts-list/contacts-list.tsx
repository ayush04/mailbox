import React from "react";
import { createStyles, withStyles, makeStyles, Theme, List, ListItemAvatar, ListItem, Avatar, ListItemText } from "@material-ui/core";

interface ContactsListProps {
  folderId: string;
}

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    }
  })
});

class ContactsList extends React.Component<ContactsListProps> {
  constructor(props: ContactsListProps) {
    super(props);
  }

  render() {
    // @ts-ignore
    const { classes } = this.props;
    return (
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map(value => {
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <Avatar src='./img/avatar.jpg' />
              </ListItemAvatar>
              <ListItemText primary={`Contact ${value}`} />
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default withStyles(useStyles)(ContactsList);