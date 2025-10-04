import React from "react";
import classes from "./EarningItem.module.css";
import { IconListEnum } from "../../../../../icons/icons-list.enum";
import Icon from "../../../../../icons/Icon";
import AmountItem from "../Amount/AmountItem";

interface IEarningItem {
  iconName: IconListEnum;
  title: string;
}

const EarningItem = ({ iconName, title }: IEarningItem) => {
  return (
    <div className={classes.earningItem}>
      <div className={classes.earningItemDirection}>
        <Icon name={iconName} width={24} height={24} color="var(--cta-color)" />
        <p className={classes.earningItemTitle}>{title}</p>
      </div>
      <AmountItem amount="12 500 ₽" />
    </div>
  );
};

export default EarningItem;
