"use client";
import React, { useState } from "react";
import classes from "./HistoryHeader.module.css";
import HistoryHeaderItem from "../HistoryHeaderItem/HistoryHeaderItem";

const HistoryHeader = () => {
  const [activeItem, setActiveItem] = useState("Рейсы");
  return (
    <div className={classes.historyHeader}>
      <HistoryHeaderItem
        title="Рейсы"
        isActive={activeItem === "Рейсы"}
        onClick={() => setActiveItem("Рейсы")}
      />
      <HistoryHeaderItem
        title="ТО"
        isActive={activeItem === "ТО"}
        onClick={() => setActiveItem("ТО")}
      />
      <HistoryHeaderItem
        title="Бонусы"
        isActive={activeItem === "Бонусы"}
        onClick={() => setActiveItem("Бонусы")}
      />
    </div>
  );
};

export default HistoryHeader;
