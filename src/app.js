import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

import Home from './Components/common/Home'
import BattleOne from './Components/battle-rounds/BattleOne'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    font-family: 'Press Start 2P', cursive;
  }
`

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