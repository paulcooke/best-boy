import { createContext } from 'react'

export default createContext({
  scores: {
    paul: 0,
    mark: 0
  },
  setScores: name => {},
  resetScores: () => {}
})