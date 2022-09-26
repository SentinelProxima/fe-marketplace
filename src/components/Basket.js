const Basket = (props) => {
    return (
        <section>
        {props.basket.filter((item) => item).map((item) => {
            return <h2>{item.name}: {item.quantity}</h2>
        })}
        </section>
    )
}

export default Basket;