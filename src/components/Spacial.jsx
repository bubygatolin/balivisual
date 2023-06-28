import React from 'react';
import Image from 'next/image';

import ServImg from '../../public/assets/serv.jpg';
import BannerImg from '../../public/assets/banner.jpg'

const Spacial = () => {

  return (
    <div id='spacial' className='w-full lg:h-screen p-2 flex items-center '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>          
          <h3 className='py-4 text-[#e9d94c]'>Qualidade e Agilidade</h3>
          <p className='py-2 text-[#8FD2D6] text-xl'>
            Nossa empresa tem como objetivo zelar pela excelência no atendimento, onde o diferencial é a qualidade e a agilidade nos nossos serviços.
          </p>
          
          
          <h3 className='py-4 text-[#e9d94c]'>Atendimento Personalizado</h3>
          <p className='py-2 text-[#8FD2D6] text-xl'>
             Desenvolvemos projetos personalizados de acordo com a necessidade de cada cliente. Entre em contato através do nosso WhatsApp.
          </p>

          <h3 className='py-4 text-[#e9d94c]'>Muito mais serviços e segurança</h3>
          <p className='py-2 text-[#8FD2D6] text-xl'>
          Ao contratar um dos nossos serviços, tenha a certeza do nosso profissionalismo e mão de obra qualificada, garantimos a satisfação dos clientes e muito mais segurança e confiabilidade.
          </p>                    
                           
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={BannerImg} className='rounded-xl ' alt='/' />
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mt-10'>
          <Image src={ServImg} className='rounded-xl ' alt='/' />
        </div>
        
        <div className='col-span-2 '>          
          <h3 className='py-4 text-[#e9d94c]'>Qualidade e Satisfação ao contratar BALI Comunicação Visual</h3>
          <ul class="list-disc py-2 text-[#8FD2D6] text-base ml-8">
            <li> Profissionais altamente qualificados para o seu projeto</li>
            <li> Garantia total de produtos e serviços</li>
            <li> Qualidade e melhores preços</li>
            <li> Atendimento Personalizado</li>
            <li>  Agilidade e Precisão</li>  
          </ul>         
          
          
          <h3 className='py-4 text-[#e9d94c]'>Nossas Especialidades</h3>
          <ul class="list-disc py-2 text-[#8FD2D6] text-base ml-8">
            <li> Criação de Banners</li>
            <li> Banners em Lona</li>
            <li> Banner em Papel(para apresentação escolares, empresariais e outros com baixo custo)</li>
            <li> Capas de Celulares Personalizadas</li>
            <li> Placas em PS</li>  
            <li> Placas Proibido Estacionar de Diversos Modelos </li>  
            <li> Adesivos Personalizados</li>  
            <li> Adesivos Perfurados</li>  
            <li> Cartazes Promocionais </li>  
            <li> Quadros Decorativos</li>  
          </ul>
             
        </div>
        
      </div>

      
    </div>
  );
};

export default Spacial;