import Head from "next/head" 

export default function Pomodoro() {
 
 
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
 
      
      <header className="App-header"> 
      </header>
      <main>
         
        <div>
          Esta es otra aplicacion supuestamente
        </div>

      </main>   
      <footer>  

      </footer>   
      
    </> 
}
 
 