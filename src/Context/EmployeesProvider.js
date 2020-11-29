import React, { createContext, useState, useEffect } from 'react'

export const EmployeesContext = createContext()

const EmployeesProvider = props => {

    const [ id, setId ] = useState('')
    const [ sortOrder, setSortOrder ] = useState('')
    const [ employees, setEmployees ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);

    //paginacion
    const previousPage = () => {
        const newCurrentPage = currentPage - 1;
        if (newCurrentPage === 0) return
        setCurrentPage(newCurrentPage)
    }

    const nextPage = () => {
        const newCurrentPage = currentPage + 1;
        if(newCurrentPage > totalPages) return
        setCurrentPage(newCurrentPage)
    }


    useEffect(() => {
        getEmployees()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, sortOrder, currentPage])

    const getEmployees = async() => {
        try {
            const data = await fetch(`https://tryouts-cumplo.herokuapp.com/employees/?branch=${id}&ordering=${sortOrder}&page=${currentPage}`)
            const employeesData = await data.json()
            setEmployees(employeesData.results)
            const totalPages = Math.ceil(employeesData.count / 5)
            setTotalPages(totalPages)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <EmployeesContext.Provider
            value={{
                employees,
                currentPage,
                totalPages,
                setId,
                setSortOrder,
                previousPage,
                nextPage
            }}
        >
            {props.children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesProvider
