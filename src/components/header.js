import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import { Link } from "gatsby"
import styled from "styled-components"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const Button = styled.a`
      display: inline-block;
      background: transparent;
      color: white;
      padding: 10px;
      border: 1px solid white;
    `
    return (
      <div>
        <Navbar color="primary" light expand="md" className="navbar">
          <NavbarBrand href="/">
            <h3 style={{ color: "#ffffff" }}>Codewit</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" id="link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" id="link">
                  About us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/courses" id="link">
                  Courses
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/apply" id="link">
                  Apply
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/" id="link">
                  Hire developers
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/" id="link">
                  Insight
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id="link">
                  Programs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id="link">
                  Clubs
                </NavLink>
              </NavItem>

              <Button>
                {" "}
                <Link to="/account" style={{ color: "white" }}>
                  Login/Sign up
                </Link>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
