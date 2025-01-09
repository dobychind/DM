import newF from '/new.svg';
import quality from '/qualityfactory.svg';
import point from '/point.svg';   
import factory from '/factoryfactory.svg';

const Possibilities = () => {
    return (
        <div className="font-body p-6 bg-[url('/backcorp.png')] bg-cover rounded-2xl">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h3 className="text-4xl min-[1920px]:text-5xl font-bold">Наши возможности</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
                    {[
                        { img: newF, text: 'Современное оборудование', alt: 'Современное оборудование' },
                        { img: quality, text: 'Контроль качества', alt: 'Контроль качества' },
                        { img: point, text: 'Стратегическое местоположение', alt: 'Стратегическое местоположение' },
                        { img: factory, text: 'Ответственный производитель', alt: 'Ответственный производитель' },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col-reverse gap-2 border border-bg  items-center justify-center rounded-2xl p-6 md:min-h-[300px] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <p className='text-center md:min-h-24 w-full text-lg md:text-md lg:text-xl xl:text-2xl font-semibold'>
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
