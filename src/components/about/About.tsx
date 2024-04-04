import React, { useEffect } from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import FoodAbout from '/FoodAbout.png';
import FoodCounter from '/food2.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'



const About: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  useEffect(() =>
  {
    Aos.init();
  }, [])
  return (
    <div data-aos="fade-down" data-aos-duration="1000"  className='flex my-auto w-full py-8 max-h-screen h-full mx-auto flex-col bg-gradient-to-b from-bg to-bg items-center xl:max-w-7xl'>

      <h3 className='text-black text-5xl font-bold text-center'>О компании</h3>
      
      <div ref={forwardRef} data-aos="fade-left" data-aos-duration="2000" className='flex max-h-[42vh] mx-auto py-8 gap-8'>
        <p className='text-black my-auto w-1/2 text-2xl font-semibold leading-normal	'>
          Группа компаний “Даниэль М” специализируется в логистике, дистрибьюции и производстве хлебобулочных изделий.<br />
          Основные принципы нашего взаимодействия с партнерами - это принципы открытости и надежности.
        </p>
        <img src={FoodAbout} alt='BreadPhoto' className='' />
      </div>
      <div data-aos="fade-right" data-aos-duration="3000" className='flex  max-h-[42vh]  gap-8 h-full w-full'>
        <div className='w-4/5' >
          <img  src={FoodCounter} alt="" className=' h-full'/>
        </div>
        <div className='flex flex-col w-full justify-between'>
          <div className='flex h-full gap-4 items-center font-bold text-main text-2xl'>
            <div className='flex  items-center'>
              <div ><p className='text-5xl mt-[-10px] text-blue font-bold'> &#62;</p></div>
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
            <p className='leading-none	'>Cотрудников работают в нашей компании</p>
          </div>

          <div className='flex pl-[2rem] gap-6 h-full items-center border-y-2  border-t-main border-b-main font-bold text-main text-2xl'>
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
            />                    Автомобилей в собственном парке
          </div>

          <div className='flex gap-6 h-full border-b-2 border-b-main items-center  font-bold text-main text-2xl'>
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
              М<sup>2 </sup> площадь складских помещений
            </p>
          </div>

          <div className='flex gap-6 items-center h-full font-bold text-main text-2xl'>
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
