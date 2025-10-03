import React from "react";
import classes from "./TabItem.module.css";
import Icon from "../../../../../icons/Icon";
import { IconListEnum } from "../../../../../icons/icons-list.enum";

interface ITabItem {
  title: string;
  iconName: IconListEnum;
}

const TabItem = ({ title, iconName }: ITabItem) => {
  return (
    <div className={classes.tabItem}>
      <Icon
        name={iconName}
        width={24}
        height={24}
        color="var( --secondary-text-color)"
      />
      <p>{title}</p>
    </div>
  );
};

export default TabItem;
