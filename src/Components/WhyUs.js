import React from 'react'
import apiImg from '../img/icon-api.svg'
import budgetImg from '../img/icon-budgeting.svg'
import onboardImg from '../img/icon-onboarding.svg'

const WhyUs = () => {
    return (
        <section className='whyus'>
            <div className="whyus__container">
                <div className="whyus__text">
                    <div className="whyus__text-title">
                        <h4>Por que elegirnos?</h4>
                    </div>
                    <div className="whyus__text-paragraph">
                        <p>Nuestro sueño es que las empresas se financien a tasas más justas y que todas las personas puedan ahorrar su dinero obteniendo rentabilidades atractivas para impulsar su crecimiento.</p>
                    </div>
                </div>
                <div className="whyus__reasons">
                    <div className="whyus__reasons-each">
                        <div className="whyus__reasons-each-img">
                            <figure>
                                <img src={apiImg} alt="API"/>
                            </figure>
                        </div>
                        <div className="whyus__reasons-each-title">
                            <h5>API Propia</h5>
                        </div>
                        <div className="whyus__reasons-each-paragraph">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam officia neque voluptatum.
                            </p>
                        </div>
                    </div>
                    <div className="whyus__reasons-each">
                        <div className="whyus__reasons-each-img">
                            <figure>
                                <img src={onboardImg} alt="API"/>
                            </figure>
                        </div>
                        <div className="whyus__reasons-each-title">
                            <h5>Servicio Personalizado</h5>
                        </div>
                        <div className="whyus__reasons-each-paragraph">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis quasi placeat dolorem, praesentium obcaecati!    
                            </p>
                        </div>
                    </div>
                    <div className="whyus__reasons-each">
                        <div className="whyus__reasons-each-img">
                            <figure>
                                <img src={budgetImg} alt="API"/>
                            </figure>
                        </div>
                        <div className="whyus__reasons-each-title">
                            <h5>Cuentas claras</h5>
                        </div>
                        <div className="whyus__reasons-each-paragraph">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt id autem esse aliquid vero cum, repellat perferendis corporis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
