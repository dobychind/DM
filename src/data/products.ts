export interface Product {
    id: number;
    name: string;
    type: string;
    category: string;
    price: number;
    image: string;
    manufacturer: string;
}

export const products: Product[] = [
    { id: 1, name: 'Черный хлеб 1', type: 'Свежий хлеб' ,category: 'Черный хлеб', price: 10, image: 'https://via.placeholder.com/150', manufacturer: 'ХПП' },
    { id: 2, name: 'Белый хлеб 1', type: 'Свежий хлеб' , category: 'Белый хлеб', price: 20, image: 'https://via.placeholder.com/150', manufacturer: 'Новгород Хлеб' },
    { id: 3, name: 'Сдоба 1', type: 'Свежий хлеб' , category: 'Сдоба', price: 30, image: 'https://via.placeholder.com/150', manufacturer: 'Ржевка Хлеб' },
    { id: 4, name: 'Черный хлеб 2', type: 'Свежий хлеб' , category: 'Черный хлеб', price: 40, image: 'https://via.placeholder.com/150', manufacturer: 'Новгород Хлеб' },
    { id: 5, name: 'Белый хлеб 2', type: 'Свежий хлеб' , category: 'Белый хлеб', price: 50, image: 'https://via.placeholder.com/150', manufacturer: 'ХПП' },
    { id: 6, name: 'Сдоба 2', type: 'Свежий хлеб' , category: 'Сдоба', price: 60, image: 'https://via.placeholder.com/150', manufacturer: 'Ржевка Хлеб' },
    { id: 7, name: 'Черный хлеб 2', type: 'Свежий хлеб' , category: 'Черный хлеб', price: 40, image: 'https://via.placeholder.com/150', manufacturer: 'Новгород Хлеб' },
    { id: 8, name: 'Белый хлеб 2', type: 'Свежий хлеб' , category: 'Белый хлеб', price: 50, image: 'https://via.placeholder.com/150', manufacturer: 'ХПП' },
    { id: 9, name: 'Сдоба 2', type: 'Свежий хлеб' , category: 'Сдоба', price: 60, image: 'https://via.placeholder.com/150', manufacturer: 'Ржевка Хлеб' },
    { id: 10, name: 'Вафля 1', type: 'Кондитерские изделия' , category: 'Вафли', price: 60, image: 'https://via.placeholder.com/150', manufacturer: 'Ржевка Хлеб' },
    { id: 11, name: 'Печенье 1', type: 'Кондитерские изделия' , category: 'Печенье', price: 60, image: 'https://via.placeholder.com/150', manufacturer: 'ХПП' },

];
