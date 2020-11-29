import React, { useContext, useState } from 'react'
import { EmployeesContext } from '../Context/EmployeesProvider'
import { useParams } from 'react-router-dom'

const NewEmployee = () => {

    const {  addNewEmployee, setNewEmployeeData } = useContext(EmployeesContext);

    const { id } = useParams()

    const newEmployeeData = {
        branch: id,
        name: '',
        middle_name: '',
        last_name: ''
    }

    const [ newEmployee, setNewEmployee ] = useState(newEmployeeData)

    //getting the value of whatever the user enters in the input
    const getNewEmployeeData = e => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name] : e.target.value
        })
    }

    return (
        <section className='new-employee'>
            <div className="new-employee__container">
                <h2 className='mb-5'>Agregar nuevo empleado</h2>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        setNewEmployeeData(newEmployee)
                        addNewEmployee()
                    }}
                >
                    <input 
                        type="text" 
                        className="form-control mb-2"
                        placeholder='Ingrese el nombre del empleado'
                        onChange={getNewEmployeeData}
                        name='name'
                    />
                    <input 
                        type="text" 
                        className="form-control mb-2"
                        placeholder='Ingrese el segundo nombre del empleado'
                        onChange={getNewEmployeeData}
                        name='middle_name'
                    />
                    <input 
                        type="text" 
                        className="form-control mb-2"
                        placeholder='Ingrese el apellido del empleado'
                        onChange={getNewEmployeeData}
                        name='last_name'
                    />
                    <button 
                        className="btn btn-primary btn-block"
                    
                    >Agregar empleado</button>
                </form>
            </div>
        </section>
    )
}

export default NewEmployee
