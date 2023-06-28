import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

import {  FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/assets/mens.jpg';
import QualyLogo from '../../public/assets/qualy.png';

 

const Contact = () => {
 
  

  return (
    <div id='contact' className='w-full lg:h-screen lg:mt-72'>
      <div className=' bg-[#e9d94c] p-4 items-center justify-center text-center'>
            <h3>Ágil, eficiente, a Bali Comunicação Visual, trabalha comprometido com os projetos de seus clientes, analisando e desenvolvendo melhores soluções de acordo com o perfil de cada cliente. Garantindo excelência em seus serviços prestados e total satisfação.</h3>
      </div>                      
                        
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-red-600'>
          Contato
        </p>
        <h2 className='py-4 text-[#e9d94c]'>Entre em Contato</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 uppercase text-[#e9d94c]'>Bali comunicação visual</h2>
                
                <p className='py-4 text-[#8FD2D6]'>
                Solução completa para seus projetos e para qualquer demanda de impressão para o mercado.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-red-600'>Contate-me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.instagram.com/bcvprint/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaInstagram color='#e9d94c' />
                    </div>
                  </a>
                  <a
                    href='/#contact'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail color='#e9d94c' />
                    </div>
                  </a>

                  <a
                    href='https://www.facebook.com/bcvbanner'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaFacebook color='#e9d94c' />
                    </div>
                  </a>
                  <Link href=''legacyBehavior>
                    <a>
                      <div className='rounded-full shadow-lg shadow-yellow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaYoutube color='#e9d94c' />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/7caa3a4c-b2be-45ed-9c53-a46904d0fe8a'
                method='POST'
                encType='multipart/form-data'
                
                
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2  text-[#8FD2D6]'>Nome</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2  text-[#8FD2D6]'>
                     Telefone 
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2  text-[#8FD2D6]'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2  text-[#8FD2D6]'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2  text-[#8FD2D6]'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                <div className='mt-5 text-yellow-400'>
                   <input
                  type="file" 
                  name="document">
                  
                  </input>
                </div>
                
                </div>
                <button className='w-full p-4 text-green-900 mt-4'>
                 Enviar mensagem
                </button>
                
              </form>
            </div>
          </div>
        </div>
        <div className=' mt-16 hover:scale-105 ease-in duration-300 flex flex-col items-center space-y-5 '>
          
          <Image className=''            
            src={QualyLogo}
            alt='/'
          />     
            
          </div>
       
        <div className='flex justify-center py-12'>
          <Link href='/'legacyBehavior>
            <a>
              <div className='rounded-full shadow-lg shadow-yellow-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  color='#e9d94c'
                  className=' text-[#8FD2D6]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

