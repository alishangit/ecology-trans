import React from "react";
import ContentContainer from "../../containers/ContentContainer/ContentContainer";
import Icon from "../../../../../icons/Icon";
import { IconListEnum } from "../../../../../icons/icons-list.enum";
import classes from "./EarningBy.module.css";

interface IEarningBy {
  title: string;
  price: number;
}
const EarningBy = ({ title, price }: IEarningBy) => {
  return (
    <ContentContainer>
      <div className={classes.earningByFlex}>
        <Icon
          name={IconListEnum.plusIcon}
          width={14}
          height={16}
          color="var(--cta-color)"
        />
        <div className={classes.earningBy}>
          <p className={classes.earningByTitle}>{title}</p>
          <p className={classes.earningByPrice}>{price}</p>
        </div>
      </div>
    </ContentContainer>
  );
};

export default EarningBy;
