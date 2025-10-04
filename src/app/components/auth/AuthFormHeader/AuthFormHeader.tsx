import React from "react";
import classes from "./AuthFormHeader.module.css";

interface IAuthFormHeader {
  title: string;
  text: string;
}
const AuthFormHeader = ({ title, text }: IAuthFormHeader) => {
  return (
    <div className={classes.authForm}>
      <h2 className={classes.authFormTitle}>{title}</h2>
      <p className={classes.authFormText}>{text}</p>
    </div>
  );
};

export default AuthFormHeader;
