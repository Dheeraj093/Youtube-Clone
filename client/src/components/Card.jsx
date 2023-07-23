import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import image from '../img/image.png'
import title from '../img/title.png'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
// import {format} from 'timeago.js'

const Container = styled.div`
  width:350px;
  margin-bottom:45px;
  cursor:pointer;
`
const Image = styled.img`
  width:100%;
  height:202px;
  background-color:#999;
`
const Details = styled.div`
  display:flex;
  margin-top:16px;
  gap:12px;
`

const ChannelImage = styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color:#999;
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

const Card = ({type,video}) => {

  const [channel, setChannel] = useState({});
  
  useEffect(()=>{
       const fetchChannel = async()=>{
         try {
             const res = await axios.get(`http://localhost:8800/api/users/find/${video.userId}`);
             setChannel(res.data)
         } catch (err) {
            
         }
       }
       fetchChannel();

  },[video.userId])

  return (
    <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
    <Container>
        <Image type={type} src={video.imgUrl}/>
        <Details type={type} >
           <ChannelImage type={type} src={channel.img} />
           <Texts>
              <Title>{video.title}</Title>
              <ChannelName>{channel.name}</ChannelName>
              <Info >{video.views} views  1 day ago </Info>
           </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card