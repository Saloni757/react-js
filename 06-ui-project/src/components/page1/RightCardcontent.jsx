import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardcontent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-10 w-10 text-xl font-semibold flex justify-center items-center'>{props.id + 1}</h2>
            <div >
                <p className=' text-shadow-2xs text-xl leading-relaxed text-white mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae minima quam fugit ex. Sequi.</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className=' text-white font-medium px-4 py-2 rounded-full '><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardcontent
