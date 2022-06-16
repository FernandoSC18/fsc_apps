import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';    
import InputFile from '../InputFile';
import ContainerPopup, {usePopup} from './containerPop'  
import BtnIconFAI from '../btnIconFAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons' 

export default function PopEditPrimaryImage ({ elements, index, hide}) { 
    const iconTrash = <FontAwesomeIcon icon={faTrash} />
    
    const [images, setImages] = useState ()
   
    const isEmpty = (value) => {
        if (value === undefined || value === null) return ''
        return value
    } 
    

    async function changeImage (value) { 
        const newFile = value[0] 
         
        const base64 = await getBase64(newFile)
        setImages(base64) 
    }
    
    function deleteImage () { 
        setImages() 
    } 
    
    //base64 from file
    const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file );
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleAcept = async (e) => {  
  
        elements.current[index].data = images  
        hide()
    }

    useEffect(() => {  
        setImages(elements.current[index].data)
    },[])

    return <PopContainer>   
        
        <InputFile required={false} multiple={false} result={'Imagen'} 
            files={images} 
            addImage={changeImage} 
            deleteImage={deleteImage} />

        { images != null ? <RowImage_s>     
            <ItemRow_s> 
                <ImagePreview src={images}  />
            </ItemRow_s> 

            <ItemRow_s>  
                <BtnIconFAI onClick={async ()=>{deleteImage()}} 
                background={'red'}
                icon={iconTrash} title={'Eliminar'}/>
            </ItemRow_s>  
        </RowImage_s>
        : null}
         
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


const Label = styled.div`
    position: relative;
    color: #ffffff;
    display: block;  
    opacity: .5;   
    text-align: left; 
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

const BoxElement = styled.div`     
    vertical-align: top;
    width: 48%; 
    display: inline-block;    
    margin: 5px 1%;
    @media (max-width: 500px) {
        width: 100%; 
        margin: 5px 0 5px 0; 
    }
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
 
 
const PaddingS = styled.div` 
    display: block;    
    padding: ${({padding}) => padding};
`  

  
 
const RowImage_s = styled.div`  
    position: relative;
    display: table;    
    margin: 5px;  
` 


const ItemRow_s = styled.div`  
    position: relative; 
    display: table-cell;    
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;    
    padding: 5px;
`  

const InputFile_s = styled.input`  
    display: none;
` 

const ImagePreview = styled.img`
  height: 80px;
  max-width: 200px;
  border-radius: 5px; 
  position: relative; 
`