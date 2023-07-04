

import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import React from 'react'


const Work = () => {
  return (
    <div className=''>
        <h2 className=' items-center justify-center p-16 mx-32 text-yellow-300'>Produtos</h2>
        <div className=' p-12 m-auto flex flex-col lg:grid grid-cols-3 gap-10 pb-20 max-w-7xl '>
            {WorkCardData.map((val, ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view} 
                    />
                )
            })}
        </div>
            
        
    </div>
  )
}

export default Work;
