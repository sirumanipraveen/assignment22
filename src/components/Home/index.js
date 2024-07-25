import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  // FIX7: Cookies.get() method should be used to get the accessToken stored in Cookies
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div>
        <img
          src="https://i.ibb.co/Qpknv6V/Screenshot-2024-07-23-124729.png"
          alt="fnmoney img loading"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
