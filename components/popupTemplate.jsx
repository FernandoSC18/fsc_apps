
import styled, {keyframes} from 'styled-components';
import WindowDimensions from './windowDimensions.jsx';
import BtnIconFAI from './btnIconFAI.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';

const fadeIn = keyframes`    
  //from {opacity: 0;} 
  //to {opacity: 1;}
`; 
 
const PopBack = styled.div` 
  position: absolute;  
  visibility: ${props => props.visibility};
  opacity: ${props => props.opacity};
  width: 100%;
  height: 100%;
  background: #00000075;
  z-index: 9999;
`

const PopDiv = styled.div` 
    visibility: ${props => props.visibility};
    opacity: ${props => props.opacity};
    width: 500px;
    height: max-content;
    max-width: 80%;
    max-height: 70%;
    position: fixed;  //OR ABSOLUTE
    //position: absolute;  //OR FIXED
    z-index: 9999;
    left: ${props => Number(props.positionX)}px; 
    top: ${props => Number(props.positionY)}px;   
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    border: 1px solid #000; 
    border-radius: 0;
    border-radius: 10px;
    animation: ${fadeIn} 0s normal; 
    transition: none 1000ms;    
`  

const PopHeader = styled.div`  
  display: flex;
  align-items: center;  
  width: 100%;
  height: max-content; 
  position: relative; 
  box-sizing: border-box; 
  padding: 5px 5px; 

`

const PopBody = styled.div`  
  display: block;
  overflow-x: hidden;
  overflow-y: auto; 
  position: relative; 
  padding: 2px 15px; 
  width: 100%; 
  min-height: 150px;
  max-height: 50vh;
  height: max-content; 
  box-sizing: border-box;  
  overflow-y: scroll;

`

const PopFootter = styled.div`   
  display: flex; 
  width: 100%; 
  height: max-content; 
  position: relative;  
  box-sizing: border-box;  
  padding: 5px 5px; 
`

const Title = styled.div` 
  position: relative;
  display: inline-block; 
  text-align: start;
  font-weight: bold;
  color: #616161;
  width: 100%;
  padding: 0 10px;
  left: 0; 
`
const Line = styled.div`
  background: #616161;
  position: relative;
  display: block; 
  width: 100%;
  height: 2px;
  margin: 8px 0 0 1px;
  box-sizing: border-box;
  pointer-events: none;
`

const DisplayLeft = styled.div`  
  position: relative;
  display: inline-block; 
  margin: auto auto auto 0; 
`

const DisplayRigth = styled.div` 
  position: relative; 
  display: inline-block; 
  margin: auto 0 auto auto; 
`

var mouseXBefore = null
var mouseYBefore = null

const popName = 'popTemplate'

export default function PopupTemplate (props){

    const width = useRef(WindowDimensions().width) 
    const height = useRef (WindowDimensions().height)
    const [windowPosX, setWindowPosX] = useState (0)
    const [windowPosY, setWindowPosY] = useState (0)
   
    const iconExit = <FontAwesomeIcon icon={faTimes} />
    const iconExit2 = <FontAwesomeIcon icon={faTimesCircle} />
    const iconAcept = <FontAwesomeIcon icon={faCheck} />

    

    useEffect(() => {
      setWindowPosX((width.current - document.getElementById(popName).offsetWidth) / 2)
      setWindowPosY((height.current - document.getElementById(popName).offsetHeight) / 3)
      console.log ('PopDiv : ', document.getElementById(popName).offsetWidth)

    }, [])

 
    //Funcion mouse Event change popup window position
    function detectMouse (event) {
      if (mouseXBefore == null){
        mouseXBefore = event.pageX - 1
        mouseYBefore = event.pageY - 1
      }
      const elementBounding = document.getElementById(popName).getBoundingClientRect() 
      
      setWindowPosX(elementBounding.x + (event.pageX - mouseXBefore) )
      setWindowPosY(elementBounding.y + (event.pageY - mouseYBefore) )

      
      mouseXBefore = event.pageX
      mouseYBefore = event.pageY 

    }

    function handleWindowMouseDown (event) {       
       document.onmousemove = detectMouse;
       //document.onmousemove = getCursorXY;
        //console.log('onMouseDown')
    }

    function handleWindowMouseUp (event) {
      document.onmousemove = null;
        //console.log('MouseUp')
    }

    function handleWindowMouseClick (event) {
      document.onmousemove = null;
        //console.log('MouseClick')
    }

    return  <PopBack visibility={props.visibility} opacity={props.opacity} > 
                <PopDiv positionX={windowPosX} positionY={windowPosY} id={popName} anim={fadeIn}>   
                    <PopHeader >                   
                              <Title  onMouseDown={()=> handleWindowMouseDown()} 
                                    onMouseUp={()=> handleWindowMouseUp()} 
                                    onClick={(e)=> handleWindowMouseClick()}>    
                                  Ajustes
                                  <Line/> 
                              </Title>
                              <BtnIconFAI onClick={props.closeClic} stylesInfo={props.stylesInfo.btnStyle} icon={iconExit2} content="Cerrar" /> 
                    </PopHeader>
                    <PopBody>
                                              
                          <Title> 
                              Tiempo 
                          </Title>  
                          <Title> 
                              Tonos 
                          </Title> 
                    </PopBody>
                    <PopFootter> 
                          <DisplayLeft> 
                                <BtnIconFAI onClick={props.closeClic} stylesInfo={props.stylesInfo.btnStyle} icon={iconExit} content="Cancelar" />
                          </DisplayLeft>  
                          <DisplayRigth> 
                                <BtnIconFAI onClick={props.closeClic} stylesInfo={props.stylesInfo.btnStyle} icon={iconAcept} content="Aceptar" />
                          </DisplayRigth>     
                    </PopFootter>
        
                    </PopDiv>
            </PopBack>


}