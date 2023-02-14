// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-size"
        />
      </div>
      <Link to="/" className="link-style">
        <li className="list-style">Home</li>
      </Link>
      <Link to="/About" className="link-style">
        <li className="list-style">Products</li>
      </Link>
      <Link to="/Contact" className="link-style">
        <li className="list-style">Cart</li>
      </Link>
      <button type="button" className="button-logout">
        Logout
      </button>
    </nav>
  </>
)

export default Header
