import React from 'react';
import styled from '@emotion/styled';
import logoCumplo from '../img/logo-cumplo.png'

const ParagraphAboutUs = styled.p`
    display: inline-block;
    padding: 20px;
    text-align: justify;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px
`;

const AboutUs = () => {
    return (
        <section className='aboutus'>
            <div className="aboutus__container">
                <div className="aboutus__info">
                    <div className="aboutus__info-img">
                        <img src={logoCumplo} alt="Cumplo"/>
                    </div>
                    <div className="aboutus__aboutus__info-text">
                        <ParagraphAboutUs>
                        Nuestro sueño es que las empresas se financien a tasas más justas y que todas las personas puedan ahorrar su dinero obteniendo rentabilidades atractivas para impulsar su crecimiento.
                        </ParagraphAboutUs>
                        <ParagraphAboutUs>
                        Queremos democratizar el sistema financiero conectando a empresas que necesitan financiamiento para crecer con personas que están dispuestas a prestarles el dinero, a una tasa justa.
                        </ParagraphAboutUs>
                        <ParagraphAboutUs>
                        Somos la plataforma de financiamiento colaborativo más grande de América Latina, que a través de la tecnología logramos desintermediar el sistema financiero, haciéndolo más justo y accesible para empresas e inversionistas.
                        </ParagraphAboutUs>
                        <ParagraphAboutUs>
                            Se usaron styled components para la creacion de esta seccion
                        </ParagraphAboutUs>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
