import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { FaInstagram, FaFacebook, FaYoutube} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center lg:h-screen '>     
      <div className='max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center'>
      
        <div >         
                
          <h2 className='text-[#e9d94c] underline decoration-solid'>
            Missão
          </h2>
          
          <p className=' mt-3 py-4 text-[#8FD2D6] max-w[70%] m-auto text-xl'>
            Atender a necessidade do cliente e manter o ambiente de trabalho humano e agradável.
          </p>

          <h2 className='text-[#e9d94c] underline decoration-solid'>
            Visão
          </h2>
          
          <p className=' mt-3 py-4 text-[#8FD2D6] max-w[70%] m-auto text-xl text-[#]'>
            Ser referência, proporcionando satisfação para o cliente e colaborador.
          </p>

          <h2 className='text-[#e9d94c] underline decoration-solid'>
            Valores
          </h2>
          
          <p className=' mt-3 py-4 text-[#8FD2D6] max-w[70%] m-auto text-xl'>
            Foco no cliente e colaborador com inovação, qualidade e humanismo.
          </p>        
             
          
          <div className='flex items-center justify-between max-w[330px] m-auto py-4 mt-2 lg:mt-4'>
          <a
              href='https://www.instagram.com/bcvprint/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#e9d94c] shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
            <a
              href='/#contact'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#e9d94c] shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='https://www.facebook.com/bcvbanner'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#e9d94c] shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-[#e9d94c] shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Main