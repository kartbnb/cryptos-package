import React from 'react';

const Row = ({ coin, index }) => {

    // if percentage positive or zero show green otherwise show red
    const getBackground = (value) => {
        if(value >= 0) {
            return "positive";
        } else {
            return "negative";
        };
    };

    // if percentage positive show up angle, zero no angle shown and negative show down angle
    const getAngle = (value) => {
        if(value > 0) {
            return "angle up icon";
        };
        if(value < 0) {
            return "angle down icon";
        };
        if(value === 0) {
            return "";
        };
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{coin.name}</td>
            <td>${coin.price}</td>
            <td className={getBackground(coin.one_day)}><i className={getAngle(coin.one_day)}></i>{coin.one_day}%</td>
            <td className={getBackground(coin.seven_day)}><i className={getAngle(coin.seven_day)}></i>{coin.seven_day}%</td>
            <td className={getBackground(coin.one_month)}><i className={getAngle(coin.one_month)}></i>{coin.one_month}%</td>
            <td>${coin.volume.toLocaleString()}</td>
            <td>${coin.market.toLocaleString()}</td>
        </tr>
    );
};

export default Row;