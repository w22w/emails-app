import React from 'react'
import { createPortal } from 'react-dom'
import css from './Modal.module.scss'
import ClassNames from 'classnames'

const Modal = (props) => {
    
    const { onClose, autoHeight } = props
    
    const onLocalClick = (e) => {
        e && e.stopPropagation && e.stopPropagation()
    }
    
    return createPortal(
        <div className={css.Modal}>
            <div className={css.BackDrop} onClick={onClose}/>
            <div className={ClassNames(css.Body, {
                [ css.AutoHeight ]: autoHeight
            })} onClick={onLocalClick}>
                {props.children}
            </div>
        
        </div>,
        document.getElementById('portal'))
}

export default Modal
