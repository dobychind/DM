import AnimatedNumbers from 'react-animated-numbers';


const Counters = () => {
    return (
        <div className='w-full flex flex-col gap-12 lg:max-w-[80%]'>
            <h2 className='text-black font-bold text-4xl text-center'>Даниэль М сегодня</h2>
            <div data-aos="fade-right" data-aos-duration="3000" className='flex gap-8 h-full w-full md:flex-row 2xl:gap-16'>
                {/* <div className='w-4/5 hidden md:block' >
          <img src={FoodCounter} alt="" className='w-full rounded-2xl object-cover h-full' />
        </div> */}
                <div className='flex flex-col w-full items-center justify-between md:flex-row md:items-start'>
                    <div className='flex max-w-[196px] flex-col h-full py-4 gap-4 items-center font-bold text-black text-2xl'>
                        <div className='flex  items-center'>
                            <div ><p className='text-5xl  mt-[-10px] text-main font-bold'> &#62;</p></div>
                            <AnimatedNumbers
                                transitions={(index) => ({
                                    type: "just",
                                    duration: index,
                                    // velocity: -122,
                                })}

                                animateToNumber={500}
                                fontStyle={{
                                    width: 32,
                                    height: 40,
                                    lineHeight: "38px",
                                    fontSize: '3rem',
                                    color: "#CC7C32",
                                }}
                            />
                        </div>
                        <p className='leading-none text-center 2xl:text-4xl	'>Cотрудников</p>
                    </div>

                    <div className='flex max-w-[196px] flex-col py-4 gap-4 h-full items-center font-bold text-black text-center text-2xl 2xl:text-4xl'>
                        <AnimatedNumbers
                            includeComma
                            transitions={(index) => ({
                                type: "tween",
                                duration: index,
                            })}
                            animateToNumber={120}
                            fontStyle={{
                                width: 32,
                                height: 40,
                                lineHeight: "38px",
                                fontSize: '3rem',
                                color: "#CC7C32",
                            }}
                        />                    Автомобилей
                    </div>

                    <div className='flex flex-col max-w-[196px] gap-4 py-4 h-full items-center  font-bold text-black text-2xl 2xl:text-4xl'>
                        <div className='flex items-center'>
                            <p className='text-5xl mt-[-10px] text-main font-bold'> &#62;</p>
                            <AnimatedNumbers
                                transitions={(index) => ({
                                    type: "tween",
                                    duration: index,
                                })}
                                animateToNumber={3000}
                                fontStyle={{
                                    width: 32,
                                    height: 40,
                                    lineHeight: "38px",
                                    fontSize: '3rem',
                                    color: "#CC7C32",
                                }}
                            />
                        </div>
                        <p className='leading-none text-center'>
                            М<sup>2 </sup> площадь складов
                        </p>
                    </div>

                    <div className='flex max-w-[196px] flex-col h-full py-4 gap-4 items-center font-bold text-black text-2xl'>
                        <div className='flex  items-center'>
                            <div ><p className='text-5xl  mt-[-10px] text-main font-bold'> &#62;</p></div>
                            <AnimatedNumbers
                                transitions={(index) => ({
                                    type: "just",
                                    duration: index,
                                    // velocity: -122,
                                })}

                                animateToNumber={15}
                                fontStyle={{
                                    width: 32,
                                    height: 40,
                                    lineHeight: "38px",
                                    fontSize: '3rem',
                                    color: "#CC7C32",
                                }}
                            />
                        </div>
                        <p className='leading-none text-center 2xl:text-4xl	'>Тонн продукции производим ежедневно</p>
                    </div>

                    <div className='flex max-w-[196px] flex-col gap-4 py-4 items-center h-full font-bold text-black text-2xl 2xl:text-4xl'>
                        <div className='flex items-center'>
                            <p className='text-5xl text-center  mt-[-10px] text-main font-bold'> &#62;</p>
                            <AnimatedNumbers
                                transitions={(index) => ({
                                    type: "tween",
                                    duration: index,
                                })}
                                animateToNumber={5000}
                                fontStyle={{
                                    height: 40,
                                    lineHeight: "38px",
                                    width: 32,

                                    fontSize: '3rem',
                                    color: "#CC7C32",
                                }}
                            />
                        </div>
                        Торговых точек
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counters