import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';    
import InputFile from '../InputFile';
import ContainerPopup, {usePopup} from './containerPop'  
import BtnIconFAI from '../btnIconFAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons' 

export default function PopExample ({ elements, index, hide}) { 
    const iconTrash = <FontAwesomeIcon icon={faTrash} />
     

    useEffect(() => {   
    },[])

    
    const handleAcept = async (e) => {    
        hide()
    }

    return <PopContainer>   
         POp Vacio

         
        <Content> 
            <Button onClick={handleAcept}> 
                {'Aceptar'}
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