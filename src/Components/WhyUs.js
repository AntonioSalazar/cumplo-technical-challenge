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
                        <p>We leverage open banking to turn your bank account into your
                            financial hub. Control your finance like never before
                        </p>
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
                            <p>Manage your savings, investments, pension and much
                                more from one account. Tracking your money has never been easier.
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
                            <h5>Fast Onboarding</h5>
                        </div>
                        <div className="whyus__reasons-each-paragraph">
                            <p>
                                We dont do branches. Open your account in minutes online
                                and start taking control of your finances right away.
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
                            <h5>Simple budgeting</h5>
                        </div>
                        <div className="whyus__reasons-each-paragraph">
                            <p>
                                See exactly where your money goes each month. Receive
                                notifications when you're close to hitting your limits
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
