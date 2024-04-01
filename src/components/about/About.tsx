import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import FoodAbout from '/FoodAbout.png'

const About: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  return (
    <div ref={forwardRef} className='flex max-w-7xl	w-full mx-auto flex-col pt-7  bg-gradient-to-b from-bg to-bg items-center'>
      <h3 className='text-black text-5xl font-bold text-center'>О компании</h3>
      <div className='flex  mx-auto py-16 pt-24  gap-12 justify-between'>
        <p className='text-black w-1/2 text-3xl font-semibold'>
          Группа компаний “Даниэль М” специализируется в логистике, дистрибьюции и производстве хлебобулочных изделий.<br/>
          Основные принципы нашего взаимодействия с партнерами - это принципы открытости и надежности.
        </p>
        <img src={FoodAbout} alt='BreadPhoto' className=''/>
      </div>

      <div className='flex flex-col w-1/2 gap-x-12 gap-y-8'>
        <div className='flex gap-6 border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
          <div className='flex items-center'>
            
            <div ><p className='text-5xl mt-[-10px] text-main font-bold'> &#62;</p></div>
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.5,
              })}
              animateToNumber={300}
              fontStyle={{
                width: 32,
                height: 42,
                fontSize: '3rem',
                color: "#71B4BE",
              }}
            />
          </div>
          <p className='leading-none	'>Cотрудников работают в нашей компании</p>
        </div>

        <div className='flex gap-6 items-center border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.5,
            })}
            animateToNumber={65}
            fontStyle={{
              width: 32,
              height: 44,
              fontSize: '3rem',
              color: "#71B4BE",
            }}
          />                    Автомобилей в собственном парке
        </div>

        <div className='flex gap-6 items-center 	 border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
          <div className='flex items-center'>
            <p className='text-5xl  mt-[-10px]  text-main font-bold'> &#62;</p>
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.5,
              })}
              animateToNumber={2000}
              fontStyle={{
                width: 32,
                height: 42,
                fontSize: '3rem',
                color: "#71B4BE",
              }}
            />
          </div>
          <p className='leading-none'>
          Площадь складских помещений
          </p>
        </div>

        <div className='flex gap-6 items-center border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
          <div className='flex items-center'>
            <p className='text-5xl  mt-[-10px] text-main font-bold'> &#62;</p>
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.5,
              })}
              animateToNumber={3000}
              fontStyle={{
                height: 44,
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
  );
}

export default About;
