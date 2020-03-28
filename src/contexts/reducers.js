// import ScoresContext from "./ScoresContext"

export const SET_SCORE = 'SET_SCORE'
export const RESET_SCORES = 'RESET_SCORES'

const setScores = (name, state) => {
  console.log('setScores called, name:', name)
  console.log('state scores', state.scores)
  const currentScores = { ...state.scores } || JSON.parse(localStorage.getItem('currentScores'))
  // console.log('logging current scores', currentScores[name])
  
  if (!currentScores[name]) {
    currentScores[name] = 1
    
  } else {
    currentScores[name] = currentScores[name] + 1
  }

  localStorage.setItem('currentScores', JSON.stringify(currentScores))
  return { ...state, scores: currentScores }
}

const resetScores = (state) => {
  console.log('resetScores called')
  let resetScores = { ...state.scores }
  resetScores = { 
    paul: 0,
    mark: 0 
  }
  localStorage.removeItem('currentScores')
  return { ...state, scores: resetScores }
}

export const scoresReducer = (state, action) => {
  switch (action.type) {
    case SET_SCORE:
      return setScores(action.name, state)
    case RESET_SCORES: 
      return resetScores(state)
    default: 
      return state
  }
}
