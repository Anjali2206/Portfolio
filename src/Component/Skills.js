import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import Bootstrap from "../assets/Bootstrap.png"
import node from "../assets/node.png"
import typescript from "../assets/typescript.png"
import mysql from "../assets/mysql.png"
import graphql from "../assets/graphql.png"

import React from 'react'

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'REACT',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: node,
            title: 'NODE',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            src: nextjs,
            title: 'NEXTJS',
            style: 'shadow-gray-500'
        },
        {
            id: 6,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
        {
            id: 7,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-cyan-500'
        },
        {
            id: 8,
            src: Bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-purple-500'
        },
        {
            id: 9,
            src: graphql,
            title: 'GRAPH QL',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: mysql,
            title: 'MYSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: typescript,
            title: 'TYPESCRIPT',
            style: 'shadow-yellow-500'
        },

    ]
    return (
        <div
            name="skill"
            className="bg-gradient-to-b from-gray-800 to-black w-full ">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white h-full pt-20 ">
                <div className="pb-10 pt-20">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">
                        These are the technologies I have worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>

                        </div>
                    ))}





                </div>


            </div>


        </div>
    )
}

export default Skills