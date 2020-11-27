import React, { createContext, useState, useEffect } from 'react';

export const BankContext = createContext();

const BankProvider = props => {


    const [ bank, setBank ] = useState([])
    const [ error, setError ] = useState([])

    useEffect(() => {
        try {
            
        } catch (error) {
            console.log(error)
            if (error) {
                setError(error)
            }
        }
    }, [])

    return (
        <BankContext.Provider
            value={{
                bank
            }}
        >
                {props.children}
        </BankContext.Provider>
    )
}

export default BankProvider
