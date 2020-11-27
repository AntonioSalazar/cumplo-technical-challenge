import React from 'react'
import background from '../image-mockups.png'
import {Link} from 'react-router-dom'

const Introduction = () => {
    return (
        <section className='introduction'>
            <div className="introduction__container">
                <div className="introduction__text">
                    <div className="introduction__text-title">
                        <h3>Next Generation digital banking</h3>
                    </div>
                    <div className="introduction__text-paragraph">
                        <p>Take your financila life online. You Easybank account will be a one-step-shop for spending,
                            saving, budgeting, investing and much more.     
                        </p>
                    </div>
                    <div className="introduction__text-btn">
                        <Link to='/sucursales'>
                            <button>Ver Sucursales</button>
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
