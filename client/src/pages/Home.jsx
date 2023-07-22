import axios from 'axios'
import Card  from '../components/Card'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`

const Home = ({type}) => {
  
  const [videos, setVideos] = useState([])

  useEffect(() => {
      const fetchVideos = async () =>{
        try {
            const res = await axios.get(`http://localhost:8800/api/videos/${type}`)
            setVideos(res.data)
        } catch (err) {
            // next(err)
            console.log("hloooooooooooooooooooooo ")
        }
         
      }
      fetchVideos()
  }, [type])
  

  return (
    <Container>
       {videos.map((video)=>(
        <Card key={video._id} video={video} />
       ))}
       
    </Container>
  )
}

export default Home



        // try {
           
        //     const { data } = await axios.post(
        //         "http://localhost:5000/api/user/login",
        //         { email, password },
        //         config
        //     );

           
        //     localStorage.setItem("userInfo", JSON.stringify(data));
        //     setLoading(false);
        //     history("/chats");
        // } catch (error) {
            
        // }