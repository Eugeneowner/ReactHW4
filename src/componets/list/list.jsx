import s from './list.module.scss'
import ListItem from './listItem'

const List = (props) => {
    let AutoCollections = []
    const handleBuy = (idCandidate) => {
        props.addToBuy(idCandidate)
    }
    const handleWish = (idCandidate) => {
        props.addToWish(idCandidate)
    }
    const handleRemoveWish = (idCandidate) => {
       props.removeToBasket(idCandidate)
        localStorage.setItem('countWish', props.countWish);
        localStorage.setItem('wishList', JSON.stringify(props.wishList))
    }

    const handleRemoveBasket = (idCandidate) => {
       props.removeWish(idCandidate)
        localStorage.setItem('basketList', JSON.stringify(props.basketList))
        localStorage.setItem('countBuy',props.countBuy)
    }
    if (props.auto){
     AutoCollections = props.auto.map(autoItem => {
        return (
            <ListItem
                key = {autoItem.id}
                handleBuy = {handleBuy}
                handleWish = {handleWish}
                handleRemoveBasket = {handleRemoveBasket}
                handleRemoveWish = {handleRemoveWish}
                id = {autoItem.id} 
                img={autoItem.img} 
                name={autoItem.name}
                price={autoItem.price}
                wishList = {props.wishList}
                basketList = {props.basketList}
            />
        )
    }) } 
    return (
        <div className={s.main_products}>
            {AutoCollections}
        </div>
    )
}

export default List