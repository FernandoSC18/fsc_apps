import styled from 'styled-components';  
  
export default function Title ({text, color, background}) {
 
    return <TitleS 
    color={color} 
    background={background} > 
        {text} 
    </TitleS>
      
}  

const TitleS = styled.h1`
    position: relative;
    display: block;
    width: 100%;
    height: 70px;
    padding: 10px 0;
    min-height: max-content;
    max-height: 10vh;
    font-weight: 500;
    margin: auto;    
    justify-content: center;
    text-align: center; 
    color: ${({color}) => color ? color : '#0077ff'} ;
    background: ${({background}) => background ? background : '#00c3ff'} ;
    box-shadow: 0 0 10px 0 #000000;
`