import { connect } from "react-redux";
import { 
    addToBuy,
    addToWish,
    removeToBasket,
    removeWish,
    saveAuto
 } from "./redux/mainReduser";
import App from "./App";
const mapStateToProps = (state) => ({
    state: state.mainPage 
})
const mapDispatchToProps = {
    addToBuy,
    addToWish,
    removeToBasket,
    removeWish,
    saveAuto
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

