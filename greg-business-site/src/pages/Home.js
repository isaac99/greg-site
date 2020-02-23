import React, { Component } from 'react';
import styled from 'styled-components';
import { 
    Button, 
    List, 
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    InboxIcon,
    MailIcon,
    Drawer,
    IconButton,
    Card,
    CardMedia,
    Typography,
    Paper
  } from '@material-ui/core';
  import GregImage from '../resources/images/greg.jpg';
  import LabImage from '../resources/images/lab.jpg';
  import ZurichImage from '../resources/images/zurich.jpg';
  import CollegeImage from '../resources/images/college.jpg';



class Home extends Component {
  render() {
    return (
        <HomeContainer>
            <CTAArea>

            </CTAArea>
            <AnimationArea>
                <AnimationContainer>
                    <div style={{'height':'65%', 'display':'flex', 'flex-direction':'row'}}>
                        <TopLeftAnimation>
                            <CurvedLine style={{'--animation-order':'0'}} />
                            <CurvedLine style={{'--animation-order':'1'}} />
                            <CurvedLine style={{'--animation-order':'2'}} />
                            <CurvedLine style={{'--animation-order':'3'}} />
                            <CurvedLine style={{'--animation-order':'4'}} />
                            <CurvedLine style={{'--animation-order':'5'}} />
                            <CurvedLineRed style={{'--animation-order':'6'}} />
                            <CurvedLineRed style={{'--animation-order':'7'}} />
                            <CurvedLine style={{'--animation-order':'8'}} />
                            <CurvedLine style={{'--animation-order':'9'}} />
                            <CurvedLine style={{'--animation-order':'10'}} />
                            <CurvedLine style={{'--animation-order':'11'}} />
                        </TopLeftAnimation>
                        <TopRightAnimation>
                            <DiagonalLine2 style={{'--animation-order':'0'}} />
                            <DiagonalLine2 style={{'--animation-order':'1'}} />
                            <DiagonalLine2 style={{'--animation-order':'2'}} />
                            <DiagonalLine2 style={{'--animation-order':'3'}} />
                            <DiagonalLine2 style={{'--animation-order':'4'}} />
                            <DiagonalLine2 style={{'--animation-order':'5'}} />
                            <DiagonalLine2 style={{'--animation-order':'6'}} />
                            <DiagonalLine2 style={{'--animation-order':'7'}} />
                            <DiagonalLine2 style={{'--animation-order':'8'}} />
                            <DiagonalLine2 style={{'--animation-order':'9'}} />
                            <DiagonalLine2 style={{'--animation-order':'10'}} />
                            <DiagonalLineRed2 style={{'--animation-order':'11'}} />
                            <DiagonalLine2 style={{'--animation-order':'12'}} />
                            <DiagonalLineRed2 style={{'--animation-order':'13'}} />
                            <DiagonalLineRed2 style={{'--animation-order':'14'}} />
                        </TopRightAnimation>
                    </div>
                    <BottomAnimation>
                        <ZigZag />
                    </BottomAnimation>
                </AnimationContainer>
            </AnimationArea>
        </HomeContainer>
    );
  }
}

const HomeContainer = styled(Paper)`
    display:flex;
    flex-direction: row;
    // flex-direction:row;
    // flex-wrap: wrap;
    height: 100%;
`;

const HomeRow = styled.div`
    display:flex;
    flex-direction:row;
    // display: flex;
    // flex-wrap: wrap;
    // padding: 0 4px;
    height: 50%;
    // width: 100%;
`;

const CardMediaContainer = styled(CardMedia)`
    width: 100%;
    // height: auto;
    height:100%;
    // width: 100%;
    // corner-radius: none;
`;

const ImageContainer = styled.img`
    height:100%;
    // width: 100%;
    // height:100%;
    width:100%;
`;
 const HomeCard = styled(Card)`
    height: 100%;
    width: 100%;
 `;

 const CTAArea = styled.div`
    flex-basis: 60%;
    background-color: #fff9ea;
    // height: 100%;
    width: 100%;

 `;

 const AnimationArea = styled.div`
    background-color: #eafff9;
    flex-basis: 40%;
    // height: 100%;
    width: 100%;
    // height: 100%;
    // justify-content: space-between;
 `;

 const TopLeftAnimation = styled.div`
    flex-basis:79%;
    background-color:black;
    // width: 100%;
    height: 100%;
    width: 79%;
    margin: 2px;
    overflow:hidden;
    position:relative;
 `;

 const TopRightAnimation = styled.div`
    flex-basis:19%;
    background-color:black;
    // width: 100%
    height: 100%;
    width: 19%;
    margin: 2px;
    overflow:hidden;
    position:relative;
 `;

 const BottomAnimation = styled.div`
    margin: 2px;
    background-color: black;
    width: 100%;
    height: 34%
    margin-top: 5px;
    overflow:hidden;
    position:relative;
 `;

 const AnimationContainer = styled.div`
    background-color: white;
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 95%;
    margin-left:auto
 `;

 const DiagonalLine = styled.div`
 
 `;

 const DiagonalLineRed = styled.div`
 
 `;

 const DiagonalLine2 = styled.div`
    background-color: white;
    -webkit-transform: rotate(-20deg);
    -moz-transform: rotate(-20deg);
    transform: rotate(-20deg);
    width: 120%;
    height: 2px;
    margin:auto;


    animation-name: animateLine;
    animation-duration: 8s;
    animation-delay: calc(var(--animation-order) * 800ms);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-timing-function:linear;

    top:110%;
    position:absolute;
    left: -10px;

    @keyframes animateLine {
        0% {
        
        }
        
        100% {
            top: -100px;
        }
    }
 `;

 const DiagonalLineRed2 = styled.div`
    background-color: red;
    -webkit-transform: rotate(-20deg);
    -moz-transform: rotate(-20deg);
    transform: rotate(-20deg);
    width: 120%;
    height: 2px;
    margin:auto;


    animation-name: animateLine;
    animation-duration: 8s;
    animation-delay: calc(var(--animation-order) * 800ms);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-timing-function:linear;

    top:110%;
    position:absolute;
    left: -10px;

    @keyframes animateLine {
        0% {
        
        }
        
        100% {
            top: -100px;
        }
    }
 `;

 const CurvedLine = styled.div`
    width: 120%;
    height: 120%;
    border-radius: 0px 0px 70% 0px;
    background-color: transparent;
    top: -175%;
    left: -300px;
    position: absolute;
    border: 2px solid white;
    border-top: none;
    border-left: none;
    animation-name: animateIn;
    animation-duration: 10s;
    animation-delay: calc(var(--animation-order) * 800ms);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-timing-function:linear;

    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    transform: rotate(-5deg);

    @keyframes animateIn {
        0% {
        
        }
        
        100% {
            top: 100px;
            left: 0px;
        }
    }
 `;

 const CurvedLineRed = styled.div`
    width: 120%;
    height: 120%;
    border-radius: 0px 0px 70% 0px;
    background-color: transparent;
    top: -175%;
    left: -300px;
    position: absolute;
    border: 2px solid red;
    border-top: none;
    border-left: none;
    animation-name: animateIn;
    animation-duration: 10s;
    animation-delay: calc(var(--animation-order) * 800ms);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-timing-function:linear;

    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    transform: rotate(-5deg);

    @keyframes animateIn {
        0% {
        
        }
        
        100% {
            top: 100px;
            left: 0px;
        }
    }
 `;

 const ZigZag = styled.div`
    height: 2px;
    width: 10%;
    -webkit-transform: rotate(40deg);
    -moz-transform: rotate(40deg);
    transform: rotate(40deg);
    position:absolute;
    background-color: white;
    left:10px;
    top:10px;

    ::before {
        border-color: purple;
        border-style: dotted;
        height:100%;
        width: 2px;
        content: "";
        position:relative;
        
    }

    ::after {
        border-color: orange;
        border-style: dotted;
        height: 100%;
        width: 2px;
        content: "";
        position: absolute;
        left: 100%;
        bottom: 100%;
        height: 100%;
        
    }
 `;

 const ZigZagRed = styled.div`
 
 `;

export default Home;