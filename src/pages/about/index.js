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
    width: 300px;
    filter:drop-shadow(8px 8px 10px #46bcec) grayscale(70%);
`

const About = styled.div`
    /* position: absolute; */
    /* border: solid 1px red;     */
    font-size: 20px;
    color: #46bcec;
    font-family: "Open Sans",sans-serif;
    font-weight: 300;
    margin-left: 20px;
    
    
    


`

const Typing = styled.h1`
    /* position: absolute; */
    color: #909096;
    font-family: 'Press Start 2P', cursive;
    /* margin-bottom:0; */
    /* margin-left: -15px; */
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
                Sou Bacharel em Ciência da Computação desde 2013,<br />
                tendo atuado como programador freelancer durante 1 ano, desde então<br />
                venho trabalhando como Trader, atuando nos mercados de Forex, Criptomoedas, Commodities, Futuros e opções!<br />
                em paralelo desenvolvendo Robôs e indicadores para o mercado financeiro,<br />
                recentemente venho me atualizando sobre todas as tecnologias modernas para desenvolvendo web.<br /> <br />

                Procuro oportunidades de trabalho como Web Developer para continuar desenvolvendo minhas habilidades como DEV!<br />
                Tenho prefrencia em empresas e startups com projetos ligados ao setor financeiro e banking!<br />
                Aberto a propostas, inclusive Freelancer!<br />
                



            </About>
            <Me alt="me" src={me} />
        </Page>
    )
}