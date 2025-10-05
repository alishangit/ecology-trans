import React from "react";
import classes from "./MainBtn.module.css";
import Icon from "../../../../icons/Icon";
import { IconListEnum } from "../../../../icons/icons-list.enum";

type ButtonState = "default" | "secondary";

interface IMainBtn {
  title?: string;
  button?: ButtonState;
  disabled?: boolean;
  name?: IconListEnum;
}

const MainBtn = ({
  title,
  button = "default",
  disabled = false,
  name,
}: IMainBtn) => {
  const paddingStyle = name
    ? { padding: "12px 24px" }
    : { padding: "17px 24px" };

  return (
    <button
      className={`${classes.mainBtn} ${classes[`button-${button}`]}`}
      disabled={disabled}
      style={paddingStyle}
    >
      {name && (
        <Icon name={name} width={12} height={12} color="var(--color-white)" />
      )}
      {title}
    </button>
  );
};

export default MainBtn;
