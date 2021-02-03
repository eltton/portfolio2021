import PortfolioGallery from '../../components/PortfolioGallery'
import styled from 'styled-components'
import { SliderData } from '../../components/PortfolioGallery/SliderData';

const Page = styled.div`
    display: relative;
    width: 100%;
    height: 100%;
    /* min-height: 500px; */
    /* overflow: auto; */
    background: #1d1d1d;
    /* border: 1px solid red; */
`

export default function portFolio() {
    return (
        <Page>
        <PortfolioGallery slides={SliderData}></PortfolioGallery>

        </Page>
    )
}