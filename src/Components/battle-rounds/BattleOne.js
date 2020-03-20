import React, { useState } from 'react'
import styled from 'styled-components'

import { Wrapper, Title, Paragraph, Button } from '../../styles/commonStyles'
// use props to randomise image? make the props the url, use an array and random with a button
const ImageGrid = styled.div`
  width: 340px;
  height: 340px;
  background-image: url("assets/superman-and-superboy.jpeg");
  background-size: cover;
  margin-top: 20px;
  display: flex;
  flex-flow: wrap;
`

const ImageSquare = styled.div`
  flex: 0 0 25%;
  border: ${(props) => props.toggled ? '1px solid #61f26f' : '1px solid white'};
  box-shadow: ${(props) => props.toggled ? '0 0 0 4px #61f26f' : ''};
`

const BattleOne = () => {
  // const [gridList, setGridList] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) 
  const [correctAnswer, setCorrectAnswer] = useState([3, 7, 10, 11, 13, 14, 15])
  const [toggled, setToggled] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

  const toggle = ({ target: { id } }) => {
    console.log(id)
    const newToggled = [ ...toggled ]
    newToggled[id] = !newToggled[id]
    setToggled(newToggled)
    console.log(newToggled)
  }

  return (
    <Wrapper>
      <Title>BATTLE ONE!!!</Title>

      <Paragraph>Select all squares containing a best boy:</Paragraph>
      <ImageGrid>
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
      

    </Wrapper>
  )
}

export default BattleOne