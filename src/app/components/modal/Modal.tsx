import React from 'react';
import classes from './Modal.module.css'

const Modal = () => {
    return (
        <div className={classes.modal}>
            <div className={classes.line}></div>
            <div className={classes.modalTitle}>
                <h3 className={classes.title}>
                    Вы действительно уверены, что хотите выбрать 'Название авто'
                </h3>
                <p className={classes.subTitle}>
                    После выбора автомобиля он сбрасывается в системе у других водителей
                </p>
            </div>
            <div>
                <button className={classes.modalButtonsConfirmed}>Подтвердить</button>
                <button className={classes.modalButtonsCancel}>Отменить</button>
            </div>
        </div>
    );
}

export default Modal;
