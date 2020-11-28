import React, { useContext } from "react"
import { Link } from 'react-router-dom'

//context
import { BankContext } from '../Context/BankProvider';

//img
import bankImg from '../img/bank.jpg'

const Banks = () => {

    const { banks } = useContext(BankContext);

    return (
            <section className='banks'>
                <div className="banks__container">
    
                    <div className="banks__cards-container">
                        {
                            banks.map(eachBank => 
                                 (
                                    <div className="banks__cards-each card" key={eachBank.pk}>
                                        <img src={bankImg} alt="Bank"/>
                                        <div className='card-body'>
                                            <h5 className="card-title">{eachBank.name}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error a similique molestiae quaerat eveniet?</p>
                                            <Link to={`/sucursales/${eachBank.pk}`}>Ver Sucursales</Link>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
    
    export default Banks
    
 