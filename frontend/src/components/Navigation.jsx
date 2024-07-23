import {Link, Outlet} from 'react-router-dom'

function Navigation() {
    
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <ul>
                <li><Link to = "/user-dashboard">User Dashboard</Link></li>
                <li><Link to = "/manager-dashboard">Manager Dashboard</Link></li>
                <li><Link to = "/holidays">Holidays</Link></li>
                <li><Link to = "/">Sign Out</Link></li>

            </ul>
        </nav>
        <Outlet/>
      </>
    )
  }
  
  export default Navigation;