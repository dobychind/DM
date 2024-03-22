import React from 'react'
import AnimatedNumbers from "react-animated-numbers";


const About = () => {
    return (
        <div className='flex flex-col bg-gradient-to-b from-white via-[#71B4BE77] to-white items-center'>
            <h3 className='text-main text-5xl font-bold text-center'>О компании</h3>
            <div className='flex w-4/5 mx-auto py-12 items-center justify-between'>
                <p className='text-main w-1/2 text-3xl font-semibold'>
                    Группа компаний “Даниэль М” специализируется в логистике, дистрибьюции и производстве хлебобулочных изделий.
                    Основные принципы нашего взаимодействия с партнерами - это принципы открытости и надежности.
                </p>
                <div className='bg-slate-600 w-[420px] h-[400px] rounded-3xl'></div>

            </div>
            <div className='grid grid-cols-2 w-4/5 gap-x-12 gap-y-8'>

                <div className='flex flex-col flex-wrap border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <div className='flex items-baseline'>
                        <span className='text-5xl text-main font-bold'> &#62;</span>
                        <AnimatedNumbers
                            transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.5,
                            })}
                            animateToNumber={300}
                            fontStyle={{
                                height: 44,
                                fontSize: '3rem',
                                color: "#71B4BE",
                            }}
                        />
                    </div>
                    Cотрудников работают в нашей компании
                </div>

                <div className='flex flex-col justify-center     border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.5,
                        })}
                        animateToNumber={65}
                        fontStyle={{
                            height: 44,
                            fontSize: '3rem',
                            color: "#71B4BE",
                        }}
                    />                    Автомобилей в собственном парке
                </div>

                <div className='flex flex-col items-baseline border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <div className='flex items-baseline'>
                        <span className='text-5xl text-main font-bold'> &#62;</span>
                        <AnimatedNumbers
                            transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.5,
                            })}
                            animateToNumber={2000}
                            fontStyle={{
                                height: 44,
                                fontSize: '3rem',
                                color: "#71B4BE",
                            }}
                        />
                    </div>
                    Площадь складских помещений
                </div>

                <div className='flex flex-col items-baseline border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <div className='flex items-baseline'>
                        <span className='text-5xl text-main font-bold'> &#62;</span>
                        <AnimatedNumbers
                            transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.5,
                            })}
                            animateToNumber={3000}
                            fontStyle={{
                                height: 44,
                                fontSize: '3rem',
                                color: "#71B4BE",
                            }}
                        />
                    </div>
                    Торговых точек
                </div>
            </div>
        </div>
    )
}

export default About