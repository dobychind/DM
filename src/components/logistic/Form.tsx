import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import formImage from "/FormImage.png"
import InputMask from 'react-input-mask';
import closeIcon from "/close.png";

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isOpen, setIsOpen] = useState(false);

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
        <div>
            <Button text='Консультация с логистом' onClick={handleOpen} color='main'></Button>

            {isOpen && (
                <div id='modal-background' onClick={handleBackgroundClick}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full md:w-2/3 p-8 rounded-lg relative">

                        <button
                            className="absolute w-[16px] h-[16px] top-4 right-4 text-black"
                            onClick={handleClose}
                        >
                            <img src={closeIcon} alt="" />
                        </button>
                        <form className="flex justify-center items-center flex-col gap-8 md:p-8 rounded-2xl" onSubmit={handleSubmit}>
                            <p className="text-black text-3xl font-bold">Консультация с логистом</p>
                            <div className='flex gap-16 items-center'>
                                <div className="w-full mr-auto flex flex-col gap-4">
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="name">Ваше имя:</label>
                                        <input
                                            className="p-3 text-main font-semibold text-xl rounded-xl border-black border"
                                            placeholder="Имя"
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor="email">Почта:</label>
                                        <input
                                            className="p-3 text-main font-semibold text-xl rounded-xl border-black border"
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor="phone">Номер телефона:</label>
                                        <InputMask
                                            className="p-3 text-main font-semibold text-xl rounded-xl border-black border"
                                            placeholder="Телефон"
                                            id="phone"
                                            mask="+7(999)-999-99-99"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='hidden md:block md:w-full'>
                                    <img src={formImage} alt="" />
                                </div>
                            </div>

                            <button className="w-4/5 md:w-1/3 text-center p-3 bg-orange rounded-xl mt-4 text-white hover:bg-main text-xl" type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackForm;
