export const handleBuy = (idCandidate) => {
        props.addToBuy(idCandidate)
    }
export const handleWish = (idCandidate) => {
        props.addToWish(idCandidate)
    }
export const handleRemoveWish = (idCandidate) => {
       props.removeToBasket(idCandidate)
        localStorage.setItem('countWish', props.state.countWish);
        localStorage.setItem('wishList', JSON.stringify(props.state.wishList))
    }

export const handleRemoveBasket = (idCandidate,removeWish) => {
       removeWish(idCandidate)
        localStorage.setItem('basketList', JSON.stringify(props.state.basketList))
        localStorage.setItem('countBuy',props.state.countBuy)
    }