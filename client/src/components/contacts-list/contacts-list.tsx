import React from "react";
import { createStyles, withStyles, makeStyles, Theme, List, ListItemAvatar, ListItem, Avatar, ListItemText } from "@material-ui/core";
import { IContact } from "../main-container/main-container";

interface IContactsListProps {
  contacts: Array<IContact>;  
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

class ContactsList extends React.Component<IContactsListProps> {
  constructor(props: IContactsListProps) {
    super(props);
  }

  render() {
    // @ts-ignore
    const { classes } = this.props;
    return (
      <List dense className={classes.root}>
        {this.props.contacts.map(contact => {
          return (
            <ListItem key={contact.email} button>
              <ListItemAvatar>
                <Avatar src='./img/avatar.jpg' />
              </ListItemAvatar>
              <ListItemText primary={contact.name}
                secondary={contact.email} />
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default withStyles(useStyles)(ContactsList);