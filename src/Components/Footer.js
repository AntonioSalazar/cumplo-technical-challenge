import React from 'react'
import logo from '../img/bank-online.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__logo">
                    <Link to='/'>
                        <img src={ logo } alt="Cumplo"/>
                    </Link>
                </div>
                <div className="footer__author">
                    <h4>Creado por Antonio Salazar &reg;</h4>
                    <p>Este pagina fue creada como parte del proceso de seleccion para la
                        posicion de Front End Developer en Cumplo
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
