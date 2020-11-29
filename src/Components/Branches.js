import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import noBankImg from '../img/no-bank.png'
import branchesImg from '../img/branches.jpg'
//Context 
import { BranchesContext } from '../Context/BranchesProvider'
import { EmployeesContext }  from '../Context/EmployeesProvider'

const Branches = () => {
    // Branches Context
    const { branches } = useContext(BranchesContext)
    const { id } = useParams()
    //EmployeesContext
    const { setId } = useContext(EmployeesContext)

    const filteredBranches = branches.filter(branch => {
        return branch.bank === parseInt(id)
    })

    console.log(filteredBranches)

    return (
        <section className='branches'>
            <div className="branches__container">

                {
                    filteredBranches.length === 0 ? (
                        <div className="branches__no-branch">
                            <h2>Lo sentimos, este banco aun no a abierto ninguna sucursal, consulta otros <Link to='/bancos'>
                                Bancos</Link></h2>
                            <img src={noBankImg} alt="No Available Branch"/>
                        </div>
                    ) : (

                        <div className="branches__cards-container">
                            {
                                filteredBranches.map(eachBranch => (
                                    <div className="branches__cards-container-each card" key={eachBranch.id}>
                                        <img src={branchesImg} alt="Our Branches"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{eachBranch.name}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <Link to={`/sucursales/empleados/${eachBranch.id}`} onClick={() => setId(eachBranch.id)}>Ver empleados</Link>
                                        </div>

                                    </ div>
                                ))
                            }
                        </div>
                    )
                }

            </div>
        </section>
    )
}

export default Branches


