import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href="#favourites">Favourites</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="secondary" variant="dark" expand="md" style={{ marginTop: '5px', height: '55px' }}>
    <Navbar.Brand href="#">
      <p style={{ fontFamily: 'avenir', fontSize: '33px', fontWeight: 'lighter', paddingTop: '10px' }}>Beans Love Beers</p>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
