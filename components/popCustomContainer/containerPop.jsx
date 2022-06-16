import { useEffect, useState } from 'react'; 
import styled, {keyframes} from 'styled-components';  
   
function usePopup( title, close_icon, close_btn) { 

  const [showState, setShowState] = useState(false)
  const [titleState, setTitleState] = useState(title)
  const [closeIconState, setCloseIconState] = useState(close_icon)
  const [closeBtnState, setCloseBtnState] = useState(close_btn)
  const [popupElementState, setPopupElementState] = useState(null) 

  const show = () => {
    setShowState(true)
  }

  const hide = () => {
    setShowState(false)
  }

  const setElementPop = (element) => {
    setPopupElementState(element)
  }
 /*
  refProperties.setProperties( {
      show: true, 
      title: title,  
      popupElement: popupElement  
  } ) */ 

  return { 
    show,
    hide,
    setElementPop,

    showState,
    titleState,
    closeIconState,
    closeBtnState,
    popupElementState,
  }
 
} 
  


export default function ContainerPopup ({propiedades}){ 

  //console.log('properties', propiedades)
     
  if (propiedades == null || !propiedades.showState || propiedades.popupElementState == null) {
      return null
  } 

  return <ContainerAlertS show={propiedades.showState}> 
            <CenterS>  
                <AlertContentS>  
                      <InputsArea> 
                        <Message_s>
                            {propiedades.titleState}   
                            {propiedades.closeIconState ? <BtnCloseX onClick={propiedades.hide} > X </BtnCloseX> : null} 
                        </Message_s>  
                        <Line/> 
                        {propiedades.popupElementState}
                      </InputsArea>
                      
                      {propiedades.closeBtnState
                        ? <PopFootter>   
                              <FotterRigth>   
                                  <BtnCloseS onClick={propiedades.hide}>  
                                      Cerrar
                                  </BtnCloseS>   
                              </FotterRigth>   
                              
                        </PopFootter>
                      : null} 
                </AlertContentS>
            </CenterS>
        </ContainerAlertS>
}
 
 
export {
  usePopup 
  
}


const started = keyframes`    
  from {opacity: 0;} 
  to {opacity: 1;}
`;
 
const ContainerAlertS = styled.div`
    display: ${({show}) => show ? 'block' : 'none'};
    width: 100%;
    height: 100%;  
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;  
    z-index: 999999999;
`

const CenterS = styled.div` 
  max-width: 90%;
  max-height: 90%; 
  position: relative;
  display: block;
  width: max-content;
  height: max-content;
  top: 50%;
  margin: auto;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);   
 
`

const BtnCloseS = styled.div`   
    color: #FFF;   
    background: #ff757c;   
    border: 1px solid pink;  
    border-radius: 10px;
    display: inline-flex; 
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: bold;
    padding: 18px 10px;
    height: 20px;   
    transition: all 50ms linear;
    cursor: pointer;
    &&:hover{
        transform: scale(1.02);
        background: #FFF;   
        color: #ff757c;   
    }
` 

const AlertContentS = styled.div` 
  position: relative;
  display: block;    
  background: #1d1e1f;   
  border-radius: 5px;
  padding: 5px 10px; 
  animation: ${started} 500ms normal ; 
  -webkit-box-shadow: 0 0 10px 2px #FFF;
  box-shadow: 0 0 10px 2px #FFF; 
` 

const PopFootter = styled.div`   
  display: flex;
  align-items: center; 
  justify-content: flex-end;  
  width: 100%;
  height: 60px; 
  padding: 10px 0; 
  bottom: 0; 
  right: 0; 
  box-sizing: border-box; 
` 

const InputsArea = styled.div`
  width: 100%;  
  display: block;     
  padding: 5px 20px;
  box-sizing: border-box;
  max-height: 60vh; 
  overflow-y: auto;
  overflow-x: hidden; 
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

const BtnCloseX = styled.button` 
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;    
    color: #FFF;   
    background: #ff757c;     
    font-size: 18px;
    font-weight: bold;  
    padding: 10px; 
    margin: 5px; 
    outline: none;
    border: none;
     
    background: #1d1e1f;
    width: max-content;
    height: max-content;  
    cursor: pointer; 
    
    &&:after{
        position: absolute;
        content: 'X';
        background: #ff757c;
        color: #FFF;   
        border-radius: 10px;
        width: max-content;
        height: max-content;  
        padding: 5px 8px;
        margin: auto; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; 
    }
    &&:hover:after{
        position: absolute;
        content: 'X';
        background: #FFF;
        color: #ff757c;   
        border-radius: 10px;
        width: max-content;
        height: max-content;  
        padding: 5px 8px;
        margin: auto; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; 
    }
`

const Message_s = styled.div`
  width: 100%;  
  font-size: 18px; 
  text-align: center;
  font-weight: bold;
  display: block; 
`
const MessageNote_s = styled.div`
  width: 100%;  
  font-size: 18px;
  margin-top: 15px; 
  font-weight: bold;
  text-align: justify;
  display: block; 
`
const FotterRigth = styled.div`
  position: absolute; 
  display: inline-block;
  right: 0;
  padding: 0 10px;
` 