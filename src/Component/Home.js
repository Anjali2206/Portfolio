import React from 'react'
import heroImage from "../assets/heroImage.png"
import { AiOutlineArrowRight } from "react-icons/ai"
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div name="home"
            className='h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='md:text-7xl sm:text-7xl sm:pt-40 font-bold mt-10 text-white'>
                        I'm Frontend Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Result-driven Frontend Developer having 3+ years of experience specialization in HTML, CSS, JavaScript and
                        TypeScript with expertise in React.js . Committed to delivering exceptional user experiences and staying
                        updated with emerging technologies.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <AiOutlineArrowRight size={25} className='ml-1'> </AiOutlineArrowRight>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={heroImage}
                        alt='my profile'
                        className='rounded-full mx-auto w-2/3 md:w-70' />
                </div>

            </div>

        </div>
    )
}

export default Home