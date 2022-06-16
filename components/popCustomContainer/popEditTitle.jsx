import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';    
import InputFile from '../InputFile';
import ContainerPopup, {usePopup} from './containerPop'  
import BtnIconFAI from '../btnIconFAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons' 

export default function PopEditTitle ({ elements, index, hide}) { 
    const iconTrash = <FontAwesomeIcon icon={faTrash} />
    const iconPlus = <FontAwesomeIcon icon={faPlus} />

    const [title, setTitle] = useState( )
    const [tags, setTags] = useState( )
    const [important, setImportant] = useState( )
     

    useEffect(() => {    
        const data = elements.current[index].data

        setTitle(data.title)
        setTags(data.tags)
        setImportant(data.important)
    },[])

    
    const handleAcept = async (e) => {     
        
        elements.current[index].data = {
            title,
            tags,
            important
        }   
        hide()
    }

    return <PopContainer>     

        <Label>
            Etiquetas
            <TagArea> { tags == null ? null
                : tags.map((tag, index) => { 

                    return <Tag key={index} >
                        <InputTag type="text" value={tag} 
                            placeholder="Etiqueta"
                            onChange={(e)=> { 
                                const newTags = [...tags]
                                newTags[index] = e.target.value
                                setTags(newTags)
                        }}/>
                         
                        <TagBtn> 
                            <BtnIconFAI onClick={()=>{  
                                const newTags = [...tags]
                                newTags.splice(index, 1)
                                setTags(newTags)
                            }} 
                            background={'#ff3838'}  
                            icon={iconTrash}  />
                        </TagBtn> 
                    </Tag>
                    
                })
            }
            
            <TagBtn> 
                <BtnIconFAI onClick={()=>{  
                    const newTags = [...tags]
                    newTags.push('')
                    setTags(newTags)
                }}  
                content={'Agregar Etiqueta'}  
                icon={iconPlus}  />
            </TagBtn> 
            </TagArea>
        </Label>
        <Label>
            Titulo
            <Input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </Label>
        <Label>
            Importante
            <TextArea value={important} onChange={(e)=> setImportant(e.target.value)}/>
        </Label>
         <br />
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
const Label = styled.label`
    position: relative;
    display: block;
    width: 100%;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    padding: 10px 0 0 0; 

`
const Tag = styled.div`
    background: ${({theme}) => theme.themesApp.colors_dark.background_light};
    position: relative;
    display: flex;
    width: 100%;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    margin: 10px 0;  

`
const InputTag = styled.input`
    background: ${({theme}) => theme.themesApp.colors_dark.background_light};
    width: 100%;
    min-width: 300px;
    position: relative; 
    display: block;  
    padding: 5px;
    outline: none;
    border: none;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    box-sizing: border-box;
`

const TagBtn = styled.div`  
    min-width: 35px;
    width: max-content;
`

const TagArea = styled.div`
    border: 3px solid ${({theme}) => theme.themesApp.colors_white.background_light};
    border-radius: 5px;
    padding: 5px;
`

const Input = styled.input`
    width: 100%;
    min-width: 300px;
    position: relative; 
    display: block;  
    padding: 5px;
    background: ${({theme}) => theme.themesApp.colors_dark.background_light};
    outline: auto;
    border: none;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    box-sizing: border-box;
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