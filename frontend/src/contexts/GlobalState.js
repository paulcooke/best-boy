import React, { useState, useReducer } from 'react'

import ScoresContext from './ScoresContext'
import { scoresReducer, SET_SCORE, RESET_SCORES } from './reducers'

const GlobalState = props => {
  // const scores = 

  const [scoresState, dispatch] = useReducer(scoresReducer, { scores: { paul: 0, mark: 0 } })

  const setScores = name => {
    dispatch({ type: SET_SCORE, name: name })
  }

  const resetScores = () => {
    dispatch({ type: RESET_SCORES })
  }

  console.log('state on render!', scoresState)

  return (

    <ScoresContext.Provider
      value={
        {
          scores: scoresState.scores,
          setScores,
          resetScores
        }
      }
    >
      {props.children}
    </ScoresContext.Provider>
  )
}

export default GlobalState