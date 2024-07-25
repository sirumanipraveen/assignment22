import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    // FIX4: To use history we should destruct it from props received
    const {history} = props

    Cookies.remove('jwt_token')
    // FIX5: When logging out history.replace should be used to prevent navigating to authenticated routes when the back button is clicked in browser
    // FIX6: Path to Login Route should be as given below
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div>
          <h1>FnMoney ASSignment</h1>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          />
        </div>

        <div className="nav-content nav-bar-large-container">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                about
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link" />
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Get start
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
