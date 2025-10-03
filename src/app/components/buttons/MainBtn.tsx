import React from "react";
import classes from "./MainBtn.module.css";
import Icon from "../../../../icons/Icon";
import { IconListEnum } from "../../../../icons/icons-list.enum";

interface IMainBtn {
  disabled?: boolean;
}

const MainBtn = ({ disabled = false }: IMainBtn) => {
  return (
    <button className={classes.mainBtn} disabled={disabled}>
      <Icon width={12} height={12} color="#fff" name={IconListEnum.plusIcon} />
      Добавить ТО
    </button>
  );
};

export default MainBtn;
