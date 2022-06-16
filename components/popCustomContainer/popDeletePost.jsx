import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';    
import InputFile from '../InputFile';
import ContainerPopup, {usePopup} from './containerPop'  
import BtnIconFAI from '../btnIconFAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons' 
import firebaseClient from '../../services/firebase_client'   

export default function PopDeletePost ({ update, firebase, postData, hide}) { 
    const iconTrash = <FontAwesomeIcon icon={faTrash} />
     

    useEffect(() => {   
    },[])

    
    const handleAcept = async (e) => {     
        
        const result = await firebaseClient.deletePost(firebase, postData.postId)
        console.log('result', result)
        update()
        hide()
    }

    return <PopContainer>   
        <Content> 

            <Parrafo> 
                De verdad deseas borrar este articulo? <br /><br />
                ID : {postData.postId} <br /> 
                Nombre : {postData.postTitle} <br />
            </Parrafo>

         </Content> 
         <br /><br />
        <Content> 
            <Button onClick={handleAcept}> 
                {'Eliminar'}
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
    text-align: right;  

    word-break: break-all;
    user-select: text;
    -moz-user-select: text;
    -khtml-user-select: text; 
    -webkit-user-select: text;
    -o-user-select: text;  
` 

const Button = styled.div` 
    background: #ff0000;
    width: max-content;
    height: max-content; 
    color: #000000;
    border: none;
    border-radius: 5px; 
    padding: 5px 15px;   
    margin: 5px 0;
    display: inline-block;
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

const Parrafo = styled.p`
    position: relative; 
    display: block;
    text-align: left;
    margin: auto;
    font-size: ${({theme}) => theme.themesApp.font_size.large};
    font-weight: bold;
    word-break: break-all;
    user-select: text;
    -moz-user-select: text;
    -khtml-user-select: text;
    -webkit-user-select: text;
    -o-user-select: text;
`

 