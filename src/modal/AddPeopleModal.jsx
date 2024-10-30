import React from 'react'
import {useEffect,useRef,useState} from 'react'
import styles from '../styles/AddPeopleModal.module.css'

const AddPeopleModal = ({openPeopleAddedModal,setAddedToBoard,closeAddPeopleModal,displayAddPeopleModal}) => {
const AddPeopleModalContainerRef = useRef();

function checkClickOutside(e){
    if(displayAddPeopleModal && AddPeopleModalContainerRef.current && !AddPeopleModalContainerRef.current.contains(e.target)){
        closeAddPeopleModal();
    }
}
function handlesubmit() {
    
}
useEffect(()=>{
    document.addEventListener('mousedown',checkClickOutside)
    return()=>{
        document.removeEventListener('mousedown',checkClickOutside)
    }
},[displayAddPeopleModal])

  return (
    <div className={styles.AddPeopleModalContainer} ref={AddPeopleModalContainerRef}>
        <p className={styles.AddPeopletxt}>Add people to the board</p>
        <input className={styles.AddPeopleinput} type='email' placeholder='Enter the email'></input>
        <div className={styles.AddGroupButtonDiv}>
            <button className={styles.AddPeoplecancelbutton} onClick={() => {closeAddPeopleModal(); openPeopleAddedModal();}}>Cancel</button>
            <button className={styles.AddPeoplebutton} onClick={handlesubmit}>Add Email</button>
        </div>
    </div>
  )
}

export default AddPeopleModal;