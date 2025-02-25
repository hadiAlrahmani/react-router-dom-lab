import { Link } from 'react-router-dom'

const NavBar = () => {
 return (
  <nav>
  <ui>
   <li>
    <Link to="/">Home</Link>
   </li>
   <li>
    <Link to="/mailboxes">Mailboxes</Link>
   </li>
   <li>
    <Link to="/new-mailbox">New Mailbox</Link>
   </li>
  </ui>
  </nav>
 )
}

export default NavBar