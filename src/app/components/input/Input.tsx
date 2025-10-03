import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Введите пароль"
        className={classes.inputMain}
      />
    </>
  );
};

export default Input;
