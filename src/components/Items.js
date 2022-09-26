import { useEffect, useState } from "react";

const Items = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://proxima-market-api.herokuapp.com/api/items')
        .then(res => res.json())
        .then((data) => {
            setItems(data.items);
        })
    }, []);
    return (
    <ul>
        {items.map((item) => (
            <div class="item-box">
                <img alt={item.item_name} src={item.img_url} />
            <li key={item.item_id}>{item.item_name}</li>
            <p class="item-description">{item.description}</p>
            <button class="item-button" onClick={() => {
                const currentBasket = props.basket;
                if (currentBasket[item.item_id]) {
                    currentBasket[item.item_id].quantity++;
                } else {
                    const addToBasket = {
                        name: item.item_name,
                        quantity: 1
                    };
                    currentBasket[item.item_id] = addToBasket;
                }
                props.setBasket(currentBasket);
            }}>Add to basket</button>
            </div>
        ))}
    </ul>
    );
}

export default Items;