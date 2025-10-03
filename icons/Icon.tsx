import React from 'react';
import { IconListEnum } from './icons-list.enum';
import PlusIcon from './list/PlusIcon';



interface IIconProps {
  name: IconListEnum;
  width: number;
  height: number;
  color: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string;
}
const Icon = ({
  name,
  width,
  height,
  color,
  onClick,
  className
}: IIconProps) => {
 

 
    if (name === IconListEnum.plusIcon)
    return <PlusIcon width={width} height={height} color={color} />;
  return <></>;
};

export default Icon;
