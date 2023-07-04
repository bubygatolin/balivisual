

import React from 'react'
import Link from 'next/link';

const WorkCard = (props) => {
  return (
    <div className=' bg-yellow-500/100 p-5'>
                <img className=' w-80 h-36 ' src={props.imgsrc} alt='image' />
                <h2 className=' p-4 items-center justify-center underline'>{props.title}</h2>
                <div className=' pb-4 text-base justify-center'>
                    <p>{props.text}</p>
                </div>
                <div className=' flex justify-between p-2 '>
                    <Link href={props.view} legacyBehavior>
                        <a className=' font-bold bg-yellow-300/50 p-2'>
                            Detalhes
                        </a>
                       
                    </Link>
                    <Link href='/#contact'className ='p-2' legacyBehavior>
                    <a className=' font-bold bg-yellow-300/50 p-2'>
                            Orçamento
                    </a>
                       
                    </Link>
                </div>
            </div>
  )
}

export default WorkCard;