import React from "react";
import Header from "../header/header";
import EmailList from "../email-list/email-list";
import ContactsList from "../contacts-list/contacts-list";
import SideNav from "../sidenav/sidenav";
import { Container } from "@material-ui/core";

export interface IContact {
  name: string,
  email: string
}

interface IMainContainerState {
  folderId: number;
  contacts: Array<IContact>
}

class MainContainer extends React.Component<any, IMainContainerState> {
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

  onAddContact = (contact: IContact) => {
    const contacts = [...this.state.contacts, contact];
    this.setState({
      contacts
    });
  }

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
