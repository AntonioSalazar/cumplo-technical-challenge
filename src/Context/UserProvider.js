import React, { createContext } from 'react'

export const UserContext = createContext();

const UserProvider = props => {
    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
