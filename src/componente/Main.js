import React, { Component } from "react";
import hornedbeastsdata from "./data.json";
import HoredBeast from "./HoredBeast";
// import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
  render() {
    return (
      <div className="row">
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
