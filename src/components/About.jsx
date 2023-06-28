import React from 'react';
import Image from 'next/image';

import AboutImg from '../../public/assets/top.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-12'>
        <div className='col-span-2 '>          
          <h2 className='py-4 text-[#e9d94c]'>BALI Comunicação Visual</h2>
          <p className='py-2 text-[#8FD2D6] text-xl'>A BALI Comunicação Visual  uma empresa especializada em banners personalizados, placas, cartazes, adesivos e muito mais. Somos referência na cidade de São Paulo. Uma comunicação visual é a maneira perfeita de mostrar seu trabalho e atrair mais atenção ao seu negócio.
            Atraia mais clientes se destacando de seus concorrentes. A propaganda é a maneira mais eficaz de se destacar e aumentar suas vendas e clientes.
          </p>
          
          
          <h2 className='py-4 text-[#e9d94c]'>Sobre nós</h2>
          <p className='py-2 text-[#8FD2D6] text-xl'>
          Contamos com especialistas com amplo conhecimento de todos nossos produtos, eles  realizam o projeto conforme a vontade do cliente, incluindo informações, imagens e formatos desejados.Contamos com uma equipe de profissionais altamentes preparados para melhor atendê- los.
          </p>
          <p className='py-2 text-[#8FD2D6] text-xl'>
          Agimos com seriedade, comprometimento, profissionalismo e oferecendo serviços de qualidade e preços compatíveis com a concorrência.<br></br><br></br>Consulte nossos valores através do nosso Whatsapp, temos os melhores preços e cobrimos qualquer orçamento.<br></br>
          <br></br>Bali Comunicação Visual a solução completa para seus projetos e para qualquer demanda de impressão para o mercado. Tudo com o padrão de qualidade e de ótima impressão.
          </p>                 
                           
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl ' alt='/' />
        </div>
        
      </div>
    </div>
  );
};

export default About;