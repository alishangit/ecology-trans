import React from "react";
import ContentContainer from "@/app/components/containers/ContentContainer/ContentContainer";
import EarningItem from "../EarningItem/EarningItem";
import { IconListEnum } from "../../../../../icons/icons-list.enum";

const EarningsBlock = () => {
  return (
    <ContentContainer>
      <EarningItem
        iconName={IconListEnum.plusIcon}
        title="Начислено за рейсы:"
      />
      <EarningItem
        iconName={IconListEnum.plusIcon}
        title="Заблокировано за рейсы:"
      />
    </ContentContainer>
  );
};

export default EarningsBlock;
