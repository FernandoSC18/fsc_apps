import Head from 'next/head'
import styled from 'styled-components';
import Title from '../../components/title';
 
export default function Codigo (props) {
    
    const icon = '/images/png/to_do_list.png' 
    const appName = "To Do List Manager"
    const appNameQuote = '"'+ appName + '"'
    const appNameMinus = appName.toLowerCase()
    
    const AreaHead = () => {
        return (  
            <Head>
                <meta charSet="utf-8" />
                <title>{`${appName} - privacy policy`}</title> 
                <link rel="shortcut icon" href={icon}></link>
                <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1 maximum-scale=1.0 minimum-scale=1.0" />
                <meta name="theme-color" content="#000000" />  
                <meta name="author" content="Fernando Sánchez"/> 
                <meta
                    name="description"
                    content={`privacy policy ${appNameMinus}`}
                /> 

            </Head>
        ) 
    }  
    
    const AreaBody = () => {
        return (  
            <div>       
                <Title
                    color={'#ff8800'}
                    background={'#383838'}
                    text={`Política de privacidad: ${appName}`}
                /> 
                <Container>       
                    <div className="parrafo">  
                        <br/>   
                        <p>Fecha de Actualización 02 de Septiembre del 2022</p> 
                    </div> 
                    <br/>    
                    <IconContainer>
                        <Image src={icon}  />
                    </IconContainer>

                    <div className="parrafo">  
                        <br/>   
                        <p><Bolder> {appNameQuote} entiende la importancia de tu privacidad </Bolder> y, por lo tanto, la aplicación de {appNameQuote}:
                            <br/>    
                            <br/>    
                            -	No recopila datos de carácter personal de los usuarios.  
                            <br/> 
                            -	No registra dirección IP.   
                            <br/> 
                            -	No accede a la ubicación del dispositivo.   
                            <br/> 
                            -	No accede a los contactos ni agendas.  
                            <br/> 
                            -   No recopila información bancaria.  
                            <br/>   
                            -	No accede a la cámara del Celular.  
                            <br/>   
                            -	No accede al micrófono del dispositivo móvil.
                            <br/> 
                            -	No recopila datos sobre el uso y modos de uso de la aplicación.
                            <br/> 
                            -	No guarda información del dispositivo como, por ejemplo: fallos, actividad del sistema, ajustes del hardware, tipo de navegador, idioma del navegador.
                            <br/> 
                            <br/> 
                            <br/> 
                            La aplicacion de {appNameQuote} es la única responsable del contenido mostrado en esta aplicación.
                            <br/> 
                            <br/> 
                            Esta política de privacidad solo aplica para {appNameQuote} y está sujeta a cambios y actualizaciones con el fin de cumplir con los derechos de privacidad de los usuarios, por lo que debe ser revisada periódicamente.                        
                            <br/> 
                            <br/> 
                            Para más información sobre la presente política de privacidad puede dirigirse a fscsoftwaremx@gmail.com
                            </p> 
                    </div> 
    
                    <br/>    
                    <br/>    
                    <br/>    
                    
                </Container>
            </div>
        ) 
    } 

    return <>
        <AreaHead />
        <AreaBody/>
    </> 
}   


const Bolder = styled.span`  
    color: #0077ff;
`
 
const Container = styled.div`  
    display: block;
    width: 100%;  
    margin: auto; 
    padding: 0 20px;
    max-width: 1000px; 
`

const IconContainer = styled.div`  
    margin: auto;
    max-width: 100%;
    width: 200px;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
`

const Image = styled.img`    
    width: 100%;    
`