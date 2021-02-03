import AnimatedBackground from '../../components/AnimatedBackground'
import ReactTypingEffect from 'react-typing-effect'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Page = styled.div`
   /* position: absolute; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;

    .flat-button {    
        position: absolute;
        color:#46bcec;
        font-size: 13px;
        letter-spacing: 4px;
        font-family: "Open Sans", sans-serif;
        text-decoration: none;
        padding: 10px 18px;
        border: 1px solid #46bcec;
        margin-top: 150px;
        /* -webkit-animation: myanim2 1s 4s backwards; */
        animation: myanim2 1s 1.5s backwards;
        width: 155px;
        margin-left: 22px;
        user-select: none;    
    }
`

const Typing = styled.h1`
    color: #909096;
    font-family: 'Press Start 2P', cursive;
    /* margin-bottom:0; */
    /* margin-left: -15px; */
    font-size: 1.3rem;
    user-select: none;
    position: absolute;
`

const Developer = styled.p`
    color: #46bcec;
    font-family: 'Press Start 2P', cursive;
    margin-top: 75px;
    margin-left: 22px;
    /* -webkit-animation: myanim2 1s 2s backwards; */
    animation: myanim2 1s 1s backwards;
    user-select: none;
    position: absolute;
`



export default function home() {
    return (
        <Page>
            <AnimatedBackground />
            <Typing>
                <ReactTypingEffect
                    text={['Elton Pereira']}
                    typingDelay="1000"
                    staticText
                />
            </Typing>
            <Developer>Developer</Developer>  
            <NavLink className="flat-button" to="/contact">Contact me!</NavLink> 
        </Page>
    )
}