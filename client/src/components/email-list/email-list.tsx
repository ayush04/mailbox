import React from "react";
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
  List,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  Divider
} from "@material-ui/core";

interface IEmailListProps {
  folderId: number;
}

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    divider: {
      backgroundColor: "rgba(0, 0, 0, 0.12)"
    }
  });
});

class EmailList extends React.Component<IEmailListProps> {
  constructor(props: IEmailListProps) {
    super(props);
  }

  render() {
    // @ts-ignore
    const { classes, folderId } = this.props;
    console.log(folderId);
    const arr = [1, 2, 3, 4];
    let updatedArr = arr.map((element) => element * folderId);
    return (
      <List dense className={classes.root}>
        {updatedArr.map((value) => {
          return (
            <React.Fragment>
              <ListItem key={value} button>
                <ListItemAvatar>
                  <Avatar src={`./img/avatar.jpg`} />
                </ListItemAvatar>
                <ListItemText
                  primary={`Email ${value}`}
                  secondary={
                    <Typography component="span" color="textPrimary">
                      {`Sample description ${value}`}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="hr" className={classes.divider} />
            </React.Fragment>
          );
        })}
      </List>
    );
  }
}

export default withStyles(useStyles)(EmailList);
