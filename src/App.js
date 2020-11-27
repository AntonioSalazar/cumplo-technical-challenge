import React from 'react'

//Components
import Footer from './Components/Footer';
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import LatestArticles from './Components/LatestArticles';
import WhyUs from './Components/WhyUs';

//Routing
import {
  Switch,
  Route,
} from 'react-router-dom';

//Context Providers
import UserProvider from './Context/UserProvider';
import BankProvider from './Context/BankProvider';

const App = () => {
  return (
    <UserProvider>
      <BankProvider>
      <Header />
      <main>
        <Switch>
          <Route path='/bancos'>
            Bancos
          </Route>
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
      </BankProvider>
    </UserProvider>
  )
}

export default App
