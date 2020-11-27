import React, { createContext, useState, useEffect } from 'react';

export const BankContext = createContext();

const BankProvider = props => {


    const [ bank, setBank ] = useState([])
    const [ error, setError ] = useState([])

    useEffect(() => {
        getBanks()
    }, [])

    
    const getBanks = async() => {
        try {
            const data = await fetch('https://tryouts-cumplo.herokuapp.com/banks/');
            const bankData = await data.json()
            setBank(bankData)
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
                bank,
                error
            }}
        >
                {props.children}
        </BankContext.Provider>
    )
}

export default BankProvider
