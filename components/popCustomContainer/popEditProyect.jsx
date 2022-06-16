import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';    
import InputFile from '../InputFile';
import ContainerPopup, {usePopup} from './containerPop'  
import BtnIconFAI from '../btnIconFAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons' 
import firebaseClient from '../../services/firebase_client'   
import firebase_auth from '../../services/firebase_auth';

export default function PopEditProyect ({ update, firebase, proyectData, hide}) { 
    const iconTrash = <FontAwesomeIcon icon={faTrash} />
    const iconPlus = <FontAwesomeIcon icon={faPlus} />

    const [title, setTitle] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [images, setImages] = useState (null)
    const [urlPublic, setUrlPublic] = useState ('')

    const [tecnologias, setTecnologias] = useState ([])
    const [tecnologiasIcons, setTecnologiasIcons] = useState ([])
    const [columna, setColumna] = useState ('')
    const [columnaPos, setColumnaPos] = useState ('')

    

    useEffect(() => {   

        const tecno = proyectData.proyect_technologies == null || proyectData.proyect_technologies == '' 
        ? [] : JSON.parse(proyectData.proyect_technologies)
 
        setTitle(proyectData.proyect_title)
        setDescripcion(proyectData.proyect_desc)
        setImages(proyectData.proyect_image)
        setUrlPublic(proyectData.proyect_link)
        setColumna(proyectData.columna)
        setColumnaPos(proyectData.position_col) 
        
        const tecnoNames = [] 
        const tecnoIcons = []  
        for (let index = 0; index < tecno.length; index++) { 
            tecnoNames.push(tecno[index].name)
            tecnoIcons.push(tecno[index].icon)
        } 
 
        setTecnologias(tecnoNames) 
        setTecnologiasIcons(tecnoIcons)

    },[])

    
    const handleAcept = async (e) => {    

        if (title == null || title == '') {
            alert ('El titulo no puede estar vacio')
            return 
        }else if (descripcion == null || descripcion == ''){
            alert('Coloca alguna descripcion')
            return 
        }else if (images == null){
            alert('No se ha seleccionado ninguna imagen')
            return 
        }else if (columna == null || columna == ''){
            alert('No se ha seleccionado ninguna columna')
            return
        }else if (columnaPos == null || columnaPos == ''){
            alert('No se ha seleccionado ninguna posicion')
            return
        }


        firebase_auth.authState((user)=>{
            if (user) {  
                const uid = user.uid 
                handleEdit(uid)
            } else {
                // User is signed out  
                console.log('user no validado' )  
                window.location.href = "/" 
            }
        })  
    }

    const handleEdit = async (uid) => {

        const finalTecnologias = [] 

        for (let index = 0; index < tecnologias.length; index++) {
            finalTecnologias.push({ 
                    name: tecnologias[index],
                    icon: tecnologiasIcons[index],
            })
        } 

        const proyect = {
            proyect_image: images,
            proyect_link: urlPublic, 
            proyect_technologies: JSON.stringify(finalTecnologias),
            proyect_title: title,
            proyect_desc: descripcion,
            position_col: Number(columnaPos),
            columna: Number(columna),

            created_date: new Date(),
            updated_date: new Date(),
            created_by: uid,
            updated_by: uid, 
        } 

        const result = await firebaseClient.editProyect(firebase, proyect, proyectData.proyect_id)
        console.log('result', result)
        update()
        hide()

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
    
    return <PopContainer>    
            <Label>
                Titulo
                <Input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} />
            </Label> 
            <Label>
                Descripcion
                <TextArea type="text" value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}} />
            </Label>

                
            <InputFile required={false} multiple={false} result={'Imagen'} 
                files={images} 
                addImage={changeImage} 
                deleteImage={deleteImage} />

            <Label>
                Previsualización
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
                : null } 
            </Label> 
            <Label>
                URL Publica del Proyecto
                <Input type="text" value={urlPublic} onChange={(e) => {setUrlPublic(e.target.value)}} />
            </Label>  

            <Label>
                Tecnologias
                <TecnoArea> { tecnologias == null ? null
                    : tecnologias.map((tecno, index) => { 

                        async function changeImage2 (value) { 
                            const newFile = value[0]                             
                            const base64 = await getBase64(newFile)
                            
                            const newTecnoIcons = [...tecnologiasIcons] 
                            newTecnoIcons[index] = base64 
                            setTecnologiasIcons(newTecnoIcons) 
                        }
                        
                        function deleteImage2 () {  
                            const newTecnoIcons = [...tecnologiasIcons]  
                            newTecnoIcons[index] = '' 
                            setTecnologiasIcons(newTecnoIcons) 
                        }  

                        return <Tecno key={index} >
                            <InputTecno type="text" value={tecno} 
                                placeholder="Tecnologia"
                                onChange={(e)=> { 
                                    const newTecno = [...tecnologias]
                                    newTecno[index] = e.target.value
                                    setTecnologias(newTecno)
                            }}/>

                            <InputFile required={false} multiple={false} result={'Imagen'} 
                            files={tecnologiasIcons[index]} 
                            addImage={changeImage2} 
                            deleteImage={deleteImage2} /> 
                            <Label>
                                Previsualización
                                { tecnologiasIcons != null && tecnologiasIcons[index] != null ? <RowImage_s>     
                                    <ItemRow_s> 
                                        <ImagePreview src={tecnologiasIcons[index]}  />
                                    </ItemRow_s> 

                                    <ItemRow_s>  
                                        <BtnIconFAI onClick={async ()=>{deleteImage2()}} 
                                        background={'red'}
                                        icon={iconTrash} title={'Eliminar'}/>
                                    </ItemRow_s>  
                                </RowImage_s>
                                : null } 
                            </Label> 

                            
                            <TecnoBtn> 
                                <BtnIconFAI onClick={()=>{    
                                    const newTecno = [...tecnologias]
                                    newTecno.splice(index, 1)
                                    
                                    const newTecnoIcons = [...tecnologiasIcons] 
                                    newTecnoIcons.splice(index, 1) 
                                    
                                    setTecnologias(newTecno)
                                    setTecnologiasIcons(newTecnoIcons) 
                                }} 
                                background={'#ff3838'}  
                                icon={iconTrash}  />
                            </TecnoBtn> 
                        </Tecno>
                        
                    })
                }
                
                <TecnoBtn> 
                    <BtnIconFAI onClick={()=>{  
                        const newTecno = [...tecnologias]
                        newTecno.push('')
                        setTecnologias(newTecno)
                    }}  
                    content={'Agregar Tecnologia'}  
                    icon={iconPlus}  />
                </TecnoBtn> 
                </TecnoArea>
            </Label> 

            <Label>
                Columna (1 - 4)
                <Input type="text" value={columna} onChange={(e) => {
                    const newVal = e.target.value     
                    if (newVal === ''){ 
                        setColumna('') 
                        return
                    } 
                    const pattern="^(0|[1-9][0-9]*)$"  
                    if(newVal.match(pattern)){  
                        setColumna(newVal) 
                    }  
                }} />
            </Label> 
            <Label>
                Posicion en Columna (mas cercano a 1 es al inicio)
                <Input type="text" value={columnaPos} onChange={(e) => { 
                    const newVal = e.target.value     
                    if (newVal === ''){ 
                        setColumnaPos('') 
                        return
                    } 
                    const pattern="^(0|[1-9][0-9]*)$"  
                    if(newVal.match(pattern)){  
                        setColumnaPos(newVal) 
                    }  
                }} />
            </Label> 

            <br />
         
            <Content> 
                <Button onClick={handleAcept}> 
                    {'Aceptar'}
                </Button>
            </Content> 
            <br />
            <br />

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
    background: #00ccff;
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


const Label = styled.label`
    position: relative;
    display: block;
    width: 100%;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    padding: 10px 0 0 0; 

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
 
const ImagePreview = styled.img`
  height: 80px;
  max-width: 200px;
  border-radius: 5px; 
  position: relative; 
`


const Tecno = styled.div`
    background: ${({theme}) => theme.themesApp.colors_dark.background_light};
    position: relative;
    display: flex;
    width: 100%;
    font-size: ${({theme}) => theme.themesApp.font_size.normal};
    margin: 10px 0;  

`

const TecnoBtn = styled.div`  
    min-width: 35px;
    width: max-content;
`

const TecnoArea = styled.div`
    border: 3px solid ${({theme}) => theme.themesApp.colors_white.background_light};
    border-radius: 5px;
    padding: 5px;
`
const InputTecno = styled.input`
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