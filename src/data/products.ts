export interface Product {
    id: number;
    name: string;
    type: string;
    category: string;
    image: string;
    manufacturer: string;
}

export const products: Product[] = [
    { id: 1, name: 'Плюшка московская', type: 'Свежий хлеб' ,category: 'Сдоба', image: '/products/plushkamos.jpg', manufacturer: 'ХПП №1' },
    { id: 2, name: 'Хлеб Бородинский', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/hlebborod.jpg', manufacturer: 'ХПП №1' },
    { id: 3, name: 'Слойка с фруктовой начинкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Slojkafruct.jpg', manufacturer: 'ХПП №1' },
    { id: 4, name: 'Слойка с сыром', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/slojkasyr.jpg', manufacturer: 'ХПП №1' },
    { id: 5, name: 'Хлеб Дарницкий', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/hlebdarnic.jpg', manufacturer: 'ХПП №1' },
    { id: 6, name: 'Хлебец докторский', type: 'Свежий хлеб' , category: 'Хлебцы', image: '/products/hlebecdoct.jpg', manufacturer: 'ХПП №1' },
    { id: 7, name: 'Чиабатта пшеничная', type: 'Свежий хлеб' , category: 'Чиабатта', image: '/products/pshenchiabatta.jpg', manufacturer: 'ХПП №1' },
    { id: 8, name: 'Хлеб солодовый заварной', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/hlebsolod.jpg', manufacturer: 'ХПП №1' },
    { id: 9, name: 'Хлебец многозерновой светлый', type: 'Свежий хлеб' , category: 'Хлебцы', image: '/products/hlebec.jpg', manufacturer: 'ХПП №1' },
    { id: 10, name: 'Чиабатта ржаная с семечками', type: 'Свежий хлеб' , category: 'Чиабатта', image: '/products/RzanayaChiabattaSem.jpg', manufacturer: 'ХПП №1' },
    { id: 11, name: 'Язычок с сахаром', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/JazykSahar.jpg', manufacturer: 'ХПП №1' },
    { id: 12, name: 'Чиабатта ржаная', type: 'Свежий хлеб' ,category: 'Чиабатта', image: '/products/RzanayaChiabatta.jpg', manufacturer: 'ХПП №1' },
    { id: 13, name: 'Багет ржаной с семечками', type: 'Свежий хлеб' , category: 'Багет', image: '/products/bagetrzhan.jpg', manufacturer: 'ХПП №1' },
    { id: 14, name: 'Багет крученый', type: 'Свежий хлеб' , category: 'Багет', image: '/products/bagetcruch.jpg', manufacturer: 'ХПП №1' },
    { id: 15, name: 'Багет классический', type: 'Свежий хлеб' , category: 'Багет', image: '/products/bagetclassic.jpg', manufacturer: 'ХПП №1' },
    { id: 16, name: 'Батон нарезной половинка', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/products/batonhalf.jpg', manufacturer: 'ХПП №1' },
    { id: 17, name: 'Бублик с маком', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/bublikmac.jpg', manufacturer: 'ХПП №1' },
    { id: 18, name: 'Берлинер с вишней', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/berlinervish.jpg', manufacturer: 'ХПП №1' },
    { id: 19, name: 'Берлинер с ванилью', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/berlinervanil.jpg', manufacturer: 'ХПП №1' },
    { id: 20, name: 'Берлинер со сгущенкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/berlinersgush.jpg', manufacturer: 'ХПП №1' },
    { id: 21, name: 'Берлинер с карамелью', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/berlinercaram.jpg', manufacturer: 'ХПП №1' },
    { id: 22, name: 'Булочка домашняя с маком', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/bulkamak.jpg', manufacturer: 'ХПП №1' },
    { id: 23, name: 'Булочка свердловская', type: 'Свежий хлеб' ,category: 'Сдоба', image: '/products/bulkasvedl.jpg', manufacturer: 'ХПП №1' },
    { id: 24, name: 'Булочка с повидлом', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/bulkapovidlo.jpg', manufacturer: 'ХПП №1' },
    { id: 25, name: 'Булочка для хот дога', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/hotdog.jpg', manufacturer: 'ХПП №1' },
    { id: 26, name: 'Булочка для гамбургера', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/hamburger.jpg', manufacturer: 'ХПП №1' },
    { id: 27, name: 'Круассан с шоколадом', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/products/kruassanchokolad.jpg', manufacturer: 'ХПП №1' },
    { id: 28, name: 'Круассан с фруктовой начинкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/kruassanfruct.jpg', manufacturer: 'ХПП №1' },
    { id: 29, name: 'Ватрушка с творогом', type: 'Кондитерские изделия' , category: 'Сдоба', image: '/products/vatrushkatvorog.jpg', manufacturer: 'ХПП №1' },
    { id: 30, name: 'Кольцо песочное', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/products/kolcotvorog.jpg', manufacturer: 'ХПП №1' },
    { id: 31, name: 'Матнакаш', type: 'Свежий хлеб' , category: 'Лепешка', image: '/products/matnakash.jpg', manufacturer: 'ХПП №1' },
    { id: 32, name: 'Лепешка узбекская с кунжутом', type: 'Свежий хлеб' , category: 'Лепешка', image: '/products/uzbeklepeshka.jpg', manufacturer: 'ХПП №1' },
    { id: 33, name: 'Лаваш ПУРИ', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavashpuri.jpg', manufacturer: 'ХПП №1' },
    { id: 34, name: 'Лаваш ШОТИ', type: 'Свежий хлеб' ,category: 'Лаваш', image: '/products/lavashshoti.jpg', manufacturer: 'ХПП №1' },
    { id: 35, name: 'Лепешка восточная', type: 'Свежий хлеб' , category: 'Лепешка', image: '/products/vostoklepesh.jpg', manufacturer: 'ХПП №1' },
    { id: 36, name: 'Лаваш армянский премиум', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavasharmen.jpg', manufacturer: 'ХПП №1' },
    { id: 37, name: 'Лаваш армянский 250 гр', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavasharman2.jpg', manufacturer: 'ХПП №1' },
    { id: 38, name: 'Лаваш армянский ролл', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavasharmanroll.jpg', manufacturer: 'ХПП №1' },
    { id: 39, name: 'Лаваш армянский ручная работа', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavasharmanhand.jpg', manufacturer: 'ХПП №1' },
    { id: 40, name: 'Лаваш тонкий круглый в упаковке', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavashround.jpg', manufacturer: 'ХПП №1' },
    { id: 41, name: 'Лаваш тонкий круглый ХПП №1', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/lavashroundhpp.jpg', manufacturer: 'ХПП №1' },
];
