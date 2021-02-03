import { SkillData } from './skillData'
import styled from 'styled-components'

const Page = styled.div`    
    margin: auto;    
    .skills{
        width: 100px;
        height: 100px;
        
        @media screen and (max-width:320px){
            width: 60px;
            height: 60px;        
        }     

        @media screen and (max-width:375px){
            width: 60px;
            height: 60px;        
        }  
    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid #46bcec; */
        float:left;
        color: #46bcec;
        margin: 2px;
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
        margin-top: 5px;
        margin-left: 5px;        
    }   

    .skill-title{
        margin-top: 5px;
    }
`



export default function skillGallery() {
    return (
        <Page>
            {SkillData.map((data, index) => {
                return (
                    <div key={'box-' + index} className="box">
                        <img alt='skill' key={'img-' + index} src={data.image} className='skills' />
                        <div className='skill-title' key={index}>{data.name}</div>
                    </div>
                )
            })}
        </Page>

    )

}