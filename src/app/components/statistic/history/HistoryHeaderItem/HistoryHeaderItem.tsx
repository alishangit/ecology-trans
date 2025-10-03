import React from "react";
import classes from "./HistoryHeaderItem.module.css";

interface IHistoryHeaderItem {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}
const HistoryHeaderItem = ({
  title,
  onClick,
  isActive = false,
}: IHistoryHeaderItem) => {
  return (
    <button
      className={`${classes.historyHeaderItem} ${
        isActive ? classes.active : ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default HistoryHeaderItem;
