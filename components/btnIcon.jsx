
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.background};
    border-radius: 3px;
    border: none;
    color: ${props => props.colorText};
    margin: 0 1em;
    display: inline-flex; 
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    font-size: 10px;
    height: 20px;   
` 

const Icon = styled.div`
    background: url(${props => props.iconSrc});
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    width: 15px;  
    height: 15px;   
    display: inline-block;  
    box-sizing: border-box;
` 

const Text = styled.div`   
    padding: 0 0 0 1em;
    display: inline-block; 
    vertical-align: middle;
` 

export default function BtnIcon (props) {
 

    return <Button onClick={  ()=>props.onClick(2)} 
            colorText={props.stylesInfo.colorText} 
            background={props.stylesInfo.background} 
            >  
                <Icon iconSrc={props.iconSrc} />  
                {props.content != null ? <Text> {props.content}</Text> : null}                    
            </Button>

}