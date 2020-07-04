import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, TextField } from '@material-ui/core';

interface IContactDialogProps {
    cancelButtonClickHandler: any;
    isOpen: boolean;
    onAddContact: Function;
};
interface IContactDialogState {
    name: string;
    email: string;
}

class ContactDialog extends React.Component<IContactDialogProps, IContactDialogState> {
    constructor(props: IContactDialogProps) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }

    private onNameChange = (event: any) => {
        if (event && event.target) {
            this.setState({
                name: event.target.value
            });
        }
    };

    private onEmailChange = (event: any) => {
        if (event && event.target) {
            this.setState({
                email: event.target.value
            });
        }
    };

    render() {
        return (
            <Dialog open={this.props.isOpen} maxWidth='sm' fullWidth={true}>
                <DialogTitle>
                    Add New Contact
                </DialogTitle>
                <DialogContent>
                    <TextField autoFocus
                        margin='dense' name='name' label='Name' type='text' onChange={this.onNameChange} fullWidth/>
                    <TextField
                        margin='dense' name='email' label='Email Address' onChange={this.onEmailChange} type='email' fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button color='primary' onClick={() => this.props.onAddContact(this.state.name, this.state.email)} variant='contained'>Add</Button>
                    <Button color='secondary' onClick={this.props.cancelButtonClickHandler} variant='contained'>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    };
}

export default ContactDialog;