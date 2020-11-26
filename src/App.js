import React from 'react'
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import LatestArticles from './Components/LatestArticles';
import WhyUs from './Components/WhyUs';
import UserProvider from './Context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Header />
      <main>
        <Introduction />
        <WhyUs />
        <LatestArticles />
      </main>
    </UserProvider>
  )
}

export default App
