import React, { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <h1>welcome!</h1>
        <h4>please select your role</h4>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/admin">I am an admin</Link> |{" "}
          <Link to="/owner">I am an owner</Link>|{" "}
          <Link to="/customer">I am a customer</Link>
        </nav>

        <h1>Instructions</h1>
        <h4> to start</h4>
        <p>
          The administrator decides the fee (in percentage of upload size) that
          will be taken from the owner of an NFT. He/She deploys the contract
          and makes its info available to potential NFT owners and customers.
        </p>

        <h4>admin</h4>
        <p>In order </p>
      </div>
    );
  }
}

export default HomePage;
