import React, { useState } from 'react'
import styled from 'styled-components'

import { Wrapper, Title, Paragraph, Button } from '../../styles/commonStyles'
// use props to randomise image? make the props the url, use an array and random with a button
const ImageGrid = styled.div`
  width: 340px;
  height: 340px;
  background-image: ${(props) => props.background};
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

const AnswerParagraph = styled(Paragraph)`
  color: ${(props) => props.color}
`

const SideBySideButtons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
`

// Main function for the component
const BattleOne = () => {

  const [images, setImages] = useState([
    { url: 'url("assets/superman-and-superboy.jpeg")',  answer: [3, 7, 10, 11, 13, 14, 15],  solved: false },
    { url: 'url("assets/team-athens.jpg")',             answer: [2, 3, 6, 7, 10, 11, 14],    solved: false },
    { url: 'url("assets/family1.jpg")',                 answer: [0, 1, 4, 8, 12, 13],        solved: false },
    { url: 'url("assets/elves.jpg")',                   answer: [0, 1, 4, 5, 8, 9, 12, 13], solved: false },
    { url: 'url("assets/dad-n-boys.jpg")',              answer: [1, 4, 5, 8, 9, 12, 13],    solved: false },
    { url: 'url("assets/moustaches.jpg")',              answer: [0, 1, 4, 5, 8, 9, 12, 13], solved: false },
    { url: 'url("assets/christmas.jpg")',               answer: [0, 4, 5, 8, 9, 12, 13],    solved: false }
  ])

  const [chosenImage, setChosenImage] = useState(images[0].url)
  const [submitResult, setSubmitResult] = useState('...or submit when ready!')
  const [answerColor, setAnswerColor] = useState('black')

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
    if (chosenImage !== images[idx].url) {
      setChosenImage(images[idx].url)
    } else {
      shuffle()
    }
    setToggled([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    setCurrentGuess([])
  }

  const reset = () => {
    setToggled([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    setCurrentGuess([])
  }

  const setCompare = (setOne, setTwo) => {
    return setOne.size === setTwo.size && [...setOne].every(y => setTwo.has(y))
  }

  const answerCheck = () => {
    const guess = new Set(currentGuess)
    // console.log('guess', guess)
    const thisImage = images.find(x => setCompare(new Set(x.answer), guess))
    if (thisImage) {
      setSubmitResult('Best boy found!')
      setAnswerColor('green')
    } else {
      setSubmitResult('Error: best boy not found')
      setAnswerColor('red')
    } 
    if (thisImage && !thisImage.solved) thisImage.solved = !thisImage.solved
    // console.log("are we solved?", thisImage)
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
      <SideBySideButtons>
        <Button onClick={shuffle}>Shuffle image</Button>
        <Button onClick={reset}>Reset image</Button>
      </SideBySideButtons>
      
      <AnswerParagraph color={answerColor}>{submitResult}</AnswerParagraph>
      <Button onClick={answerCheck}>Submit</Button>

    </Wrapper>
  )
}

export default BattleOne