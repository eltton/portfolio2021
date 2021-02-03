import Map from '../../components/Map'
import styled from 'styled-components'
import FormContact from '../../components/FormContact'

const Page = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #333333;

    @media screen and (max-width:800px){
        flex-direction: column;      
    }  
`
const InfoMap = styled.div`
    position: absolute;
    background: #1d1d1d;
    top: 10px;
    right: 10px;
    z-index: 999999;
    width: 120px;
    padding: 20px;
    color: #fff;
    font-family: "Open Sans","Helvetica",Arial,sans-serif;
    font-size: 12px;
    font-weight: 300;
    border-radius: 15px;
`

export default function contact() {
    return (
        <Page>
            <Map />
            <FormContact />
            <InfoMap>
                Elton Pereira,<br />
                Cascavel - PR<br />
                elton_pereira@live.com<br />
                +5545999982930
            </InfoMap>
        </Page>
    )
}