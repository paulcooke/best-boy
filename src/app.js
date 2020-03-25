import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/globalStyles'
import ScoresContextProvider from './contexts/ScoresContext'

import Home from './Components/common/Home'
import BattleOne from './Components/battle-rounds/BattleOne'



const App = () => {
  return (
    <>
      
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle-one" component={BattleOne} />
          </Switch>
        </BrowserRouter>
      
    </>
  )
}



ReactDom.render(
  <App />,
  document.getElementById('root')
)