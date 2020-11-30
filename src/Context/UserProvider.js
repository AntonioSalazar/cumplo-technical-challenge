import React, { createContext, useState, useEffect } from 'react';
import { auth, provider } from '../firebase'

export const UserContext = createContext();

const UserProvider = props => {

    const dataUser = {
        uid: null,
        email: null,
        state: null
    }
    const [ user, setUser ] = useState(dataUser);
    const [ error, setError ]= useState('') 

    useEffect(() => {
        detectUser()
    }, [])

    const detectUser = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.uid,
                    state: true
                })
            } else {
                setUser({
                    uid: null,
                    email: null,
                    state: false
                })
            }
        })
    }

    const loginUser = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            setError(error)
        }
    }

    const logoutUser = () => {
        auth.signOut()
    }

    return (
        <UserContext.Provider
            value={{
                user,
                loginUser,
                logoutUser,
                error
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
