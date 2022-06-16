import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';     
import InputSelectList from '../InputSelectList.jsx'; 
import LoadingArea from '../loadingArea.jsx';
import ContainerAlert, {alert} from '../popsMessages/customAlert'   
import httpClient from '../../services/fetch-client'

export default function PopVentaStatusEdit ({index, sale_estatus, client_name, sale_id, updateSale, hide}) { 

    const isEmpty = (value) => {
        if (value === undefined || value === null) return ''
        return value
    }

    const [estatus, setEstatus] = useState(isEmpty(sale_estatus))
    const [descripcion, setDescripcion] = useState('') 
    const [nombre, setNombre] = useState('')     
    const [loading, setLoading] = useState(false)     
    const alertValidation = ({message}) => alert({ message: message, type: 'Mensaje' } );

    const endpointLovs = '/admin/GetLov/' 
    const endpointSales = 'admin/Sales' 
 
 

    const handleChange = async (e) => {

        setLoading(true)

        if (nombre == null || nombre === '') { 
            alertValidation({message: 'Porfavor coloca el nombre que aparece en la venta'})
            setLoading(false)
            return
        }
 
        if (sale_estatus === estatus) { 
            alertValidation({message: 'El estatus seleccionado es el mismo que el actual'})
            setLoading(false)
            return
        }
        
        if ( nombre !== isEmpty(client_name)) { 
            alertValidation({message: 'El nombre no coincide con el nombre que aparece en la venta'})
            setLoading(false)
            return
        }
  
        const myPayload = {
            sale_id: sale_id,
            status: estatus,
            desc: descripcion
        }

        //console.log('myPayload', myPayload)  
        await httpClient.put(endpointSales, myPayload, { 'Content-Type': 'application/json' }) 
            .then( ({response, error}) => {

                if (error) { 
                    console.log('Eerror ', error)  
                    setLoading(false)
                }

                console.log('response ', response)        
                updateSale(index, estatus, descripcion)
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => { 
                console.log('Error ', error)  
                setLoading(false)
            }
        )
        
        setLoading(false)

        hide()
    
    } 
 

    return <div>   

        <LoadingArea show={loading} />
        <ContainerAlert/>

        <BoxElement>
            <Label> {'ID'} </Label>
            <Content> {sale_id} </Content> 

            <Label> {'Estatus'} </Label>
            <Content>   
                <InputSelectList required={false} lovName={'LOV_SALE_STATUS'} 
                        result={''} editableVal={true} value={estatus} cambioValor={(e)=>{setEstatus(e.target.value)}}
                        lovs={endpointLovs} />  
            </Content> 

            <Label> {'Descripcion del estatus.'} </Label>
            <Content>    
                <InputArea_s value={descripcion} onChange={(e)=>{ setDescripcion(e.target.value) }} maxLength={2000}/>   
            </Content> 

            <Label> {'Escibe el nombre del cliente. "' + isEmpty(client_name) + '"'}  </Label>
            <Content>  
                <InputText_s type='text' onWheel={(e)=>{e.target.blur();}} value={nombre} onChange={(e)=>{setNombre(e.target.value) }} />                
            </Content> 
        </BoxElement> 
 
        
        <Content> 
            <Button onClick={handleChange}> 
                {'Cambiar'}
            </Button>
        </Content> 
        <br /> 
    </div>
    
} 
 

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
    width: 100%; 
    display: inline-block;     
    margin: 5px 0 5px 0; 
`     

const Button = styled.div` 
    background: #ff0000;
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

  
 

const InputArea_s = styled.textarea` 
    width: 99%;
    min-height: 150px;
    outline: none;
    resize: none;
    display: inline-block;
    border: none;
    background: ${({ theme }) => theme.popStyle.inputBackground}; 
    color: ${({ theme }) => theme.popStyle.textInputColor};  
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;
    margin: 10px .5%; 
    box-sizing: border-box; 
`

const InputText_s = styled.input`
  width: 99%;
  outline: none;
  display: inline-block;
  border: none; 
  background: ${({ theme }) => theme.popStyle.inputBackground}; 
  color: ${({ theme }) => theme.popStyle.textInputColor};  
  padding: 10px;
  border-radius: 5px;
  font-size: 25px;
  margin: 10px .5%;  
  //Eliminar selectores de numeros
  &&::-webkit-inner-spin-button, ::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
 