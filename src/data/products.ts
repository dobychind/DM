export interface Product {
    id: number;
    name: string;
    type: string;
    category: string;
    image: string;
    manufacturer: string;
}

export const products: Product[] = [
    { id: 1, name: 'Плюшка московская', type: 'Свежий хлеб' ,category: 'Сдоба', image: '/DM/products/plushkamos.jpg', manufacturer: 'ХПП №1' },
    { id: 2, name: 'Хлеб Бородинский', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/DM/products/hlebborod.jpg', manufacturer: 'ХПП №1' },
    { id: 3, name: 'Слойка с фруктовой начинкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/Slojkafruct.jpg', manufacturer: 'ХПП №1' },
    { id: 4, name: 'Слойка с сыром', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/slojkasyr.jpg', manufacturer: 'ХПП №1' },
    { id: 5, name: 'Хлеб Дарницкий', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/DM/products/hlebdarnic.jpg', manufacturer: 'ХПП №1' },
    { id: 6, name: 'Хлебец докторский', type: 'Свежий хлеб' , category: 'Хлебцы', image: '/DM/products/hlebecdoct.jpg', manufacturer: 'ХПП №1' },
    { id: 7, name: 'Чиабатта пшеничная', type: 'Свежий хлеб' , category: 'Чиабатта', image: '/DM/products/pshenchiabatta.jpg', manufacturer: 'ХПП №1' },
    { id: 8, name: 'Хлеб солодовый заварной', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/DM/products/hlebsolod.jpg', manufacturer: 'ХПП №1' },
    { id: 9, name: 'Хлебец многозерновой светлый', type: 'Свежий хлеб' , category: 'Хлебцы', image: '/DM/products/hlebec.jpg', manufacturer: 'ХПП №1' },
    { id: 10, name: 'Чиабатта ржаная с семечками', type: 'Свежий хлеб' , category: 'Чиабатта', image: '/DM/products/RzanayaChiabattaSem.jpg', manufacturer: 'ХПП №1' },
    { id: 11, name: 'Язычок с сахаром', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/JazykSahar.jpg', manufacturer: 'ХПП №1' },
    { id: 12, name: 'Чиабатта ржаная', type: 'Свежий хлеб' ,category: 'Чиабатта', image: '/DM/products/RzanayaChiabatta.jpg', manufacturer: 'ХПП №1' },
    { id: 13, name: 'Багет ржаной с семечками', type: 'Свежий хлеб' , category: 'Багет', image: '/DM/products/bagetrzhan.jpg', manufacturer: 'ХПП №1' },
    { id: 14, name: 'Багет крученый', type: 'Свежий хлеб' , category: 'Багет', image: '/DM/products/bagetcruch.jpg', manufacturer: 'ХПП №1' },
    { id: 15, name: 'Багет классический', type: 'Свежий хлеб' , category: 'Багет', image: '/DM/products/bagetclassic.jpg', manufacturer: 'ХПП №1' },
    { id: 16, name: 'Батон нарезной половинка', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/DM/products/batonhalf.jpg', manufacturer: 'ХПП №1' },
    { id: 17, name: 'Бублик с маком', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/bublikmac.jpg', manufacturer: 'ХПП №1' },
    { id: 18, name: 'Берлинер с вишней', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/berlinervish.jpg', manufacturer: 'ХПП №1' },
    { id: 19, name: 'Берлинер с ванилью', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/berlinervanil.jpg', manufacturer: 'ХПП №1' },
    { id: 20, name: 'Берлинер со сгущенкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/berlinersgush.jpg', manufacturer: 'ХПП №1' },
    { id: 21, name: 'Берлинер с карамелью', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/berlinercaram.jpg', manufacturer: 'ХПП №1' },
    { id: 22, name: 'Булочка домашняя с маком', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/bulkamak.jpg', manufacturer: 'ХПП №1' },
    { id: 23, name: 'Булочка свердловская', type: 'Свежий хлеб' ,category: 'Сдоба', image: '/DM/products/bulkasvedl.jpg', manufacturer: 'ХПП №1' },
    { id: 24, name: 'Булочка с повидлом', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/bulkapovidlo.jpg', manufacturer: 'ХПП №1' },
    { id: 25, name: 'Булочка для хот дога', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/hotdog.jpg', manufacturer: 'ХПП №1' },
    { id: 26, name: 'Булочка для гамбургера', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/hamburger.jpg', manufacturer: 'ХПП №1' },
    { id: 27, name: 'Круассан с шоколадом', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/DM/products/kruassanchokolad.jpg', manufacturer: 'ХПП №1' },
    { id: 28, name: 'Круассан с фруктовой начинкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/DM/products/kruassanfruct.jpg', manufacturer: 'ХПП №1' },
    { id: 29, name: 'Ватрушка с творогом', type: 'Кондитерские изделия' , category: 'Сдоба', image: '/DM/products/vatrushkatvorog.jpg', manufacturer: 'ХПП №1' },
    { id: 30, name: 'Кольцо песочное', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/DM/products/kolcotvorog.jpg', manufacturer: 'ХПП №1' },
    { id: 31, name: 'Матнакаш', type: 'Свежий хлеб' , category: 'Лепешка', image: '/DM/products/matnakash.jpg', manufacturer: 'ХПП №1' },
    { id: 32, name: 'Лепешка узбекская с кунжутом', type: 'Свежий хлеб' , category: 'Лепешка', image: '/DM/products/uzbeklepeshka.jpg', manufacturer: 'ХПП №1' },
    { id: 33, name: 'Лаваш ПУРИ', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavashpuri.jpg', manufacturer: 'ХПП №1' },
    { id: 34, name: 'Лаваш ШОТИ', type: 'Свежий хлеб' ,category: 'Лаваш', image: '/DM/products/lavashshoti.jpg', manufacturer: 'ХПП №1' },
    { id: 35, name: 'Лепешка восточная', type: 'Свежий хлеб' , category: 'Лепешка', image: '/DM/products/vostoklepesh.jpg', manufacturer: 'ХПП №1' },
    { id: 36, name: 'Лаваш армянский премиум', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavasharmen.jpg', manufacturer: 'ХПП №1' },
    { id: 37, name: 'Лаваш армянский 250 гр', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavasharman2.jpg', manufacturer: 'ХПП №1' },
    { id: 38, name: 'Лаваш армянский ролл', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavasharmanroll.jpg', manufacturer: 'ХПП №1' },
    { id: 39, name: 'Лаваш армянский ручная работа', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavasharmanhand.jpg', manufacturer: 'ХПП №1' },
    { id: 40, name: 'Лаваш тонкий круглый в упаковке', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavashround.jpg', manufacturer: 'ХПП №1' },
    { id: 41, name: 'Лаваш тонкий круглый ХПП №1', type: 'Свежий хлеб' , category: 'Лаваш', image: '/DM/products/lavashroundhpp.jpg', manufacturer: 'ХПП №1' },
];
