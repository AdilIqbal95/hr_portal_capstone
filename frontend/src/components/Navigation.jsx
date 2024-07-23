import {Link, Outlet} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';


function Navigation() {

    return (
      <>
        <Navbar  bg="dark" variant="dark" expand="sm" fixed="top" className="navigation-bar">
          <ul className='navigation-bar'>
                <Nav.Link as={Link} to = "/user-dashboard" aria-label="User Dashboard">User Dashboard</Nav.Link>
                <Nav.Link as={Link} to = "/manager-dashboard" aria-label="Manager Dashboard">Manager Dashboard</Nav.Link>
                <Nav.Link as={Link} to = "/holidays" aria-label="Holidays">Holidays</Nav.Link>
                <Nav.Link as={Link}to = "/" aria-label="Sign Out">Sign Out</Nav.Link>
         </ul>
        </Navbar>
        <Outlet/>
      </>
    )
  } 
  
  export default Navigation;