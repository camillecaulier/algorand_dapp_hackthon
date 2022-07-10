import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class OwnerPage extends Component {
  state = {};

  render() {
    return (
      <main style={{ margin: 50, padding: "1rem 1" }}>
        <h2>Owner</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formContractInfo">
            <Form.Label>Contract info</Form.Label>
            <Form.Control type="contract" placeholder="Enter contract info" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCardName">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="cardName" placeholder="Enter Card Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>How much are you selling the card for?</Form.Label>
            <Form.Control type="price" placeholder="Price" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Begin sell
          </Button>
        </Form>
      </main>
    );
  }
}

export default OwnerPage;
