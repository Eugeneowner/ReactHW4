import {connect} from "react-redux"

import {
    handelBuyCancel,
    confirmOrder
} from "../../redux/mainReduser"

import Modal from "./modal"

const mapStateToProps = (state) => ({
    modalInfo: state.mainPage.basketModal,
    count: state.mainPage.countBuy,
    list: state.mainPage.basketList
})

const mapDispatchToProps = {
    handelCancel:handelBuyCancel,
    handelConfirm:confirmOrder
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)