import React, { createContext, useState, useEffect } from 'react'

export const EmployeesContext = createContext()

const EmployeesProvider = props => {

    const [ id, setId ] = useState('')
    const [ sortOrder, setSortOrder ] = useState('')
    const [ employees, setEmployees ] = useState([]);


    useEffect(() => {
        getEmployees()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, sortOrder])

    const getEmployees = async() => {
        try {
            const data = await fetch(`https://tryouts-cumplo.herokuapp.com/employees/?branch=${id}&ordering=${sortOrder}`)
            const employeesData = await data.json()
            setEmployees(employeesData.results)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <EmployeesContext.Provider
            value={{
                employees,
                setId,
                setSortOrder
            }}
        >
            {props.children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesProvider
