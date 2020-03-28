import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/globalStyles'
import GlobalState from './contexts/GlobalState'


import Home from './Components/common/Home'
import BattleOne from './Components/battle-rounds/BattleOne'



const App = () => {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle-one" component={BattleOne} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </>
  )
}



ReactDom.render(
  <App />,
  document.getElementById('root')
)