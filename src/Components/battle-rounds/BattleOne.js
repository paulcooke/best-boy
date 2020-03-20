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

const BattleOne = () => {
  const [images, setImages] = useState({ 
    imageOne: 'url("assets/superman-and-superboy.jpeg")',
    imageTwo: 'url("assets/team-athens.jpg")',
    imageThree: 'url("assets/family1.jpg")'
  })
  const [chosenImage, setChosenImage] = useState(images.imageThree)

  const [imageOneAnswer, setImageOneAnswer] = useState([3, 7, 10, 11, 13, 14, 15])
  
  const [toggled, setToggled] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

  const toggle = ({ target: { id } }) => {
    const newToggled = [ ...toggled ]
    newToggled[id] = !newToggled[id]
    setToggled(newToggled)
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
      <Button>Shuffle image</Button>
      <Button>Submit</Button>

    </Wrapper>
  )
}

export default BattleOne