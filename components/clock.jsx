import {React, useState, useEffect, useRef} from 'react';     
import styled from 'styled-components';

const ClockContainer = styled.div`
  display: inline-block;
  width: 100%;
  overflow: hidden;  
` 

const ClockDay = styled.div`
  display: flex;
  text-align: left;
  margin-left: 20px;
  font-size: 18px; 
  font-weight: bold;
` 

const ClockHour = styled.div`
  display: flex;
  text-align: left;
  margin-left: 20px;
  font-size: 17px; 
  font-weight: bold;
`
const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const DIAS = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];

export default function Clock() { 

 
    const fechaString = useRef ('');   
    const [horaString, setHoraString] = useState (""); 
  
    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => { 
 
            var timerID;
            timerID = 
                setInterval(
                    () => tick(),
                    1000
                  ) 
            //document.title = timerID            
            function tick() {
                clearInterval(timerID);
                const fecha = new Date()
                setHoraString (fecha.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }))  
                fechaString.current = `${DIAS[fecha.getDay()]} ${fecha.getDate()}, ${MESES[fecha.getMonth()]} ${fecha.getFullYear()}` 
            } 
            return () => { 
              clearInterval(timerID);
            };
    }, [horaString]);
  
    

    return (
    <ClockContainer > 
        <ClockDay > {fechaString.current}.</ClockDay>  
        <ClockHour > {horaString}.</ClockHour>      
        {/*<h3> {`${("0" + fecha.getHours()).slice(-2)}:${("0" + fecha.getMinutes()).slice(-2)}:${ ("0" + fecha.getSeconds()).slice(-2)}`  }.</h3>*/}
    </ClockContainer>

    );
      
  }

 