"use client";

import classes from "./TabContainer.module.css";
import TabItem from "../TabItem/TabItem";
import { useState } from "react";
import { IconListEnum } from "../../../../../icons/icons-list.enum";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("Главная");
  return (
    <div className={classes.tabBar}>
      <TabItem
        title="Главная"
        iconName={IconListEnum.plusIcon}
        isActive={activeTab === "Главная"}
        onClick={() => setActiveTab("Главная")}
      />
      <TabItem
        title="Статистика"
        iconName={IconListEnum.plusIcon}
        isActive={activeTab === "Статистика"}
        onClick={() => setActiveTab("Статистика")}
      />
      <TabItem
        title="Профиль"
        iconName={IconListEnum.plusIcon}
        isActive={activeTab === "Профиль"}
        onClick={() => setActiveTab("Профиль")}
      />
    </div>
  );
};

export default TabContainer;
