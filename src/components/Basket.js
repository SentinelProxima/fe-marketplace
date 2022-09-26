const Basket = (props) => {
    return (
        <section>
        {props.basket.filter((item) => item).map((item) => {
            return (
                <div class="basket">
                <h3 class="basket-item">{item.name}: {item.quantity}</h3>
                <button class="basket-button" onClick={() => {
                    const currentBasket = props.basket.filter((thing => {
                        return thing.name !== item.name;
                    }))
                    props.setBasket(currentBasket);
                }}>Remove</button>
                </div>
            )
        })}
        </section>
    )
}

export default Basket;