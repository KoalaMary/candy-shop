const initialState = [
    {
        id: 1,
        name: 'Карамель',
        price: 20,
        image: 'http://cosmetic.ua/uploads/spool/photo/00000022597-filename-00001-normal.jpg'
    },
    {
        id: 2,
        name: 'Леденец',
        price: 30,
        image: 'https://static-eu.insales.ru/images/products/1/118/88612982/edenets-na-palochke-lolli-fruktovoe-assorti-55-g-2.jpg'
    },
    {
        id: 3,
        name: 'Капкейк',
        price: 120,
        image: 'http://sladko57.ru/images/gal/kap8.jpg'
    },
    {
        id: 4,
        name: 'Чизкейк',
        price: 320,
        image: 'https://pp.userapi.com/c622430/v622430261/488aa/0uLGXyvisyU.jpg'
    },
    {
        id: 5,
        name: 'Шоколад',
        price: 70,
        image: 'http://dfm.ru/upload/contents/335/Chocolate.jpg'
    }
];

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}