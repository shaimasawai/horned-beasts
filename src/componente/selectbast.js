import React, { Component } from 'react'
import {Modal,Button,Card} from 'react-bootstrap';




class selectbast extends Component {
    render() {

        return (
            <>
                {/* <Button variant="primary" onClick={this.props.handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={this.props.showmodle} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.exit}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.exit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}

<Modal Show={this.props.showmodle}>
                    <Modal.Header>
                        <Modal.Title>{this.props.datamodles}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <Card>
                                <Card.Img src={this.props.image_url} alt={this.props.title} />
                                <Card.Body>
                                    <Card.Text>
                                        {this.props.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.props.exit}>Close</Button>
                        </Modal.Footer>
                        </Modal>
            </>
        );
    }



}

export default selectbast

