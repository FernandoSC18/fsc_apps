
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

const fontSize = 18

const Piker = styled.div`
    width: 100%;
    height: 50px; 
    font-size: ${fontSize}px;
`

const ArrowUp = styled.div`
    display: block;
    padding: 5px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;  
    color: #979797;
`

const ArrowDown = styled.div`
    display: block;
    padding: 5px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;  
    color: #979797;
`

const PikerNumber = styled.input`
    display: block;
    font-size: ${fontSize}px;
    padding: 0;
    margin: auto;
    box-sizing: border-box; 
    appearance: none;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    text-align: center;
   
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export default function NumberPicker (){

    const [numberValue, setNumberValue] = useState (0)
    const [numberMax, setNumberMax] = useState (60)
    const [numberMin, setNumberMin] = useState (0)


    const iconArrowUp = <FontAwesomeIcon icon={faChevronUp} />
    const iconArrowDown = <FontAwesomeIcon icon={faChevronDown} />

    function handleChangeNumber (newValue) {  
        var value = newValue
        if (value > numberMax){
            value = numberMax
        }else if (value < numberMin){ 
            value = numberMin
        } 
        setNumberValue(value)
    }

    
    function handleUp () { 
        handleChangeNumber(numberValue + 1)
     }

    function handleDown () { 
        handleChangeNumber(numberValue - 1)        
     }


    return <Piker>
        <ArrowUp onClick={()=>handleUp()}> {iconArrowUp} </ArrowUp>
        <PikerNumber type='number' min={numberMin} max="5" onChange={(element)=>handleChangeNumber(element.target.value)} value={numberValue}/> 
        <ArrowDown onClick={()=>handleDown()}> {iconArrowDown} </ArrowDown> 
    </Piker>


}