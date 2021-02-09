import styled from 'styled-components'
import me from '../../assets/mebg.png'
import br from '../../assets/br.png'
import ReactTypingEffect from 'react-typing-effect'

const Page = styled.div`
    width: 100%;
    margin: auto;
`
const Me = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    filter:drop-shadow(8px 8px 10px #46bcec) grayscale(70%);    

    @media screen and (max-width:900px){
        width: 130px;
    }  
`

const About = styled.div`
    font-size: 1.5em;
    color: #46bcec;
    font-family: "Open Sans",sans-serif;
    font-weight: 300;
    margin-left: 20px;   
    overflow: hidden;

    @media screen and (max-width:900px){
        font-size: 1em;
    }  

    @media screen and (max-height:900px){
        font-size: 0.8em;
    }
`

const Typing = styled.h1`
    color: #909096;
    font-family: 'Press Start 2P', cursive;
    font-size: 1.5rem;
    user-select: none;     
`

const Br = styled.img`
    width: 25px;
    margin-left: 20px;
`

export default function about() {
    return (
        <Page>
            <Br alt='Br' src={br} />
            <Typing>
                <ReactTypingEffect
                    text={['Sobre']}
                    typingDelay="1000"
                    staticText
                />
            </Typing>
            <About>
                Olá, me chamo Elton Pereira! <br /><br />
                Sou Bacharel em Ciência da Computação desde 2015,<br />
                atuei como programador freelancer durante 1 ano, e desde então,<br />
                venho trabalhando como Trader, atuando nos mercados de Forex, Criptomoedas, Commodities, Futuros e opções!<br />
                Em paralelo, venho desenvolvendo Robôs e indicadores para o mercado financeiro.<br />
                Recentemente, venho me atualizando sobre as principais tecnologias para desenvolvimento web moderno.<br /> <br />

                Procuro oportunidades de trabalho como Web Developer, para continuar desenvolvendo minhas habilidades como DEV!<br />
                Tenho preferência em empresas e startups, com projetos ligados ao setor financeiro e banking!<br />
                Estou aberto a propostas, inclusive Freelancer!<br />
            </About>
            <Me alt="me" src={me} />
        </Page>
    )
}