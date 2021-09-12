import React, { Component } from "react";
import Header from "./componente/Header";
import Main from "./componente/Main";
import Footer from "./componente/Footer";
import Databeast from "./componente/data.json";
import Selectbast from "./componente/selectbast";
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./componente/MyForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHorne: Databeast,
      show: false,
      datamodle: {},
      Databeast: Databeast,
      resultdata: Databeast,
      title: "",
      description: "",
      image_url: "",
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

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handelOPen = (title, description, image_url) => {
    this.setState({
      show: true,
      title: title,
      description: description,
      image_url: image_url,
    });
  };

  hornsFunc = (event) => {
    let numOfHorns = event.target.options[event.target.selectedIndex].text;

    if (event.target.value > 0) {
      var resulttedData = Databeast.filter((HoredBeast) => {
        return HoredBeast.horns === numOfHorns;
      });
    } else {
      // resulttedData = Databeast;
    }
    this.setState({
      resultdata: resulttedData,
    });
  };
  render() {
    return (
      <>
        <Header />
        <MyForm hornsFunc={this.hornsFunc} />
        <Main
          chooesmodle={this.handleShow}
          data={this.dataHorne}
          resultdata={this.state.resultdata}
          handelOPen={this.handelOPen}
        />
        <Selectbast
          handleClose={this.handleClose}
          showmodle={this.state.show}
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.image_url}
        />

        <Footer />
      </>
    );
  }
}

export default App;
