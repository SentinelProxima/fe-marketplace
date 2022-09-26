import { useEffect, useState } from "react";

const Basket = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://proxima-market-api.herokuapp.com/api/items')
        .then(res => res.json())
        .then((data) => {
            setItems(data.items);
        })
    }, []);
    return (
        <section>
        {props.basket.filter((item) => item).map((item) => {
            return <h2>{item.name}: {item.quantity}</h2>
        })}
        </section>
    )
}

export default Basket;