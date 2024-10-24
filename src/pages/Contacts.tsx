import { useState } from "react";
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import banner from '/contactsBanner.jpg'
import InputMask from 'react-input-mask';


const Contacts = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });

    if (response.ok) {
      alert('Message sent successfully');
    } else {
      alert('Failed to send message');
    }
  };
  return (
    <div className="flex flex-col w-full h-screen gap-6 bg-white">
      <Navbar logoname="DM" position="fixed" color="text-white" />
      <div className="w-full h-1/3 relative">
        <img src={banner} className="h-full w-full object-cover rounded-b-[56px] rounded-br-[56px]" alt="Баннер страницы контактов" />
        <h2 className="font-title absolute bottom-24 left-16 md:left-28 text-white text-5xl xl:text-7xl ">Наши контакты</h2>
      </div>


      <div className='flex w-full flex-col md:flex-row my-auto items-center justify-center mx-auto px-2 pb-8 gap-8 md:gap-0 lg:px-0'>
        <div className="flex flex-col gap-8 2xl:gap-12 h-full md:w-2/5 2xl:w-1/3">
          <div className='flex flex-col gap-1 font-semibold w-full'>
            <p className='text-black font-medium text-3xl'>Москва</p>
            <a href='tel:+7 (499) 653 53-94' className='font-normal text-black text-2xl'>+7 (499) 653 53-94</a>
            <a href="mailto:info@thdm.ru" className='text-black font-normal  text-2xl'>info@thdm.ru</a>
            <p className='text-black font-normal  text-2xl'>2-й Кожевнический переулок, д.12</p>
          </div>
          <div className='flex flex-col gap-1 font-semibold w-full'>
            <p className='text-black font-medium text-3xl'>Санкт-Петербург</p>
            <a href='tel:+7 (812) 622 12-46' className='font-normal text-black text-2xl'>+7 (812) 622 12-46</a>
            <a href="mailto:info@thdm.ru" className='text-black font-normal  text-2xl'>info@thdm.ru</a>
            <p className='text-black font-normal  text-2xl'>7-й Предпортовый проезд, д.10</p>

          </div>
        </div>


        <form className="flex w-full md:w-2/5 2xl:w-1/3 justify-center items-end flex-col gap-8 rounded-2xl" onSubmit={handleSubmit}>
          <div className='flex w-full gap-8 items-center'>
            <div className="w-full mr-auto flex flex-col gap-4">
              <input
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Имя"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Название юридического лица"
                type="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

              <InputMask
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Телефон"
                id="phone"
                mask="+7(999)-999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button className="w-4/5 md:w-1/3 text-center p-3 bg-main rounded-xl text-white border border-main items-end hover:bg-transparent hover:text-main text-xl" type="submit">Отправить</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts