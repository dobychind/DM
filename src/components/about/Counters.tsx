import AnimatedNumbers from 'react-animated-numbers';


const Counters = () => {
    return (
        <div className='w-full flex flex-col gap-10 md:gap-8'>
            <h2 data-aos-once="true" data-aos="fade-down" data-aos-duration="3000" className='text-black font-semibold text-2xl md:text-3xl 2xl:text-3xl text-start'>"Даниэль М" сегодня</h2>
            <div data-aos-once="true" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="300" className='flex gap-8 h-full w-full md:flex-row 2xl:gap-16'>
                <div className='flex flex-col w-full gap-8 md:gap-0 items-center justify-between md:flex-row md:items-start'>
                    <div className='flex max-w-[196px] flex-col h-full  gap-4 items-center font-medium text-black text-lg md:text-2xl'>
                        <div className='flex h-full justify-between  items-center'>
                            <div className='flex flex-col gap-4 h-full justify-between items-baseline'>
                                <div className='flex justify-center mr-4'>
                                    <p className='text-5xl   text-main font-medium'> &#62;</p>
                                    <AnimatedNumbers
                                        transitions={(index) => ({
                                            type: "just",
                                            duration: index,
                                            // velocity: -122,
                                        })}

                                        animateToNumber={500}
                                        fontStyle={{
                                            width: 38,
                                            height: 50,
                                            lineHeight: "48px",
                                            fontSize: '4rem',
                                            color: "#F7832C",
                                        }}
                                    />
                                </div>

                                <p className='leading-none text-justifty text-lg md:text-2xl'>Человек насчитывает наш коллектив</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-w-[196px] flex-col h-full  gap-4 items-center font-medium text-black text-2xl'>
                        <div className='flex flex-col gap-4 h-full justify-between font-medium  items-baseline'>
                            <div className='flex justify-center mr-4'>
                                <p className='text-5xl   text-main font-medium'> &#62;</p>
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "just",
                                        duration: index,
                                        // velocity: -122,
                                    })}

                                    animateToNumber={120}
                                    fontStyle={{
                                        width: 38,
                                        height: 50,
                                        lineHeight: "48px",
                                        fontSize: '4rem',
                                        color: "#F7832C",
                                    }}
                                />
                            </div>

                            <p className='leading-none text-justifty text-lg md:text-2xl'>Автомобилей в нашем автопарке</p>
                        </div>

                    </div>

                    <div className='flex flex-col max-w-[196px] gap-4  h-full items-center  font-medium text-black text-2xl'>
                        <div className='flex flex-col gap-4 h-full justify-between font-medium  items-baseline'>
                            <div className='flex justify-center mr-4'>
                                <p className='text-5xl   text-main font-medium'> &#62;</p>
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "just",
                                        duration: index,
                                        // velocity: -122,
                                    })}

                                    animateToNumber={3000}
                                    fontStyle={{
                                        width: 38,
                                        height: 50,
                                        lineHeight: "48px",
                                        fontSize: '4rem',
                                        color: "#F7832C",
                                    }}
                                />
                            </div>

                            <p className='leading-none text-justifty text-lg md:text-2xl	'>М<sup>2 </sup> складские помещения компании</p>
                        </div>
                    </div>

                    <div className='flex max-w-[196px] flex-col h-full  gap-4 items-center font-medium text-black text-2xl'>
                        <div className='flex flex-col gap-4 h-full justify-between font-medium  items-baseline'>
                            <div className='flex justify-center mr-4'>
                                <p className='text-5xl   text-main font-medium'> &#62;</p>
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "just",
                                        duration: index,
                                        // velocity: -122,
                                    })}

                                    animateToNumber={20}
                                    fontStyle={{
                                        width: 38,
                                        height: 50,
                                        lineHeight: "48px",
                                        fontSize: '4rem',
                                        color: "#F7832C",
                                    }}
                                />
                            </div>

                            <p className='leading-none text-justifty text-lg md:text-2xl'>Тонн продукции производим каждый день</p>
                        </div>
                    </div>

                    <div className='flex max-w-[196px] flex-col gap-4  justify-between items-baseline h-full font-medium text-black text-2xl'>
                        <div className='flex items-center text-lg md:text-2xl'>
                            <p className='text-5xl text-justifty   text-main font-medium'> &#62;</p>
                            <AnimatedNumbers
                                transitions={(index) => ({
                                    type: "tween",
                                    duration: index,
                                })}
                                animateToNumber={5000}
                                fontStyle={{
                                    height: 50,
                                    lineHeight: "48px",
                                    width: 38,

                                    fontSize: '4rem',
                                    color: "#F7832C",
                                }}
                            />
                        </div>
                        <p className='leading-none text-justifty text-lg md:text-2xl'>Торговых точек, куда поставляем продукцию</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counters