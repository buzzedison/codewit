import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

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
                <NavLink href="/components/" id="link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id="link">
                  About us
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="link">
                  Courses
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>JavaScript</DropdownItem>
                  <DropdownItem>HTML & CSS</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Python</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/" id="link">
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
                  Clubs
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
