import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import LatestArticles from './Components/LatestArticles';
import WhyUs from './Components/WhyUs';
import UserProvider from './Context/UserProvider';
import {
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <UserProvider>
      <Header />
      <main>
        <Switch>
          <Route path='/sucursales'>
            Sucursales
          </Route>
          <Route path='/nosotros'>
            nosotros meros
          </Route>
          <Route path='/'>
            <Introduction />
            <WhyUs />
            <LatestArticles />
          </Route>
        </Switch>
      </main>
      <Footer />
    </UserProvider>
  )
}

export default App
