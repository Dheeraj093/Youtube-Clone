import React from 'react'
import { styled } from 'styled-components'
import title from '../img/title.png'

const Container = styled.div`
    display:flex;
    gap:10px;
    margin:30px 0px;
`
const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`

const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    color:${({theme})=>theme.text}
`

const Name = styled.span`
    font-size:13px;
    font-weight:500;
`
const Date = styled.span`
    font-size:12px;
    font-weight:400;
    color:${({theme})=>theme.textSoft}
    margin-left:5px;
`
const Text = styled.span`
    font-size:14px;
`

const Comment = () => {
  return (
    <Container>
        <Avatar src={title} />
        <Details >
            <Name>Hardik <Date>1 day ago</Date> </Name>
            <Text> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim</Text>
        </Details>
    </Container>
  )
}

export default Comment