import {Link, Outlet} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
function Navigation({currentUser}) {

    return (
      <>
        <Navbar expand="sm" fixed="top" aria-label="Main navigation">
          <ul className='navigation-bar'>
                <Nav.Link as={Link} to = "/user-dashboard" aria-label="User Dashboard">User Dashboard</Nav.Link>
                {currentUser && 
                ((currentUser.grade == 'MANAGER') && <Nav.Link as={Link} to = "/manager-dashboard" aria-label="Manager Dashboard">Manager Dashboard</Nav.Link> )}
                {/* <Nav.Link as={Link} to = "/manager-dashboard" aria-label="Manager Dashboard">Manager Dashboard</Nav.Link> */}
                <Nav.Link as={Link} to = "/holidays" aria-label="Holidays">Holidays</Nav.Link>
                <Nav.Link as={Link}to = "/" aria-label="Sign Out">Sign Out</Nav.Link>
         </ul>
        </Navbar>
        <Outlet/>
      </>
      )
  }
  export default Navigation;