import React, { useEffect, useRef, useState } from 'react';     
import styled from 'styled-components';

const ClockContainer = styled.div`
background: ${props => props.color};
width: 100%;
height: 100%;
margin: auto;
border: 2px solid palevioletred;
box-sizing: border-box;
font-size: 25px;
`  

export default function TimerClock (props) {

    const second = 1000;
    const [timeClock, setTimeClock] = useState(timeToMiliseconds(0,0,10))
 
    const timerID = useRef();
 

    function timeToMiliseconds(hrs,min,sec) {
        return((hrs*60*60+min*60+sec)*1000);
    }

    function millisToMinutesAndSeconds(miliseconds) {
        var minutes = Math.floor(miliseconds / 60000);
        var seconds = ((miliseconds % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }

    function startCountDown (){  

        var auxTimeClock = timeClock
        timerID.current = setInterval(() => {            
            auxTimeClock = auxTimeClock - second    
 
            if (auxTimeClock <= 0){
                auxTimeClock = 0
                setTimeClock(auxTimeClock) 
                finishTime ()  
            }else{                
                setTimeClock(auxTimeClock)
            } 
        }, second);

    }
    
    function finishTime (){  
        clearInterval(timerID.current);

        console.log('El timepo se ha terminado')
    }

    useEffect (() => { 
        if ( props.events != null ) {            
            if ( props.events === 'start' ) {
                startCountDown()
            }else if ( props.events === 'restart' ) {

            }else if ( props.events === 'pause' ) {

            }else if ( props.events === 'stop' ) {

            }
        }
    })

    return  <>
                <ClockContainer color='#665620'> {millisToMinutesAndSeconds(timeClock) } 
                </ClockContainer> 
            </>

}

 