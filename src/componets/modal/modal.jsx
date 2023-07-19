
import s from "./modal.module.scss";
/**
 *? Do you want to delete this file?
 * * Once you delete this file, it won't be possible to undo this action. Are
 * * you sure you want to delete it?
 */
const Modal = (props) => {
  const handleConfirm = () => {
    let countText = ''
    let listText = ''
    props.handelConfirm()
    if (props.modalInfo.type === "basket"){
       countText = 'countBuy'
       listText = 'basketList'
    } else { 
       countText = 'countWish'
       listText = 'wishList'
    }
      localStorage.setItem(`${countText}`, props.count)
      localStorage.setItem(`${listText}`, JSON.stringify(props.list))

  }


  return (
    <div className={s.modalContainer} onClick={props.handleCancel} >
      <div className={s.modal} onClick={(event)=> {event.stopPropagation()}}>
        <div className={s.upPanel}>
          <p className={s.textBold}>{props.modalInfo.title}</p>
          {props.closeButton ? 
          (<button className={s.btnExit} onClick={props.handleCancel}>
          <svg className={s.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Circle"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
          </button>) : null} 
          
        </div>
        <p className={s.textSmall}>
          {props.modalInfo.text}
        </p>
        <div className={s.btnsContainer}>
          <button className={s.btn} onClick={handleConfirm}>Confirm</button>
          <button className={s.btn} onClick={props.handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal