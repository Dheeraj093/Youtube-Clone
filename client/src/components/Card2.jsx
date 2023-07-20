import React from 'react'
import { styled } from 'styled-components'
import image from '../img/image.png'
import title from '../img/title.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin-bottom:10px;
  cursor:pointer;
  display:flex;
  gap:10px;
`
const Image = styled.img`
  width:100%;
  height:120px;
  background-color:#999;
  flex:1;
`
const Details = styled.div`
  display:flex;
  margin-top:16px;
  gap:12px;
  flex:1;
`

const ChannelImage = styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color:#999;
  display:none;
`

const Texts = styled.div``
const Title = styled.h1`
  font-size:16px;
  font-weight:500;
  color:${({theme})=>theme.text};
`
const ChannelName = styled.h2`
  font-size:14px;
  color:${({theme})=>theme.textSoft};
  margin:9px 0px;

`
const Info = styled.div`
  font-size:14px;
  color:${({theme})=>theme.textSoft};
  
`

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container >
        <Image src={image}/>
        <Details >
           <ChannelImage src={title} />
           <Texts>
              <Title>Test Video </Title>
              <ChannelName>Dheeraj</ChannelName>
              <Info >100000 views 1 day ago  </Info>
           </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card
