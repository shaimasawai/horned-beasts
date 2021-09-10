import React, { Component } from "react";
import hornedbeastsdata from "./data.json";
import HoredBeast from "./HoredBeast";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Myform from "./MyForm";

class Main extends Component {
  hornsFunc = (event) => {
    let numOfHorns = event.target.options[event.target.selectedIndex].text;
    let resultdata = [];
    if (event.target.value > 0) {
      resultdata = hornedbeastsdata.filter((HoredBeast) => {
        return HoredBeast.horns === numOfHorns;
      });
    } else {
      resultdata = hornedbeastsdata;
    }
    this.setState({
      data: resultdata,
    });
  };
  render() {
    return (
      <div className="row">
        <Myform hornsFunc={this.hornsFunc} />
        {hornedbeastsdata.map((item) => {
          return (
            <HoredBeast
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              modle={this.props.chooesmodle}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
