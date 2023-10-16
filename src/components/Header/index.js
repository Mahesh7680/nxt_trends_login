import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-bar-top">
      <img
        className="website-logo-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />

      <div className="large-screen-nav">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
        <Link to="/login">
          <button type="button">Logout</button>
        </Link>
      </div>
      <Link to="/login">
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </Link>
    </div>
    <ul className="nav-menu">
      <Link to="/" className="nav-link">
        <img
          alt="nav home"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        />
      </Link>
      <Link to="/products" className="nav-link">
        <img
          alt="nav products"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        />
      </Link>
      <Link to="/cart" className="nav-link">
        <img
          alt="nav cart"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        />
      </Link>
    </ul>
  </nav>
)
export default Header
