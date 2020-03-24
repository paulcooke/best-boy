import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: white; 
    min-height: 100vh;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    max-width: 600px;
  `

const Title = styled.h3`
  color: #282c34;
  text-align: center;
  padding: 0 2px;
`

const Paragraph = styled.p`
  color: #282c34;
  text-align: center;
  padding: 0 2px;
  font-size: small;
`

const ImageBox = styled.div`
  max-height: 200px;
  max-width: 200px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  font-size: small;
  background-color: orange;
  padding: 6px;
`

export {
  Wrapper,
  Title,
  Paragraph,
  ImageBox,
  Image,
  Button
}