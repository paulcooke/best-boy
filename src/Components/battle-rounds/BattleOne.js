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
  border: 1px solid white;
`

const BattleOne = () => {
  const [gridList, setGridList] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]) 
  const [correctAnswer, setCorrectAnswer] = useState([3, 7, 10, 11, 13, 14, 15])

  return (
    <Wrapper>
      <Title>BATTLE ONE!!!</Title>

      <Paragraph>Select all squares containing a best boy:</Paragraph>
      <ImageGrid>
        {
          gridList.map((square, i) => (
            <ImageSquare 
              key={i}
              id={i}
            />
          ))
        }
      </ImageGrid>
      

    </Wrapper>
  )
}

export default BattleOne