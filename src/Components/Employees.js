import React, { useContext } from 'react'
// import { useParams} from 'react-router-dom'
import { EmployeesContext } from '../Context/EmployeesProvider'

const Employees = () => {

    const { employees, setSortOrder, previousPage, nextPage, currentPage, totalPages } = useContext(EmployeesContext)
    // const { id } = useParams();

    return (
        <section className='employees-table'>
            <div className="employees-table__container">
                <h2>Empleados:</h2>
                <div className='employees-table__options' onChange={e => setSortOrder(e.target.value)}>
                  <input type="radio" value="pk" name="options" /> Ascendente
                  <input type="radio" value="-pk" name="options" /> Descendente
                </div>
                <table className='table'> 
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th className='employees-table__middle-name'>Middle Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
 
                            {
                                employees.map(eachEmployee => {
                                    return(
                                        <tr key={eachEmployee.id}>
                                            <th>{eachEmployee.id}</th>
                                            <td>{eachEmployee.name}</td>
                                            <td className='employees-table__middle-name'>{eachEmployee.middle_name}</td>
                                            <td>{eachEmployee.last_name}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
                <div className="employees-table-pagination">

                    {
                        currentPage === 1 ? null : (
                            <button
                                type='button'
                                className='btn btn-info mr-1 mt-2'
                                onClick={previousPage}
                            >Anterior &laquo;</button>
                        )
                    }
                    {
                        currentPage === totalPages ? null : (
                            <button
                                type='button'
                                className='btn btn-info mr-1 mt-2'
                                onClick={nextPage}
                            >Siguiente &raquo;</button>
                            
                        )
                    }
                    <p className='mt-2'>Pagina {currentPage} de {totalPages}</p>
                </div>
            </div>
        </section>
    )
}

export default Employees
