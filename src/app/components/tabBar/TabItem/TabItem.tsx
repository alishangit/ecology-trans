import classes from "./TabItem.module.css";
import Icon from "../../../../../icons/Icon";
import { IconListEnum } from "../../../../../icons/icons-list.enum";

interface ITabItem {
  title: string;
  iconName: IconListEnum;
  isActive?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TabItem = ({ title, iconName, isActive = false, onClick }: ITabItem) => {
  return (
    <button
      className={`${classes.tabItem} ${isActive ? classes.active : ""}`}
      onClick={onClick}
    >
      <Icon
        name={iconName}
        width={24}
        height={24}
        color={isActive ? "var(--cta-color)" : "var(--secondary-text-color)"}
      />
      <p className={classes.tabItemTitle}>{title}</p>
    </button>
  );
};

export default TabItem;
