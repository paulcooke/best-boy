import React, { useState } from 'react'
import styled from 'styled-components'

import { Wrapper, Title, Paragraph, Button } from '../../styles/commonStyles'
// use props to randomise image? make the props the url, use an array and random with a button
const ImageGrid = styled.div`
  width: 340px;
  height: 340px;
  background-image: ${(props)=> props.background};
  background-size: cover;
  margin-top: 20px;
  display: flex;
  flex-flow: wrap;
`

const ImageSquare = styled.div`
  flex: 0 0 25%;
  border: ${(props) => props.toggled ? '1px solid #61f26f' : '1px solid white'};
  box-shadow: ${(props) => props.toggled ? '0 0 0 2px #61f26f' : ''};
`

// Main function for the component
const BattleOne = () => {
  const [images, setImages] = useState([ 
    'url("assets/superman-and-superboy.jpeg")',
    'url("assets/team-athens.jpg")',
    'url("assets/family1.jpg")',
    'url("assets/elves.jpg")',
    'url("assets/dad-n-boys.jpg")',
    'url("assets/moustaches.jpg")',
    'url("assets/christmas.jpg")'
  ])
  const [chosenImage, setChosenImage] = useState(images[0])

  const [imageAnswers, setImageAnswers] = useState([
    [3, 7, 10, 11, 13, 14, 15],
    [3, 4, 7, 8, 11, 12, 15],
    [1, 2, 5, 9, 13, 14],
    [1, 2, 5, 6, 9, 10, 13, 14],
    [2, 5, 6, 9, 10, 13, 14],
    [1, 2, 5, 6, 9, 10, 13, 14],
    [1, 4, 6, 9, 10, 13, 14]
  ])

  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)

  const [currentGuess, setCurrentGuess] = useState([])
  const [toggled, setToggled] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

  const toggle = ({ target: { id } }) => {
    const newToggled = [ ...toggled ]
    newToggled[id] = !newToggled[id]
    setToggled(newToggled)   
    makeCurrentGuess(id)
  }

  //**** one step behind unhighlights and adds to current guess
  const makeCurrentGuess = (cell) => {
    if (!currentGuess.includes(parseInt(cell))) setCurrentGuess([ ...currentGuess, parseInt(cell)])
    if (currentGuess.includes(parseInt(cell))) {
      const copyCurrentGuess = [...currentGuess]
      copyCurrentGuess.splice(copyCurrentGuess.indexOf(parseInt(cell)), 1)
      setCurrentGuess(copyCurrentGuess)
    }
  }

  const shuffle = () => {
    console.log(images.length)
    const idx = Math.floor(Math.random() * images.length)
    console.log(idx)
    if (chosenImage !== images[idx]) {
      setChosenImage(images[idx])
    } else {
      shuffle()
    }
    setToggled([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    setCurrentGuess([])
  }

  const answerCheck = () => {
    // for comparing current guess with the answer on submit
  }

  return (
    <Wrapper>
      <Title>BATTLE ONE!!!</Title>

      <Paragraph>Select all squares containing a best boy:</Paragraph>
      <ImageGrid background={chosenImage}>
        {
          toggled.map((square, i) => (
            <ImageSquare 
              key={i}
              id={i}
              toggled={toggled[i]}
              onClick={toggle}
            />
          ))
        }
      </ImageGrid>
      <br/>
      <Button onClick={shuffle}>Shuffle image</Button>
      <Paragraph>...or submit when ready!</Paragraph>
      <Button>Submit</Button>

    </Wrapper>
  )
}

export default BattleOne