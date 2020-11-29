import React, { createContext, useState, useEffect } from 'react'

export const EmployeesContext = createContext()

const EmployeesProvider = props => {

    const [ id, setId ] = useState('')
    const [ employees, setEmployees ] = useState([]);


    useEffect(() => {
        getEmployees()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const getEmployees = async() => {
        try {
            const data = await fetch(`https://tryouts-cumplo.herokuapp.com/employees/?branch=${id}`)
            const employeesData = await data.json()
            setEmployees(employeesData.results)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(employees)

    return (
        <EmployeesContext.Provider
            value={{
                employees,
                setId
            }}
        >
            {props.children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesProvider
