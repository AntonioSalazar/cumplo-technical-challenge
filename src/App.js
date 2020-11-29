import React from 'react'

//Components
import Footer from './Components/Footer';
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import LatestArticles from './Components/LatestArticles';
import WhyUs from './Components/WhyUs';
import Banks from './Components/Banks';
import Branches from './Components/Branches';
import Employees from './Components/Employees';

//Routing
import {
  Switch,
  Route,
} from 'react-router-dom';

//Context Providers
import UserProvider from './Context/UserProvider';
import BankProvider from './Context/BankProvider';
import BranchesProvider from './Context/BranchesProvider';
import EmployeesProvider from './Context/EmployeesProvider';
import NewEmployee from './Components/NewEmployee';

const App = () => {
  return (
    <UserProvider>
      <BankProvider>
        <BranchesProvider>
        <EmployeesProvider>

          <Header />
          <main>
            <Switch>
              <Route path='/bancos'>
                <Banks />
              </Route>
              <Route path='/sucursales/empleados/:id/nuevo-empleado'>
                <NewEmployee />
              </Route>
              <Route path='/sucursales/empleados/:id'>
                <Employees />
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

        </EmployeesProvider>
        </BranchesProvider>
      </BankProvider>
    </UserProvider>
  )
}

export default App
