import React, { useContext } from 'react'
import { EmployeesContext } from '../Context/EmployeesProvider'

const Employees = () => {

    const { employees, setSortOrder } = useContext(EmployeesContext)
     

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
            </div>
        </section>
    )
}

export default Employees
