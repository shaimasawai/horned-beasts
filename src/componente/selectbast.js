import React, { Component } from "react";
import { Modal, Button, Card } from "react-bootstrap";

class selectbast extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Modal show={this.props.showmodle}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img src={this.props.image_url} alt={this.props.title} />
              <Card.Body>
                <Card.Text>{this.props.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default selectbast;
