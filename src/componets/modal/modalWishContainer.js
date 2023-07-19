import { connect } from "react-redux";

import { 
    confirmWish,
    handelWishCancel
 } from "../../redux/mainReduser"
import Modal from "./modal";

 const mapStateToProps = (state) => ({
    modalInfo: state.mainPage.wishModal,
    count: state.mainPage.countWish,
    list: state.mainPage.wishList
 })
 const mapDispatchToProps = { 
    handelCancel: handelWishCancel,
    handelConfirm: confirmWish
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Modal)