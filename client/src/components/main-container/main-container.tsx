import React from "react";
import Header from "../header/header";
import EmailList from "../email-list/email-list";
import ContactsList from "../contacts-list/contacts-list";
import SideNav from "../sidenav/sidenav";
import { Container } from "@material-ui/core";

export interface Contact {
  name: string,
  email: string
}

interface MainContainerState {
  folderId: number;
  contacts: Array<Contact>
}

class MainContainer extends React.Component<any, MainContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      folderId: 1,
      contacts: []
    };
  }

  onSelectFolder = (folderId: number) => {
    this.setState({
      folderId: folderId
    });
  };

  onAddContact = (contact: Contact) => {
    const contacts = [...this.state.contacts, contact];
    this.setState({
      contacts
    });
  }

  /* onUpdateName = (name: string) => {
    this.setState({
      newContact: {
        name: name
      }
    });
  }

  onUpdateEmail = (email: string) => {
    this.setState({
      newContact: {
        email: email
      }
    }); 

    console.log(this.state);
  } */

  onDialogClose = () => {
    console.log('dialog closed');
  };

  render() {
    return (
      <React.Fragment>
        <Header onAddContact={this.onAddContact} />
        <SideNav onSelectFolder={this.onSelectFolder} />
        <Container maxWidth="md" className="email-list">
          <EmailList folderId={this.state.folderId} />
        </Container>
        <span className="contacts-list">
          <ContactsList contacts={this.state.contacts} />
        </span>
      </React.Fragment>
    );
  }
}

export default MainContainer;
