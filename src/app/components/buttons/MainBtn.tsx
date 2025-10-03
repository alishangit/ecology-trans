import React from 'react';
import classes from './MainBtn.module.css'
import { manrope } from '@/app/layout';
import Icon from '../../../../icons/Icon';
import { IconListEnum } from '../../../../icons/icons-list.enum';

const MainBtn = () => {
    return (
       <button className={ `${classes.mainBtn} ${manrope.className}`}> 
            <Icon
            width={12}
            height={12}
            color="#fff"
            name={IconListEnum.plusIcon}
            />
            Добавить ТО
       </button>
    );
}

export default MainBtn;
