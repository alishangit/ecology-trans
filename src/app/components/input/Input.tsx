"use client";

import React from "react";
import classes from "./Input.module.css";
import { FieldError } from "react-hook-form";

interface IInput {
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  labelTitle?: string;
}
const Input = ({
  disabled = false,
  type,
  error,
  placeholder = "Введите пароль",
  labelTitle,
}: IInput) => {
  return (
    <>
      <label className={classes.labelMain} htmlFor="">
        {labelTitle}
      </label>
      <input
        id=""
        type={type}
        placeholder={placeholder}
        className={`${classes.inputMain} ${error ? classes.inputError : ""}`}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
