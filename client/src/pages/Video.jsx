import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import title from '../img/title.png'
import Comments from '../components/Comments';
import  Card2  from '../components/Card2';
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display:flex;
  gap:24px;
`

const Content = styled.div`
  flex:5;
`
const VideoWrapper=styled.div``

const Title=styled.h1`
  font-size:18px;
  font-weight:400;
  margin-top:20px;
  margin-bottom:10px;
  color:${({theme})=>theme.text}
`

const Details = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const Info = styled.span`
    color:${({theme})=>theme.textSoft}
`

const Buttons = styled.div`
  display:flex;
  gap:20px;
  color:${({theme})=>theme.text}
`
const Button = styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  cursor:pointer;
`
const Hr = styled.hr`
  margin:15px 0px;
  border:0.5px solid ${({theme})=>theme.soft}
`


const Recommendation = styled.div`
  flex:2;
`

const Channel = styled.div`
   display:flex;
   justify-content:space-between;
`

const ChannelInfo = styled.div`
  display:flex;
  gap:20px;
`


const Image = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
`


const ChannelDetails = styled.div`
  display:flex;
  flex-direction:column;
  color:${({theme})=>theme.text};
`


const ChannelName = styled.span`
  font-weight:500;
`


const ChannelCounter = styled.span`
  margin-top:5px;
  margin-bottom:20px;
  color:${({theme})=>theme.textSoft};
  font-size:12px;
`


const Description = styled.p`
  font-size:14px;
`


const Subscribe = styled.button`
 background-color:#cc1a00;
  font-weight:500;
  color:white;
  border:none;
  border-radius:3px;
  height:max-content;
  padding:10px 20px;
  cursor:pointer;
`


const Video = () => {
  const {currentUser} = useSelector((state)=>state.user);

  const dispatch = useDispatch();

  const path =useLocation().pathname.split("/")[2];

  const [video, setVideo] = useState({})
  const [channel, setChannel] = useState({})
  
  useEffect(() => {
     const fetchData = async()=>{
       try {
          const videoRes = await axios.get(`http://localhost:8800/api/videos/find/${path}`)
          const channelRes = await axios.get(`http://localhost:8800/api/users/find/${videoRes.userId}`)

          setVideo(videoRes.data)
          setChannel(channelRes.data)
       } catch (err) {
        
       }
     }
     fetchData();
  }, [path])
  

  return (
    <Container>
       <Content>
          <VideoWrapper>
             <iframe
                width="100%"
                height="420"
                src='https://www.youtube.com/embed/_DAQhscgIHE'
                title="Youtube Video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
             ></iframe>
          </VideoWrapper>
          <Title>Test Video</Title>
          <Details>
            <Info>90000 views  Jun 22 2022</Info>
            <Buttons>
               <Button><ThumbUpIcon/>123</Button>
               <Button><ThumbDownIcon/>Dislike</Button>
               <Button><ReplyIcon/>Share</Button>
               <Button><AddToPhotosIcon/>Save</Button>
            </Buttons>
          </Details>
          <Hr/>
          <Channel>
            <ChannelInfo>
               <Image src={title} />
               <ChannelDetails>
                 <ChannelName>Dheeraj</ChannelName>
                 <ChannelCounter>200k Subscribers</ChannelCounter>
                 <Description>  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim </Description>
               </ChannelDetails>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr />
          <Comments />
       </Content>
       <Recommendation>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
       </Recommendation>
    </Container>
  )
}

export default Video