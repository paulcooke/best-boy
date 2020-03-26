import React, { createContext, useReducer } from 'react'

// const initialScores = {}
const ScoresContext = createContext()
// const { Provider } = ScoresContext



const ScoresContextProvider = ({ children }) => {

  const scores = {
    paul: 0,
    mark: 0, 
    setScore: () => {},
    reset: () => {}
  }

  return (
    <ScoresContext.Provider value={scores}>
      {children}
    </ScoresContext.Provider>
  )

}

export { ScoresContext, ScoresContextProvider }



// const [paulScore, setPaulScore] = localStorage.getItem('paulScore') ? useState(localStorage.getItem('paulScore')) : useState(0)
// const [markScore, setMarkScore] = localStorage.getItem('markScore') ? useState(localStorage.getItem('markScore')) : useState(0)

// // const scorePlusOne = ({ target: { value, name } }) => {
// //   if (name === 'paulScore') setPaulScore(parseInt(value) + 1)
// //   if (name === 'markScore') setMarkScore(parseInt(value) + 1)
// //   localStorage.setItem(name, parseInt(value) + 1)
// // }

// const scorePlusOne = () => {

// }

// const resetScores = () => {
//   setPaulScore(0)
//   setMarkScore(0)
//   localStorage.removeItem('paulScore')
//   localStorage.removeItem('markScore')
// }

// //value={ paulScore, markScore, scorePlusOne, resetScores }