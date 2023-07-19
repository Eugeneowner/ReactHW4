import s from './wish.module.scss' 
import ListItem from '../list/listItem'
import { Fragment } from "react"
const Wish = (props) => {
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
     const autoBuy = props.auto.filter(autoItem => {
        if (props.wishList.indexOf(autoItem.id) !== -1){
            return autoItem
        }
    })
        const AutoCollections = autoBuy.map(autoItem => {
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
    }) 
    return (
     <Fragment>
         <h1 style={{textAlign:"center", display:"block", color:"#352F40"}}>Favourite list</h1>
        <div className={s.main_products}>
            {
                AutoCollections
            }
        </div>
    </Fragment>
    )
}

export default Wish