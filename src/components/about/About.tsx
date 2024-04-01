import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import FoodAbout from '/FoodAbout.png';
import FoodCounter from '/food2.jpg';

const About: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  return (
    <div ref={forwardRef} className='flex w-full mx-auto flex-col pt-7  bg-gradient-to-b from-bg to-bg items-center xl:max-w-7xl'>
      <h3 className='text-black text-5xl font-bold text-center'>О компании</h3>
      <div className='flex  mx-auto py-16 pt-24  gap-12 justify-between'>
        <p className='text-black w-1/2 text-3xl font-semibold leading-normal	'>
          Группа компаний “Даниэль М” специализируется в логистике, дистрибьюции и производстве хлебобулочных изделий.<br />
          Основные принципы нашего взаимодействия с партнерами - это принципы открытости и надежности.
        </p>
        <img src={FoodAbout} alt='BreadPhoto' className='w-1/2' />
      </div>
      <div className='flex gap-12 h-full w-full'>
        <div className='w-full'>
          <img src={FoodCounter} alt="" />
        </div>
        <div className='flex flex-col w-full justify-between'>
          <div className='flex gap-6 border-2 p-4 border-main font-bold text-main text-2xl'>
            <div className='flex items-center'>

              <div ><p className='text-5xl mt-[-10px] text-blue font-bold'> &#62;</p></div>
              <AnimatedNumbers
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.5,
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

          <div className='flex gap-6 items-center border-2 p-4 border-main font-bold text-main text-2xl'>
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.5,
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

          <div className='flex gap-6 items-center border-2 p-4 border-main font-bold text-main text-2xl'>
            <div className='flex items-center'>
              <p className='text-5xl mt-[-10px] text-blue font-bold'> &#62;</p>
              <AnimatedNumbers
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.5,
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
              Площадь складских помещений
            </p>
          </div>

          <div className='flex gap-6 items-center border-2 p-4 border-main font-bold text-main text-2xl'>
            <div className='flex items-center'>
              <p className='text-5xl  mt-[-10px] text-main font-bold'> &#62;</p>
              <AnimatedNumbers
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.5,
                })}
                animateToNumber={3000}
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
  );
}

export default About;
