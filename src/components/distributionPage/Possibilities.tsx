import handshake from '/handshake.png';
import delivery from '/deliverydist.png';
import bread from '/breaddist.png';
import support from '/marketing_support.png';   
import ctm from '/ctm.png';

const Possibilities = () => {
    return (
        <div className="font-body md:p-6 bg-[url('/backcorp.png')] bg-cover rounded-lg md:rounded-2xl">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h3 className="text-3xl min-[1920px]:text-5xl font-bold">Наши возможности</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                    {[
                        { img: ctm, text: 'Производство хлебобулочной продукции под СТМ', alt: 'Производство СТМ' },
                        { img: delivery, text: 'Прямые стабильные поставки свежей продукции', alt: 'Быстрая доставка' },
                        { img: support, text: 'Маркетинговая поддержка', alt: 'Поддержка' },
                        { img: bread, text: 'Широкий ассортимент продукции', alt: 'Хлеб' },
                        { img: handshake, text: 'Гибкие условия сотрудничества', alt: 'Рукопожатие' },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col-reverse gap-2 border border-black items-center justify-center rounded-2xl p-6 min-h-[300px] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <p className='text-center min-h-24 w-full text-md lg:text-xl xl:text-2xl font-semibold'>
                                {item.text}
                            </p>
                            <img src={item.img} width={150} alt={item.alt} className="transition-opacity duration-300 hover:opacity-90" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Possibilities;
