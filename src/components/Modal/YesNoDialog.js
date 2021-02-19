import React from 'react'
import css from './Modal.module.scss'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

const YesNoDialog = (props) => {
    const { header, text, onClose, onSuccess } = props
    return (
        <div>
            <div className={css.Title}>
                {header}
                <div className={css.CloseButton} onClick={onClose}>X</div>
            </div>
            <div className={ClassNames(css.Content, css.ContentAutoHeight)}>
                <div className={css.Message}>{text}</div>
                <div className={css.ButtonsPanel}>
                    <button className={ClassNames(css.Button, css.Cancel)} onClick={onClose}>No</button>
                    <button className={ClassNames(css.Button, css.Ok)} onClick={onSuccess}>Yes</button>
                </div>
            </div>
        </div>
    )
}

YesNoDialog.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    onSuccess: PropTypes.func.isRequired
}

export default YesNoDialog
