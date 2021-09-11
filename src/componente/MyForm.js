import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class MyForm extends Component {
  render() {
    return (
      <>
        <h2 className="select">select number of Horns you want to preview</h2>
        <Form>
          <Form.Control
            className="select"
            onChange={(e) => this.props.hornsFunc(e)}
            as="select"
            size="lg"
          >
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2"> 2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Control>
        </Form>
        <br />
        <hr />
      </>
    );
  }
}

export default MyForm;
