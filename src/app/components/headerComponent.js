
import Image from "next/image"
import React from "react"
import logo from '../assets/logo.png'
import styled from 'styled-components'
import assetheader from '../assets/assetheader.png'


const LogoConteiner = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2px;
margin: 10px;
 `;

const FontHeader = styled.span`
color: #007dff;
font-size: 15px;
border: 2px solid  #007dff;
padding: 3px;
border-top-right-radius: 1.5em;
border-top-left-radius: 1.5em;
border-bottom-right-radius: 1.5em;
border-bottom-left-radius: 0.375em;
margin-left: auto;
margin-right: auto;
font-weight: 700;
`;

const BackgroundConteiner = styled.div`
background-color: #F9FCFF;
padding: 10px;
margin: 10px;
width: 100%;
padding: 40px 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Line = styled.hr`
border: 0,5px;
display: block;
width: 300px;
opacity: 0.5
`;

const Text = styled.p`
opacity: 1;
color: rgb(51 65 85/var(--tw-text-opacity));
font-size: 20px;
padding: 1px;
margin-bottom: 0;
`;

const BigText = styled.h1`
line-height: 0;
color: #007dff;
margin-top: 0px;
font-weight: 700;
`;

const StyledImage = styled.div`
float: left;
position: relative;
left: 121px;
`
export default function HeaderComponent() {

    return (
        <LogoConteiner>
            <Image
                src={logo}
                alt="logo leadstar"
            />
            <BackgroundConteiner>
                <div>
                    <FontHeader>Webinars Exclusivos</FontHeader>
                </div>
                <Text>Menos conversinha,</Text>
                <StyledImage>
                    <Image
                        src={assetheader}
                        alt="elemento header"
                        height={20}
                    />
                </StyledImage>
                <BigText>Mais conversão</BigText>
                <Line />
                <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
            </BackgroundConteiner>
        </LogoConteiner>
    )
}