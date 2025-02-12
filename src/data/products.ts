export interface Product {
    id: number;
    name: string;
    type: string;
    category: string;
    image: string;
    manufacturer: string;
}

export const products: Product[] = [
    { id: 1, name: 'Хлеб Бородинский', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/Borodin.png', manufacturer: 'ХПП №1' },
    { id: 2, name: 'Хлеб Дарницкий', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/Darnic.png', manufacturer: 'ХПП №1' },
    { id: 3, name: 'Хлеб солодовый заварной', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/Solod.png', manufacturer: 'ХПП №1' },
    { id: 4, name: 'Батон российский', type: 'Свежий хлеб' , category: 'Батон', image: '/products/Russian.png', manufacturer: 'ХПП №1' },
    { id: 5, name: 'Хлеб столичный', type: 'Свежий хлеб' , category: 'Черный хлеб', image: '/products/Stolic.png', manufacturer: 'ХПП №1' },
    { id: 6, name: 'Булка городская', type: 'Свежий хлеб' , category: 'Батон', image: '/products/Gorodsk.png', manufacturer: 'ХПП №1' },
    { id: 7, name: 'Батон нарезной половинка', type: 'Свежий хлеб' , category: 'Белый хлеб', image: '/products/BatHalf.png', manufacturer: 'ХПП №1' },
    { id: 8, name: 'Ватрушка с творогом', type: 'Кондитерские изделия' , category: 'Сдоба', image: '/products/Vatrushka.png', manufacturer: 'ХПП №1' },
    { id: 9, name: 'Берлинер с вишней', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/JamBer.png', manufacturer: 'ХПП №1' },
    { id: 10, name: 'Берлинер с ванилью', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/VanilBer.png', manufacturer: 'ХПП №1' },
    { id: 11, name: 'Берлинер с сгущенкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/SgushBer.png', manufacturer: 'ХПП №1' },
    { id: 12, name: 'Берлинер с карамелью', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/CarBer.png', manufacturer: 'ХПП №1' },
    { id: 13, name: 'Булочка для хот дога', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/HotDog.png', manufacturer: 'ХПП №1' },
    { id: 14, name: 'Булочка для гамбургера', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Gamburg.png', manufacturer: 'ХПП №1' },
    { id: 15, name: 'Круассан с шоколадом', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/ChocoCr.png', manufacturer: 'ХПП №1' },
    { id: 16, name: 'Круассан с фруктовой начинкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/FruitCr.png', manufacturer: 'ХПП №1' },
    { id: 17, name: 'Кольцо песочное c орехом', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Colc.png', manufacturer: 'ХПП №1' },
    { id: 18, name: 'Лаваш армянский 250 гр', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/ArmLav.png', manufacturer: 'ХПП №1' },
    { id: 19, name: 'Лаваш армянский ролл', type: 'Свежий хлеб' , category: 'Лаваш', image: '/products/ArmLavRoll.png', manufacturer: 'ХПП №1' },
    { id: 22, name: 'Плюшка Московская', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Moscow.png', manufacturer: 'ХПП №1' },
    { id: 23, name: 'Слойка с маком', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Mak.png', manufacturer: 'ХПП №1' },
    { id: 24, name: 'Лепешка с сыром', type: 'Свежий хлеб' , category: 'Лепешка', image: '/products/Cheese.png', manufacturer: 'ХПП №1' },
    { id: 25, name: 'Слойка с фруктовой начинкой', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Fruit.png', manufacturer: 'ХПП №1' },
    { id: 26, name: 'Cлойка с сыром', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Syr.png', manufacturer: 'ХПП №1' },
    { id: 27, name: 'Язычок с сахаром', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Sugar.png', manufacturer: 'ХПП №1' },
    { id: 28, name: 'Булочка с повидлом', type: 'Свежий хлеб' , category: 'Сдоба', image: '/products/Jam.png', manufacturer: 'ХПП №1' },
    { id: 29, name: 'Пшеничный багет', type: 'Свежий хлеб' , category: 'Багет', image: '/products/bagPsen.png', manufacturer: 'Мастеская Пшеничного' },
    { id: 30, name: 'Зерновой багет', type: 'Свежий хлеб' , category: 'Багет', image: '/products/bagZern.png', manufacturer: 'Мастеская Пшеничного' },
    { id: 31, name: 'Хлебцы с отрубями', type: 'Свежий хлеб' , category: 'Хлебцы', image: '/products/otrub.png', manufacturer: 'Мастеская Пшеничного' },
];
