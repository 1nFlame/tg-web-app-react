import React, {useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Штаны Square Pants Wide', price: 7200, description: 'Бордовый цвет. Size: S/M/L'},
    {id: '2', title: 'Штаны Warfare COR', price: 11000, description: 'Черный цвет. Size: S/M/L'},
    {id: '3', title: 'Штаны Crosscargo 3 COR', price: 8200, description: 'NAVY цвет. Size: S/M/L'},
    {id: '4', title: 'Анорак Square Wide ', price: 8000, description: 'Зеленый Темный цвет. Size: S/M/L'},
    {id: '5', title: 'Пончо Punch', price: 4000 , description: 'Черный цвет. Size: L'},
    {id: '6', title: 'Анорак Mob Long', price: 3600 , description: 'Черный цвет. Size: M'},
    {id: '7', title: 'Панама Bucket', price: 1900, description: 'Черный цвет. Size: S'},
    {id: '8', title: 'Сумка-авоська Tote', price: 1000 , description: 'Болотный цвет. One Size'},
    {id: '9', title: 'Футболка Regular 4incognito', price: 2700, description: 'Синий темный цвет. Size:XS/S/M'},
    {id: '10', title: 'Шапка Incognito', price: 1300, description: 'Деним винтаж цвет. One Size'},
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0)
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);

        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if(newItems.length === 0) {
            tg.MainButton.hide();
        }  else {
            tg.MainButton.show();
            tg.MainButton.setParams( {
                text: `Оформить заказ на ${getTotalPrice(newItems)} `
            })

        }
    }
    return (
        <div className={'list'}>
            {products.map(item =>(
                <ProductItem
                product={item}
                onAdd={onAdd}
                className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
