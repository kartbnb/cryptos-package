import React from 'react';
import Row from './Row';

const Table = ({coins, sortData, currentKey}) => {
    // map all data to each row
    const coinsData = coins.map((coin, index) => {
        return <Row index={index} coin={coin} key={coin.name}/>;
    });

    // this resort function is using function inherited from App.js
    const reSort = (key) => {
        sortData(coins, key);
    };

    // get button class name to show different button style for head row
    const getButtonClass = (key) => {
        if (key === currentKey) {
            return "ui toggle button active";
        } else {
            return "ui toggle button";
        };
    };

    // get icon class name to show different icon style for head row
    const getIconClass = (key) => {
        if (key === currentKey) {
            return "sort down icon";
        } else {
            return "genderless icon";
        };
    };

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th><button className={getButtonClass('price')} onClick={(e) => reSort('price')}><i className={getIconClass('price')}></i>Price</button></th>
                    <th><button className={getButtonClass('one_day')} onClick={(e) => reSort('one_day')}><i className={getIconClass('one_day')}></i>24h</button></th>
                    <th><button className={getButtonClass('seven_day')} onClick={(e) => reSort('seven_day')}><i className={getIconClass('seven_day')}></i>7d</button></th>
                    <th><button className={getButtonClass('one_month')} onClick={(e) => reSort('one_month')}><i className={getIconClass('one_month')}></i>1m</button></th>
                    <th><button className={getButtonClass('volume')} onClick={(e) => reSort('volume')}><i className={getIconClass('volume')}></i>24d Volume</button></th>
                    <th><button className={getButtonClass('market')} onClick={(e) => reSort('market')}><i className={getIconClass('market')}></i>Mkt Cap</button></th>
                </tr>
            </thead>
            <tbody>
                {coinsData}
            </tbody>
        </table>
    );
};

export default Table