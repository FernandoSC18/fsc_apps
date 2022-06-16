import React, { useEffect, useRef, useState } from 'react';     
import styled from 'styled-components';
import TabTasks from './tabTasks.jsx';
import TabInfo from './tabInfo.jsx';
import TabTips from './tabTips.jsx';

const colorBorde = '#000000'

const Button = styled.div`
    width: auto;
    display: inline-block;
    background: #ffee07;
    border-radius: 0px 15px 0px 0px;  
    border-top: 2px solid ${colorBorde};
    border-left: 2px solid ${colorBorde};
    border-right: 2px solid ${colorBorde};
    border-bottom: ${props => (props.buttonBorder === colorBorde) ? '0px' : '4px'} solid ${props => props.buttonBorder};
    color: ${colorBorde};
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    z-index: 3;
    box-sizing: content-box;
` 


const SeccionTabs = styled.div`
    position: absolute;
    width: 100%;
    height: 30px; 
    z-index: 1;
    box-sizing: border-box;
` 

const SeccionTab = styled.div`
    position: absolute;
    width: 100%; 
    border: 2px solid #000000; 
    z-index: 0;
    top: 30px;
    box-sizing: border-box;
` 

const Container = styled.div`
    position: relative;
    width: 100%;  
    box-sizing: border-box;
` 

export default function TimerClock (props) {

    const [tabSelected, setTabSelected] = useState (1)
    const [tab, setTab] = useState ()

    const tabsNames = useRef ([
                                {label:'Tareas / Objetivos', numTab:1},
                                {label:'Como Funciona', numTab:2},
                                {label:'Tips', numTab:3},
                            ])


    const areaSelectTab = tabsNames.current.map( (result, index) =>{
        return ( 
            <Button key={result.numTab} buttonBorder={tabSelected === result.numTab ? '#ffffff' : colorBorde } onClick={() => handleClickTab(result.numTab)}>{result.label}</Button>
        )
    })


    useEffect(()=>{
        handleClickTab(tabSelected) 
    }, [tabSelected])


    function handleClickTab (numTab) { 

        if (numTab === 1){ 
            setTabSelected (1)
            setTab(TabTasks)
        }else if (numTab === 2){
            setTabSelected (2)
            setTab(TabInfo) 
        }else if (numTab === 3){
            setTabSelected (3)
            setTab(TabTips) 
        }

    }


    return  <Container>
                <SeccionTabs>
                    {areaSelectTab} 
                </SeccionTabs>
                <SeccionTab>
                    {tab}
                </SeccionTab> 
            </Container>

}