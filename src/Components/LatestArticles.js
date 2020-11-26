import React from 'react'
import article1 from '../img/article1.jpg';
import article2 from '../img/article2.jpg';
import articld3 from '../img/article3.jpg';

const LatestArticles = () => {
    return (
        <section className='articles'>
            <div className="articles__container">
                <div className="articles__title">
                    <h4>Latest Articles</h4>
                </div>
                <div className="articles__latest">
                    <div className="articles__latest-each">
                        <div className="article__latest-img">
                                <img src={article1}  alt="restaurant articles"/>
                        </div>
                        <div className="articles__latest-text">
                            <div className="articles__latest-test-title">
                                <h5>Treat yourself without worrying</h5>
                            </div>
                            <div className="articles__latest-test-paragraph">
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit libero neque vitae.
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
                                <h5>Treat yourself without worrying</h5>
                            </div>
                            <div className="articles__latest-test-paragraph">
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit libero neque vitae.
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
                                <h5>Treat yourself without worrying</h5>
                            </div>
                            <div className="articles__latest-test-paragraph">
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit libero neque vitae.
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
