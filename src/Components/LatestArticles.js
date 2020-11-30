import React from 'react'
import article1 from '../img/article1.jpg';
import article2 from '../img/article2.jpg';
import articld3 from '../img/article3.jpg';

const LatestArticles = () => {
    return (
        <section className='articles'>
            <div className="articles__container">
                <div className="articles__title">
                    <h4>Ultimos articulos</h4>
                </div>
                <div className="articles__latest">
                    <div className="articles__latest-each">
                        <div className="article__latest-img">
                                <img src={article1}  alt="restaurant articles"/>
                        </div>
                        <div className="articles__latest-text">
                            <div className="articles__latest-test-title">
                                <h5>México, tierra fértil para las fintech y su desarrollo</h5>
                            </div>
                            <div className="articles__latest-test-paragraph">
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque eos deleniti eligendi in. Nobis debitis architecto quis perspiciatis dolore quia veniam.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="articles__latest-each">
                        <div className="article__latest-img">
                                <img src={article2}  alt="restaurant articles"/>
                        </div>
                        <div className="articles__latest-text">
                            <div className="articles__latest-test-title">
                                <h5>Hay escasez de talento para el ecosistema fintech: experto</h5>
                            </div>
                            <div className="articles__latest-test-paragraph">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatum magni autem quidem ut dicta.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="articles__latest-each">
                        <div className="article__latest-img">
                                <img src={articld3}  alt="restaurant articles"/>
                        </div>
                        <div className="articles__latest-text">
                            <div className="articles__latest-test-title">
                                <h5>FinTech en México busca incrementar el volumen de bonos que se operan de forma electrónica</h5>
                            </div>
                            <div className="articles__latest-test-paragraph">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor possimus ut quibusdam dignissimos eligendi? Consectetur fugit dolore iure.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LatestArticles
