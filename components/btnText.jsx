
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.background};
    border-radius: 3px;
    border: 2px ${props => props.borderType} ${props => props.colorBorder};
    color: ${props => props.colorText};
    margin: 0 1em;
    padding: 0.25em 1em;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    font-size: 10px; 
    height: 20px;   
`  

export default function BtnText (props) {
 

    return <Button onClick={()=>props.onClick(2)} 
            borderType={props.stylesInfo.border} 
            colorText={props.stylesInfo.colorText} 
            background={props.stylesInfo.background} 
            colorBorder={props.stylesInfo.colorBorder}> 
                {props.content}
            </Button>

}