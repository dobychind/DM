import Stol from '/stol.png';
import Catering from '/catering.png';
import Horeca from '/horeca.png';
import Shops from '/shops.png';
import Roznica from '/Roznic.png';
import Goverment from '/gov.png';

const Delivery = () => {
    return (
        <div className=''>
            <h4 className='text-black text-3xl py-4 font-semibold text-center md:py-12 md:text-5xl'>Куда поставляем продукцию</h4>
            <div className='p-4 md:px-12 pb-8' data-aos="fade-down" data-aos-duration="3000" >
                <div className='grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-3 '>
                    <div className='p-6 flex flex-col justify-center items-center border-2 border-main rounded-2xl '>
                        <img src={Goverment} className='w-[80px]' alt="" />
                        <p className='text-2xl text-center font-semibold'>Государственные учреждения</p>
                    </div>
                    <div className='p-6 flex flex-col justify-center items-center border-2 border-main rounded-2xl '>
                        <img src={Catering} className='w-[80px]' alt="" />
                        <p className='text-2xl text-center font-semibold'>Кейтеринговые комании</p>
                    </div>
                    <div className='p-6 flex flex-col justify-center items-center border-2 border-main rounded-2xl '>
                        <img src={Stol} className='w-[80px]' alt="" />
                        <p className='text-2xl text-center font-semibold'>Корпоративные столовые</p>
                    </div>
                    <div className='p-6 flex flex-col justify-center items-center border-2 border-main rounded-2xl '>
                        <img src={Horeca} className='w-[80px]' alt="" />
                        <p className='text-2xl text-center font-semibold'>HoReCa</p>
                    </div>
                    <div className='p-6 flex flex-col justify-center items-center border-2 border-main rounded-2xl '>
                        <img src={Shops} className='w-[80px]' alt="" />
                        <p className='text-2xl text-center font-semibold'>Федеральные и региональные сети</p>
                    </div>
                    <div className='p-6 flex flex-col justify-center items-center border-2 border-main rounded-2xl'>
                        <img src={Roznica} className='w-[80px]' alt="" />
                        <p className='text-2xl text-center font-semibold'>Розничные клиенты</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Delivery