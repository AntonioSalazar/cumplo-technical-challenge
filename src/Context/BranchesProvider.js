import React, { createContext, useState, useEffect } from 'react';

export const BranchesContext = createContext();

const BranchesProvider = props => {


    const [ branches, setBranches ] = useState([])

    useEffect(() => {
        getBranches()
    }, [])

    const getBranches = async() => {
        try {
            const data = await fetch('https://tryouts-cumplo.herokuapp.com/branches/')
            const BranchesData = await data.json()
            setBranches(BranchesData.results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BranchesContext.Provider
            value={{
                branches
            }}
        >
            {props.children}
        </BranchesContext.Provider>
    )
}

export default BranchesProvider
