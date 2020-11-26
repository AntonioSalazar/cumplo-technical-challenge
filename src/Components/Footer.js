import React from 'react'
import logo from '../img/bank-online.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__logo">
                    <img src={ logo } alt="Cumplo"/>
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
