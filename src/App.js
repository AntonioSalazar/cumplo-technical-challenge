import React from 'react'
import Footer from './Components/Footer';
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
      <Footer />
    </UserProvider>
  )
}

export default App
