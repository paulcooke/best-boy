import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import ScoresContext from '../../contexts/ScoresContext'
import { Wrapper, Title, Paragraph, Button, VsSection } from '../../styles/commonStyles'

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
  border: ${(props) => props.solved ? 'none' : props.toggled ? '1px solid #61f26f' : '1px solid white'}};
  box-shadow: ${(props) => props.toggled ? '0 0 0 2px #61f26f' : ''};
  background-color: ${(props) => props.solved ? 'white' : ''}
`
const AnswerParagraph = styled(Paragraph)`
  color: ${(props) => props.color}; 
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
  const remoteSetScores = useContext(ScoresContext).setScores

  const [images, setImages] = useState([
    { url: 'url("assets/superman-and-superboy.jpeg")',  answer: [3, 7, 10, 11, 13, 14, 15],  solved: false },
    { url: 'url("assets/team-athens.jpg")',             answer: [2, 3, 6, 7, 10, 11, 14],    solved: false },
    { url: 'url("assets/family1.jpg")',                 answer: [0, 1, 4, 8, 12, 13],        solved: false },
    { url: 'url("assets/elves.jpg")',                   answer: [0, 1, 4, 5, 8, 9, 12, 13],  solved: false },
    { url: 'url("assets/dad-n-boys.jpg")',              answer: [1, 4, 5, 8, 9, 12, 13],     solved: false },
    { url: 'url("assets/moustaches.jpg")',              answer: [0, 1, 4, 5, 8, 9, 12, 13],  solved: false },
    { url: 'url("assets/christmas.jpg")',               answer: [0, 4, 5, 8, 9, 12, 13],     solved: false }
  ])

  const [chosenImage, setChosenImage] = useState(images[0].url)
  const [thisImage, setThisImage] = useState(images[0])
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
    const idx = Math.floor(Math.random() * images.length)
    console.log('image index =', idx)
    if (chosenImage !== images[idx].url) {
      setChosenImage(images[idx].url)
      setToggled([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
      setCurrentGuess([])
      setThisImage(images[idx])
      setSubmitResult('...or submit when ready!')
      setAnswerColor('black')
      thisImage.solved = false
    } else {
      shuffle()
    }
    console.log('current guess on shuffle', currentGuess)
  }

  const reset = () => {
    setToggled([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    setCurrentGuess([])
    setSubmitResult('...or submit when ready!')
    setAnswerColor('black')
    thisImage.solved = false
  }

  const setCompare = (setOne, setTwo) => {
    return setOne.size === setTwo.size && [...setOne].every(y => setTwo.has(y))
  }

  const answerCheck = () => {
    const guess = new Set(currentGuess.sort((a,b) => a - b))
    console.log(thisImage.answer)
    // console.log('guess', guess)
    const imageMatches = setCompare(new Set(thisImage.answer), guess)
    if (imageMatches) {
      setSubmitResult('Best boy found!')
      setAnswerColor('green')
      remoteSetScores('paul')
    } else {
      setSubmitResult('Error: best boy not found')
      setAnswerColor('red')
    } 
    if (imageMatches && !thisImage.solved) thisImage.solved = !thisImage.solved
    // console.log("are we solved?", thisImage)
    console.log('current guess on submit', guess)
  }

  console.log(ScoresContext)

  return (
    <ScoresContext.Consumer>
      {value => (
        <Wrapper>
          <Title>BATTLE ONE!!!</Title>

          <Paragraph>Select all squares containing a best boy:</Paragraph>

          <VsSection>
            <Paragraph>Paul: {(JSON.parse(localStorage.getItem('currentScores')) && JSON.parse(localStorage.getItem('currentScores')).paul) || value.scores.paul}</Paragraph>
            <Paragraph>Mark: {(JSON.parse(localStorage.getItem('currentScores')) && JSON.parse(localStorage.getItem('currentScores')).mark) || value.scores.mark}</Paragraph>
          </VsSection>

          <ImageGrid background={chosenImage}>
            {
              toggled.map((square, i) => (
                <ImageSquare 
                  key={i}
                  id={i}
                  toggled={toggled[i]}
                  onClick={toggle}
                  solved={thisImage.solved && !currentGuess.includes(i)}
                />
              ))
            }
          </ImageGrid>
          <br/>
          <SideBySideButtons>
            <Button onClick={shuffle}>Shuffle</Button>
            <Button onClick={reset}>Clear</Button>
          </SideBySideButtons>
          
          <AnswerParagraph color={answerColor}>{submitResult}</AnswerParagraph>
          <Button onClick={answerCheck}>Submit</Button>

        </Wrapper>
      )}
    </ScoresContext.Consumer>
  )
}

export default BattleOne