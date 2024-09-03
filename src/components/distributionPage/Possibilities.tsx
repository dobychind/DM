import handshake from '/handshake.png';
import delivery from '/deliverydist.png';
import bread from '/breaddist.png';
import support from '/marketing_support.png';   
import ctm from '/ctm.png'

const Possibilities = () => {
    return (
        <div className='font-body'>
            <div className="flex flex-col gap-8 justify-center items-center">
                <h3 className="text-3xl font-bold">Наши возможности</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[90%]">
                    <div className="flex flex-col-reverse gap-2 border items-center justify-center rounded-2xl p-3">
                       <p className='text-center'>
                            Производство хлебобулочной продукции под СТМ
                        </p>
                        <img src={ctm} width={72}  alt="Производство СТМ" />
                    </div>
                    <div className="flex flex-col-reverse gap-2 border items-center justify-center rounded-2xl p-3">
                       <p className='text-center'>
                            Прямые стабильные поставки свежей продукции
                        </p>
                        <img src={delivery} width={72}  alt="Быстрая доставка" />

                    </div>
                    <div className="flex flex-col-reverse gap-2 border items-center justify-center rounded-2xl p-3">
                       <p className='text-center'>
                            Маркетинговая поддержка
                        </p>
                        <img src={support} width={72}  alt="Поддержка"/>

                    </div>
                    <div className="flex flex-col-reverse gap-2 border items-center justify-center rounded-2xl p-3">
                       <p className='text-center'>
                            Широкий ассортимент продукции
                        </p>
                        <img src={bread} width={72}  alt="Хлеб" />

                    </div>
                    <div className="flex flex-col-reverse gap-2 border items-center justify-center rounded-2xl p-3">
                       <p className='text-center'>
                            Гибкие условия сотудничества
                        </p>
                        <img src={handshake} width={72}  alt="Рукопожатие" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Possibilities