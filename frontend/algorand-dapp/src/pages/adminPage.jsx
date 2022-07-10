import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import runAdmin from "../smartContract/index.mjs";

class AdminPage extends Component {
  state = { ContractInfo: "", ContractFee: null };

  handleContractCreation = () => {
    // newState;
    console.log("printing out data");
  };

  render() {
    return (
      <main style={{ margin: 50, padding: "1rem 1" }}>
        <h2>Admin</h2>
        <p>If you're not the admin shoo</p>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>decide the fee that you want to take in %</Form.Label>
            <Form.Control type="fee" placeholder="Enter fee" />
            <Form.Text className="text-muted">Don't be too greedy</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I won't be too greedy" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={this.handleContractCreation}
          >
            Submit
          </Button>
        </Form>
      </main>
    );
  }
}

export default AdminPage;
