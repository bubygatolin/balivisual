
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Contact from '../components/Contact';
import Spacial from '../components/Spacial';



export default function Home() {
    return (
      <div>
        <Head>
          <title>Bali Comunicação Visual</title>
          <meta name="description" content="Comunicação Visual" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/../bcv.png" />
        </Head>

      <Navbar />    
      
      <About />      
      <Main/>
      <Spacial/>
      <Contact />

      
       
      
  
      </div>
    )
  }
  