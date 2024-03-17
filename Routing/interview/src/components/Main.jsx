import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark"> */}
        {/* <Container> */}
          {/* <Nav className="me-auto"> */}
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          {/* </Nav> */}
        {/* </Container> */}
      {/* </Navbar> */}
    </>
  );
}

export default Main;