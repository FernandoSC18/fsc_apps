import Head from "next/head" 
import Link from "next/link"
import styled from 'styled-components';
import Title from "../components/title";

export default function Index(props) {

    const HeadPage = () => {

        return <Head>
            <meta charSet="utf-8"/>
            <title> Este es un titulo </title> 
            <link rel="icon" href="/favicon.ico"/> 
            <meta name="autor" content="autor"/>
        </Head>

    }


    return <>
        <HeadPage/> 

        <header>
            <Title
                color={'#0077ff'}
                background={'#00c3ff'}
                text={'APPS'} 
            /> 
        </header>

        <Link href="/pomodoro">
            <IrApp>
                Ir Al Pomodoro
            </IrApp> 
        </Link>  
        <Link href="/copia">
            <IrApp>
                Ir A Copia
            </IrApp> 
        </Link>  
        
    </>

} 

const IrApp = styled.div`  
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 20px; 
    font-size: 30px;
    box-shadow: 0px 0px 5px 0px #000000;
    cursor: pointer;
    &&:hover{
        background: #cae3ff;
    }
`