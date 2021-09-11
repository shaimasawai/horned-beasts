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
  handleShow = (horns) => {
    this.setState({
      animalData: horns,
    });
  };

  selected = (title) => {
    // eslint-disable-next-line array-callback-return
    let findfAnimal = Databeast.find((element) => {
      if (element.title === title) {
        return element;
      }
    });
    this.setState({
      show: true,
      datamodle: findfAnimal,
    });
  };

  handleClose = (title) => {
    // eslint-disable-next-line array-callback-return
    let findanimal = Databeast.find((element) => {
      if (element.title === title) {
        return element;
      }
    });

    this.setState({
      show: true,
      datamodel: findanimal,
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
