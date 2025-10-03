import React from "react";
import classes from "./TabContainer.module.css";
import TabItem from "../TabItem/TabItem";
import { IconListEnum } from "../../../../../icons/icons-list.enum";

const TabContainer = () => {
  return (
    <div className={classes.tabBar}>
      <TabItem title="Главная" iconName={IconListEnum.plusIcon} />
      <TabItem title="Статистика" iconName={IconListEnum.plusIcon} />
      <TabItem title="Профиль" iconName={IconListEnum.plusIcon} />
    </div>
  );
};

export default TabContainer;
