import Head from "next/head" 

import styled from 'styled-components';
import TimerClock from '../components/timerClock.jsx';
import Tabs from '../components/tabs.jsx';
//import BtnText from './components/btnText.jsx';
//import BtnIcon from './components/btnIcon.jsx';
import BtnIconFAI from '../components/btnIconFAI';
import PopupSettings from '../components/popupSettings.jsx';
import PopupTemplate from '../components/popupTemplate';
import Clock from '../components/clock.jsx';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
 


export default function Pomodoro() {

  const logo = '/images/tomato.jpg';
 
  function handleOpenSetting (props){   
    setPopSettings({visibility:'visible', opacity:1})
  }

  function handleCloseSetting (props){   
    setPopSettings({visibility:'hidden', opacity:0}) 
  }
  
  const [countEvents, setCountEvents] = useState()
  const [popSettings, setPopSettings] = useState({ 
    visibility: 'hidden', opacity:0
  } )
 
  const iconSettings = <FontAwesomeIcon icon={faCog} />
 
  const HeadPage = () => {

      return <Head>
          <meta charSet="utf-8"/>
          <title> Pomodoro </title>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="theme-color" content="$fff"/>
          <meta name="autor" content="autor"/>
      </Head>

  }

  return <> 
      <HeadPage/> 

      <PopupSettings visibility={popSettings.visibility} stylesInfo={colorsApp} opacity={popSettings.opacity} closeClic={handleCloseSetting}/>
      
      <header className="App-header"> 
      </header>
      <main>
         

        <Encabezado>
              <ClockArea> 
                    <Clock></Clock>
              </ClockArea>
              <SettingsArea> 
                    <BtnIconFAI onClick={handleOpenSetting} stylesInfo={colorsApp.btnStyle} icon={iconSettings} content="Ajustes" />
              </SettingsArea>
              {/*
              <BtnIcon stylesInfo={colorsApp.btnStyle} iconSrc="favicon.ico" />
              <BtnIcon stylesInfo={colorsApp.btnStyle} iconSrc="https://www.w3schools.com/images/w3lynx_200.png" content="BOTION" />
              */}
        </Encabezado>
        <div className="tomatoArea">
          <img src={logo} className="tomatoimg" alt="logo" />
          <div className="tomatoCounter">
            <TimerClock events={countEvents}/>
          </div>
        </div> 
        <br/>
        <div> 
          <Button onClick={ () => {setCountEvents('start')} }> Iniciar Cuenta Atras </Button>
        </div> 
        <br/>
        <div> 
          <Tabs> </Tabs>
        </div> 

      </main>   
      <footer>  

      </footer>   
      
    </> 
}
 


const colorsApp = {
  btnStyle: {
    border: 'solid',
    colorBorder: '#ffdc18',
    background: '#ffdc18', 
    colorText: '#000', 
  }, 
} 

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Encabezado = styled.div` 
  display: block;   
  width: auto;
  height: 50px;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`

const ClockArea = styled.div` 
  display: block;  
  position: absolute;
  left: 0px;
  bottom: 0px;
`
const SettingsArea = styled.div` 
  display: block;  
  position: absolute;
  right: 0px;
  bottom: 0px; 
`
