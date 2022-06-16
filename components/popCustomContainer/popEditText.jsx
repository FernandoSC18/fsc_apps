import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';    
import InputFile from '../InputFile';
import ContainerPopup, {usePopup} from './containerPop'  
import BtnIconFAI from '../btnIconFAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons' 

export default function PopEditText ({ elements, index, hide}) { 
    const iconTrash = <FontAwesomeIcon icon={faTrash} />
     
    const [text, setText] = useState( )

    useEffect(() => {    
        setText(elements.current[index].data)
    },[])

    
    const handleAcept = async (e) => {     
        elements.current[index].data = text
        hide()
    }

    return <PopContainer>    

         <Label>
            Texto a editar
            <TextArea value={text} onChange={(e)=> setText(e.target.value)}/>
        </Label>
         
        <Content> 
            <Button onClick={handleAcept}> 
                {'Guardar'}
            </Button>
        </Content> 

    </PopContainer>
    
} 
 
const PopContainer = styled.div`
    position: relative; 
    display: block;  
`
 
const Content = styled.div`
    position: relative;
    color: #ffffff;
    display: block;  
    text-align: left;
    margin: auto; 
    word-break: break-all;
    user-select: text;
    -moz-user-select: text;
    -khtml-user-select: text; 
    -webkit-user-select: text;
    -o-user-select: text;  
` 

const Button = styled.div` 
    background: #00ccff;
    width: max-content;
    height: max-content; 
    color: #000000;
    border: none;
    border-radius: 5px; 
    padding: 5px 15px;   
    margin: 5px auto;
    display: block;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;  
    cursor: pointer;
    &&:hover{   
        background: #000000;
        color: #ff0000;
    }
    @media (max-width: 500px) {
        width: 100%; 
        margin: 5px 0; 
    }
` 


const Label = styled.label`
    position: relative;
    display: block;
    width: 100%;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    padding: 10px 0 0 0; 

`

const TextArea = styled.textarea`
    width: 100%;
    min-width: 500px;
    position: relative; 
    display: block;  
    padding: 5px;
    height: 200px;
    background: ${({theme}) => theme.themesApp.colors_dark.background_light};
    outline: auto;
    border: none;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    box-sizing: border-box;
`