import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import InputMask from 'react-input-mask';
import closeIcon from "/close.png";

interface FormProps {
    text: string;
}

const FeedbackForm: React.FC<FormProps> = ({ text }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [company, setCompany] = useState('');

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/BCaWXjk130y", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, phone, company })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("Мы получили ваше обращение, спасибо!");
                }
            })

    }

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLDivElement).id === 'modal-background') {
            handleClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        } else {
            document.removeEventListener('keydown', handleEscKey);
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen]);

    return (
        <div className='z-50'>
            <Button text={text} onClick={handleOpen} color='main'></Button>

            {isOpen && (
                <div
                    id='modal-background'
                    onClick={handleBackgroundClick}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300"
                >
                    <div className="relative w-full md:w-1/3 p-8 py-16 rounded-lg bg-[url('/bgLanding.png')] bg-no-repeat bg-cover">
                        {/* Overlay Layer using Pseudo-element */}
                        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

                        {/* Form Content */}
                        <div className="relative flex justify-center items-center z-10">
                            <button
                                className="absolute w-[16px] h-[16px] top-[-1rem] right-[-1rem] text-black"
                                onClick={handleClose}
                            >
                                <img src={closeIcon} alt="Close" />
                            </button>
                            <form className="flex w-2/3  flex-col gap-4 rounded-2xl" onSubmit={onSubmit}>
                                <div className='flex w-full gap-8'>
                                    <div className="w-full flex flex-col gap-4">
                                        <input
                                            className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                                            placeholder="Имя"
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <input
                                            className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                                            placeholder="Название юридического лица"
                                            type="text"
                                            id="company"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            required
                                        />
                                        <InputMask
                                            className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                                            placeholder="Телефон"
                                            id="phone"
                                            mask="+7(999)-999-99-99"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                        <input
                                            className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='text-white' htmlFor="opd">
                                        <input type="checkbox" id="opd" className="mr-2" />
                                        Согласен с обработкой <a href="/policy.pdf" download className="text-main underline">Персональных данных</a>
                                    </label>
                                </div>
                                <button className="w-4/5 ml-auto md:w-1/3 text-center p-3 bg-main rounded-xl text-white border border-main items-end hover:bg-transparent hover:text-main text-xl transition-all duration-300" type="submit">
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default FeedbackForm;
