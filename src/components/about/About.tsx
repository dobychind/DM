import React, { useEffect } from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import FoodAbout from '/FoodAbout.png';
import FoodCounter from '/food2.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'



const About: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div   data-aos="fade-down" data-aos-duration="1000" className='flex px-4 flex-col my-auto w-full gap-4 mx-auto bg-bg items-center md:py-8 md:gap-8 md:max-h-screen 2xl:text-4xl lg:w-[70%]'>

      <h3 className='text-black text-5xl font-bold text-center'>О компании</h3>

      <div ref={forwardRef} data-aos="fade-right" data-aos-duration="2000" className='flex flex-col w-full mx-auto gap-4 md:gap-8 md:max-h-[42vh]  2xl:gap-16 md:flex-row '>
        <p className='text-black my-auto md:text-2xl lg:text-2xl font-semibold leading-normal text-center md:text-start md:w-fit lg:w-1/2 2xl:text-4xl'>
          Группа компаний “Даниэль М” специализируется в логистике, дистрибьюции и производстве хлебобулочных изделий.<br />
          Основные принципы нашего взаимодействия с партнерами - это принципы открытости и надежности.
        </p>
        <div className='w-3/5'>
          <img src={FoodAbout} alt='BreadPhoto' className='w-full h-full rounded-2xl object-cover' />
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="3000" className='flex flex-col gap-8 h-full w-full md:max-h-[40vh] md:flex-row 2xl:gap-16'>
        <div className='w-4/5 hidden md:block' >
          <img src={FoodCounter} alt="" className='w-full rounded-2xl object-cover h-full' />
        </div>
        <div className='flex flex-col w-full justify-between'>
          <div className='flex h-full py-4 gap-4 items-center font-bold text-main text-2xl'>
            <div className='flex  items-center'>
              <div ><p className='text-5xl  mt-[-10px] text-blue font-bold'> &#62;</p></div>
              <AnimatedNumbers
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 2.5,
                })}

                animateToNumber={300}
                fontStyle={{
                  width: 32,
                  height: 40,
                  lineHeight: "38px",
                  fontSize: '3rem',
                  color: "#71B4BE",
                }}
              />
            </div>
            <p className='leading-none 2xl:text-4xl	'>Cотрудников</p>
          </div>

          <div className='flex pl-[2rem] py-4 gap-6 h-full items-center border-y-2  border-t-main border-b-main font-bold text-main text-2xl 2xl:text-4xl'>
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 2.5,
              })}
              animateToNumber={65}
              fontStyle={{
                width: 32,
                height: 40,
                lineHeight: "38px",
                fontSize: '3rem',
                color: "#71B4BE",
              }}
            />                    Автомобилей
          </div>

          <div className='flex gap-6 py-4 h-full border-b-2 border-b-main items-center  font-bold text-main text-2xl 2xl:text-4xl'>
            <div className='flex items-center'>
              <p className='text-5xl mt-[-10px] text-blue font-bold'> &#62;</p>
              <AnimatedNumbers
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 2.5,
                })}
                animateToNumber={2000}
                fontStyle={{
                  width: 32,
                  height: 40,
                  lineHeight: "38px",
                  fontSize: '3rem',
                  color: "#71B4BE",
                }}
              />
            </div>
            <p className='leading-none'>
              М<sup>2 </sup> площадь складов
            </p>
          </div>

          <div className='flex gap-6 py-4 items-center h-full font-bold text-main text-2xl 2xl:text-4xl'>
            <div className='flex items-center'>
              <p className='text-5xl  mt-[-10px] text-blue font-bold'> &#62;</p>
              <AnimatedNumbers
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 2.5,
                })}
                animateToNumber={3000}
                fontStyle={{
                  height: 40,
                  lineHeight: "38px",
                  width: 32,

                  fontSize: '3rem',
                  color: "#71B4BE",
                }}
              />
            </div>
            Торговых точек
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
