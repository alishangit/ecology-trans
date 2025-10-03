import React from 'react';
import classes from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <p className={classes.ecoTrans}>
                    Экотранс
                </p>
                <p className={classes.userName}>
                    Иванов И
                </p>
            </div>
            <div className={classes.input}>
                <div>
                    <input className={classes.inputDate} type="date" />
                    <p>За сегодня</p>
                    <span>0,00rub</span>
                </div>
                <div>
                    <input className={classes.inputDate} type="date" />
                    <p>За месяц</p>
                    <span>0,00rub</span>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
