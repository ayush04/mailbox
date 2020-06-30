import React from "react";
import Header from "../header/header";
import EmailList from "../email-list/email-list";
import ContactsList from "../contacts-list/contacts-list";
import SideNav from "../sidenav/sidenav";
import { Container } from "@material-ui/core";

interface MainContainerState {
  folderId: number;
}

class MainContainer extends React.Component<any, MainContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      folderId: 1
    };
  }

  onSelectFolder = (folderId: number) => {
    this.setState({
      folderId: folderId
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <SideNav onSelectFolder={this.onSelectFolder} />
        <Container maxWidth="md" className="email-list">
          <EmailList folderId={this.state.folderId} />
        </Container>
        <span className="contacts-list">
          <ContactsList folderId={"123"} />
        </span>
      </React.Fragment>
    );
  }
}

export default MainContainer;
