import { connect} from "react-redux";
import {
    addToBuy,
    addToWish,
    removeToBasket,
    removeWish,
} from "../../redux/mainReduser"
import Wish from "./wish";

const mapStateToProps = (state) => ({
    auto: state.mainPage.auto,
    wishList: state.mainPage.wishList,
    basketList: state.mainPage.basketList,
    countWish: state.mainPage.countWish,
    countBuy: state.mainPage.countBuy,
})

const mapDispatchToProps = {
    addToBuy,
    addToWish,
    removeToBasket,
    removeWish,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wish)