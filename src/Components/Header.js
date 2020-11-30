import React, { useContext } from 'react'
import { UserContext } from '../Context/UserProvider'
import {
    Link,
  } from 'react-router-dom';
import logo from '../img/bank-online.png'

const Header = () => {

    const { user, loginUser, logoutUser } = useContext(UserContext)
    return (
        <header className='header'>
            <div className="container">
                <div className="header__logo">
                    <figure>
                    <Link to='/'> 
                    <img src={logo} alt="bank-cumplo"/>
                    </Link>
                    </figure>
                </div>
                <div className="header__nav">
                    <Link to='/bancos'>
                    Bancos
                    </Link>

                    <Link to='/nosotros'>
                    Nosotros
                    </Link>
                    {
                    user.state ? (
                    <button
                        type='button'
                        className='header__logout-btn'
                        onClick={logoutUser}
                    >Cerrar Sesion</button>
                    ) : (
                    <button
                        type='button'
                        className='header__login-btn'
                        onClick={loginUser}
                    >Inicia Sesion</button>
                    )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
