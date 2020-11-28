import React from 'react'

//Components
import Footer from './Components/Footer';
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import LatestArticles from './Components/LatestArticles';
import WhyUs from './Components/WhyUs';
import Banks from './Components/Banks';

//Routing
import {
  Switch,
  Route,
} from 'react-router-dom';

//Context Providers
import UserProvider from './Context/UserProvider';
import BankProvider from './Context/BankProvider';
import BranchesProvider from './Context/BranchesProvider';
import Branches from './Components/Branches';

const App = () => {
  return (
    <UserProvider>
      <BankProvider>
        <BranchesProvider>
          <Header />
          <main>
            <Switch>
              <Route path='/bancos'>
                <Banks />
              </Route>
              <Route path='/sucursales/:id'>
                <Branches />
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
        </BranchesProvider>
      </BankProvider>
    </UserProvider>
  )
}

export default App
