import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
      
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/add-movies/">Add Movies</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/view-movies">View Movies</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/lifecycle-methods">Life Cycle Methods</Link>
                  </NavItem>
                    </Nav>
              </Collapse>
            </Navbar>
          </div>
      
    )
}
