import React from "react";
import { createStyles, withStyles, makeStyles, Theme, List, ListItemAvatar, ListItem, Avatar, ListItemText, Typography } from "@material-ui/core";

interface EmailListProps {
    folderId: string;
};

const useStyles = makeStyles((theme: Theme) => {
    createStyles({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      }
    })
});

class EmailList extends React.Component<EmailListProps> {
    constructor(props: EmailListProps) {
        super(props);
    }

    render() {
        // @ts-ignore
        const { classes, folderId } = this.props;
        console.log(folderId);
        return (
            <List dense className={classes.root}>
                {[0, 1, 2, 3].map(value => {
                    return (
                        <ListItem key={value} button>
                            <ListItemAvatar>
                                <Avatar src={`./img/avatar.jpg`} />
                            </ListItemAvatar>
                            <ListItemText primary={`Email ${value}`}
                                secondary={
                                    <Typography
                                    component='span' color='textPrimary'>
                                        {`Sample description ${value}`}
                                    </Typography>
                                }/>
                        </ListItem>
                    )
                })}
            </List>
        )
    }
};

export default withStyles(useStyles)(EmailList);