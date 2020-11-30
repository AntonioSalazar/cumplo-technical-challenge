import React from 'react'
import background from '../img/image-mockups.png'
import {Link} from 'react-router-dom'

const Introduction = () => {
    return (
        <section className='introduction'>
            <div className="introduction__container">
                <div className="introduction__text">
                    <div className="introduction__text-title">
                        <h3>Plataforma de financiamiento colaborativo</h3>
                    </div>
                    <div className="introduction__text-paragraph">
                        <p>Somos la plataforma de financiamiento colaborativo más grande de América Latina, que a través de la tecnología logramos desintermediar el sistema financiero, haciéndolo más justo y accesible para empresas e inversionistas</p>
                    </div>
                    <div className="introduction__text-btn">
                        <Link to='/bancos'>
                            <button>Ver Bancos</button>
                        </Link>
                    </div>
                </div>
                <div className="introduction__image">
                    <div className="introduction__image-container">
                        <figure>
                            <img src={background} alt="Cumplo banking"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction
