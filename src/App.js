import styled, { createGlobalStyle } from 'styled-components'
import SideBar from './components/SideBar'




const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: solid 1px black; */
    height: 100%;
  }

  #root {
    height: 100%; /* Fixed div#root height 100% */
  }

  
`

const Page = styled.div`
  display: flex;
  height: 100%;
`

function App() {
  return (

    <Page>
      <GlobalStyle />
      <SideBar />
    </Page>

  );
}

export default App;
