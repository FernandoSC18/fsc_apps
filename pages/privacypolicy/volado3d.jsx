import Head from 'next/head'
import styled from 'styled-components';
import Title from '../../components/title';
 
function Volado3d (props) {
    
    const icon = '/imagenes/png/voladoCoin.png' 

    const AreaHead = () => {
        return (  
            <Head>
                <meta charSet="utf-8" />
                <title>Volado 3D - privacy policy</title> 
                <link rel="shortcut icon" href={icon}></link>
                <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1 maximum-scale=1.0 minimum-scale=1.0" />
                <meta name="theme-color" content="#000000" />  
                <meta name="author" content="Fernando Sánchez"/> 
                <meta
                    name="description"
                    content="privacy policy volado3d"
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
                    text={'Política de privacidad: Volado 3D'}
                /> 
                <Container>       
                    <div className="parrafo">  
                        <br/>   
                        <p>Fecha de Actualización 06 de Mayo del 2021</p> 
                    </div> 
                    <br/>   
                    <div className="parrafo">  
                        <br/>   
                        <p><b> Volado 3D entiende la importancia de tu privacidad </b> y, por lo tanto, la aplicación de Volado 3D:
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
                            -	Tiene Compras Integradas.  
                            <br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Volado 3D No recopila información bancaria.  
                            <br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Volado 3D utiliza los servicios de Google Play para procesar las compras integradas. 
                            <br/> 
                            <br/> 
                            -	Accede a la cámara del Celular.  
                            <br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Volado 3D utiliza Google Play Services for AR (ARCore) para mostrar en Realidad aumentada modelos 3D mediante la cámara.
                            <br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Volado 3D no toma fotos ni videos con la cámara del celular.
                            <br/> 
                            <br/> 
                            -	No accede al micrófono del dispositivo móvil.
                            <br/> 
                            -	No recopila datos sobre el uso y modos de uso de la aplicación.
                            <br/> 
                            -	No guarda información del dispositivo como, por ejemplo: fallos, actividad del sistema, ajustes del hardware, tipo de navegador, idioma del navegador.
                            <br/> 
                            <br/> 
                            <br/> 
                            Volado 3D es el único responsable del contenido mostrado en esta aplicación.
                            <br/> 
                            <br/> 
                            Esta política de privacidad solo aplica para Volado 3D y está sujeta a cambios y actualizaciones con el fin de cumplir con los derechos de privacidad de los usuarios, por lo que debe ser revisada periódicamente.                        
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
 

export default Volado3d
 
const Container = styled.div`  
    display: block;
    width: 100%;  
    margin: auto; 
    padding: 0 20px;
    max-width: 1000px; 
`