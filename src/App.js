import React, { Component } from "react";
import Header from "./componente/Header";
import Main from "./componente/Main";
import Footer from "./componente/Footer";
import Databeast from "./componente/data.json";
import Selectbast from "./componente/selectbast";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHorne: Databeast,
      show: false,
      datamodle: {},
    };
  }
  handleShow = (data) => {
    this.setState({
      show: true,
      datamodle: data,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main chooesmodle={this.handleShow} data={this.dataHorne} />
        <Selectbast
          exit={this.handleClose}
          showmodle={this.state.show}
          datamodle={this.state.datamodle}
        />

        <Footer />
      </>
    );
  }
}

export default App;
