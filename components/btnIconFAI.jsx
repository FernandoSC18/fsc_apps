
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.background};
    border-radius: 10px;
    border: 1px ${props => props.borderType} ${props => props.colorBorder};
    color: ${props => props.colorText}; 
    display: inline-flex; 
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    font-size: 17px;
    padding: 15px 10px;
    height: 20px;   
    cursor: pointer;
    transition: all 100ms;
    &&:hover{
        transform: scale(1.05);
    }
`  

const Text = styled.div`   
    padding: 0 0 0 1em;
    display: inline-block; 
    vertical-align: middle;
` 
//Boton Con Texto e Icono de FontAwesomeIcon
export default function BtnIconFAI (props) {
 

    return <Button type={'buttom'} onClick={  ()=>props.onClick(2)} 
            borderType={props.stylesInfo.border}      
            colorBorder={props.stylesInfo.colorBorder}
            colorText={props.stylesInfo.colorText} 
            background={props.stylesInfo.background}        
            >  
                {props.icon}
                {props.content != null ? <Text> {props.content}</Text> : null}                    
            </Button>

}