import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

class CustomerPage extends Component {
  state = {};
  handleClick = () => {};
  render() {
    return (
      <main style={{ margin: 50, padding: "1rem 1" }}>
        <h2>Customer</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formContractInfo">
            <Form.Label>Please input contract info to see card</Form.Label>
            <Form.Control type="contract" placeholder="Enter contract info" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleClick}>
            show card contract
          </Button>
        </Form>
      </main>
    );
  }
}

export default CustomerPage;
