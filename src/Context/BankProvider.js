import React, { createContext, useState, useEffect } from 'react';

export const BankContext = createContext();

const BankProvider = props => {


    const [ banks, setBanks ] = useState([])
    const [ error, setError ] = useState([])

    useEffect(() => {
        getBanks()
    }, [])

    console.log(banks)
    
    const getBanks = async() => {
        try {
            const data = await fetch('https://tryouts-cumplo.herokuapp.com/banks/');
            const bankData = await data.json()
            setBanks(bankData)
        } catch (error) {
            if(error){
                setError(error)
                console.log(error)
            }
        }
    }
    return (
        <BankContext.Provider
            value={{
                banks,
                error
            }}
        >
                {props.children}
        </BankContext.Provider>
    )
}

export default BankProvider
