import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Error from './Error'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'


const NewEmployee = () => {
    const { id } = useParams()

    const newEmployeeData = {
        branch: id,
        name: '',
        middle_name: '',
        last_name: ''
    }

    const [ newEmployee, setNewEmployee ] = useState(newEmployeeData)
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ]= useState('')
    const [ redirect, setRedirect ] = useState(false)

    //getting the value of whatever the user enters in the input
    const getNewEmployeeData = e => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name] : e.target.value
        })
    }
    const { name, last_name, middle_name } = newEmployee


    const addNewEmployee =  e => {

        const regexPattern = new RegExp('^[A-Za-zÀ-ÿ _]*[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ _]*$');

        e.preventDefault()
        if(!name.trim() || !last_name.trim() ||!middle_name.trim()){
            setError(true)
            setErrorMessage('Por favor ingresa los datos solicitados')
            return
        } else if(!regexPattern.test(name) || !regexPattern.test(last_name) ){
            setError(true)
            setErrorMessage('Solo se pueden usar letras, acentos y espacios')
            return
        } else {
            setError(false)
            axios
                .post(`https://tryouts-cumplo.herokuapp.com/employees/?branch=${id}`, newEmployee)
                .then(response => {
                    setNewEmployee({
                        name: '',
                        middle_name: '',
                        last_name: ''
                    })
                    setRedirect(true)
                    Swal.fire(
                        'Empleado agregado',
                        `Se ha agregado un nuevo empleado a la sucursal con id: ${id}`,
                        'success'
                    )
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    if (redirect) {
        return <Redirect to={`/`}/>
    }

    return (
        <section className='new-employee'>
            <div className="new-employee__container">
                <h2 className='mb-5'>Agregar nuevo empleado</h2>
                <form
                    onSubmit={addNewEmployee}
                >
                    {
                        error && (
                            <Error 
                                message={errorMessage}
                            />
                        )
                    }
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
