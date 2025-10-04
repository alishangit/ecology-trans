import React from "react";
import classes from "./DriverTypeBtn.module.css";

interface IDriverTypeBtn {
  title: string;
  isChecked?: boolean;
  onChange: () => void;
}

const DriverTypeBtn = ({
  title,
  isChecked = false,
  onChange,
}: IDriverTypeBtn) => {
  return (
    <label
      className={`${classes.driverTypeBtn} ${isChecked ? classes.checked : ""}`}
    >
      <input
        type="checkbox"
        className={classes.driverTypeInput}
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span className={classes.driverTypeIcon}></span>
      {title}
    </label>
  );
};

export default DriverTypeBtn;
