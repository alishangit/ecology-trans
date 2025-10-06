import React from "react";
import classes from "./Modal.module.css";
import MainBtn from "../buttons/MainBtn";

interface IModal {
    title?: string
    text?: string
}

const Modal = ({title, text}: IModal) => {
  return (
    <div className={classes.modal}>
      <div className={classes.line}></div>
      <div className={classes.modalTitle}>
        <h3 className={classes.title}>
          Вы действительно уверены, что хотите выбрать Название авто
        </h3>
        <p className={classes.subTitle}>
          После выбора автомобиля он сбрасывается в системе у других водителей
        </p>
      </div>
      <div className={classes.buttonSection}>
        <MainBtn title="Подтвердить" />
        <MainBtn title="Отменить" button="secondary" />
      </div>
    </div>
  );
};

export default Modal;
