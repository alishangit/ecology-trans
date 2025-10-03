import React from "react";
import classes from "./AmountItem.module.css";

interface AmountItemProps {
  amount: string;
  status?: "active" | "blocked";
}

const AmountItem = ({ amount, status = "active" }: AmountItemProps) => {
  return (
    <div
      className={`${classes.amountItem} ${
        status === "blocked" ? classes.blocked : ""
      }`}
    >
      <p className={classes.amountItemText}>{amount}</p>
    </div>
  );
};

export default AmountItem;
