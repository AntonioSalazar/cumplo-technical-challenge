import React from 'react'
import Header from './Components/Header'
import UserProvider from './Context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Header />
    </UserProvider>
  )
}

export default App
