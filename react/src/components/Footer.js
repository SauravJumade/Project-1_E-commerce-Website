import { Call, Email, Facebook, Instagram, Map, WhatsApp } from '@material-ui/icons'
import { Google } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import{mobile} from '../Responsive'

const Container = styled.div`
    display: flex ;
    background-color: #F7E9D7;
    height: fit-content;
    ${mobile({
        flexDirection: 'column',
    })}
        
    
`
const Left = styled.div`
    flex: 1;
    padding-top: 20px;
    padding-left: 40px;
    ${mobile({
        paddingLeft: "20px",
    })}
    
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcons = styled.a`
    text-decoration: none;
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${props=> props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 0px 4px #${props=> props.color});
    }

`
const Center = styled.div`
    flex: 1;
    padding: 40px;

    ${mobile({
        marginTop: "20px",
    })}
`
const Title = styled.h3`
    margin-bottom: 20px;
    
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContectItem = styled.p`
    margin-bottom: 20px;
    display: flex;
    

`


function Footer() {
  return (
    <Container>
        
        <Left>
            <Logo>ROYAL CLOTHINGS</Logo>
            <Description>
                Follow us to get the latest updates on sales,New releases and more...
            </Description>
            <br></br>
            <Title>FOLLOW US</Title>
            <SocialContainer>
                <SocialIcons color='3b5998' href='https://www.facebook.com/' target="_blank">
                    <Facebook/>
                </SocialIcons>
                <SocialIcons color='bc2a8d' href='https://www.instagram.com/' target="_blank">
                    <Instagram />
                </SocialIcons>
                <SocialIcons color='075e54' href='https://www.whatsapp.com/' target="_blank">
                    <WhatsApp />
                </SocialIcons>
                <SocialIcons color='4885ed' href='https://www.google.com/' target="_blank">
                    <Google />
                </SocialIcons>
            </SocialContainer>
        </Left>
        <Center>
            <Title>TOP CATEGORIES</Title>
            <List>
                <ListItem>Men Clothes</ListItem>
                <ListItem>Women Clothes</ListItem>
                <ListItem>Crocs</ListItem>
                <ListItem>Shoes</ListItem>
                <ListItem>Sneakers</ListItem>
                <ListItem>Flip Flops</ListItem>
            </List>
        </Center>
        <Center>
        <Title>SUPPORT</Title>
            <List>
                <ListItem>Delivery</ListItem>
                <ListItem>FAQ's</ListItem>
                <ListItem>Shipping</ListItem>
                <ListItem>Feedback</ListItem>
                <ListItem>Order Status</ListItem>
            </List>
            </Center>
        <Right>
        <Title>CONTACT US</Title>
            <ContectItem>
                <Map/> Street:  Shop No 24 Royal clothings,Near Good Luck Cafe, Sector 17, FC Road<br/>City:   Pune<br/>State/province/area:    Maharashtra<br/>Zip code  400703<br/>Country  India
            </ContectItem> 
            <ContectItem>
                <Call/>+91 02256103968
            </ContectItem> 
            <ContectItem>
                <Email/> royalclothings1@gmail.com
            </ContectItem> 
        </Right>
    </Container>
  )
}

export default Footer