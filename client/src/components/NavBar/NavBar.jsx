import { Link } from "react-router-dom";

import { Button, Navbar } from "flowbite-react";

import vnr from "../../loginassets/logo.jpg";

// import "./NavBar.css"; // Import the CSS file

function NavBar() {
  return (
    <Navbar fluid={true} rounded={true} className="bg-customGreen">
      {" "}
      {/* Add custom class */}
      <Navbar.Brand as={Link} to="https://vnrvjiet.ac.in/">
        <img src={vnr} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          VNR VJIET
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={true}>
          Home
        </Navbar.Link>

        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>

        <Navbar.Link as={Link} to="/services">
          Services
        </Navbar.Link>

        <Navbar.Link as={Link} to="/contact" >
          Contact
        </Navbar.Link>

        <Button gradientDuoTone="purpleToPink" inline as={Link} to="/signin">
          Sign In
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
