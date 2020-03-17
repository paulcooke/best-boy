import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

import Home from '../src/components/common/Home'
import BestTests from './components/best-boy-tests/best-tests'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Press Start 2P', cursive;
  }
` 

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/best-tests" component={BestTests} />
        </Switch>
      </BrowserRouter>
    </>
  );
}



export default App
