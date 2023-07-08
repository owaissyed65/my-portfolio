import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { scrollTo, topScroll } from '../helper'
import Div from './Div';
const ScrollUp = () => {
    const cond = topScroll()
    return cond && (
        <Div className={`fixed bottom-7 right-[4%] text-blue-800 ${!cond && "hidden"}  `}>
            <div className='w-[50px] h-[50px] rounded-full bg-[#78E9C5] flex items-center justify-center cursor-pointer' onClick={() => scrollTo('hero')}><AiOutlineArrowUp className='text-white ' size={24} /></div>
        </Div>
    )
}

export default ScrollUp
