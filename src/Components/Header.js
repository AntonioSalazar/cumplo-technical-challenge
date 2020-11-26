import React, { useContext } from 'react'
import { UserContext } from '../Context/UserProvider'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
import logo from '../bank-online.png'

const Header = () => {

    const { user, loginUser, logoutUser } = useContext(UserContext)
    return (
        
        <header className='header'>
            <div className="container">
                <Router>
                        <div className="header__logo">
                            <figure>
                                <img src={logo} alt="bank-cumplo"/>
                            </figure>
                        </div>

                        <div className="header__nav">
                            <Link to='/sucursales'>
                                Sucursales
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
                </Router>
            </div>
        </header>
    )
}

export default Header
