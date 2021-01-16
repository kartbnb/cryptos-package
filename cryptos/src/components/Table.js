import React from 'react';
import Row from './Row';

const Table = props => {
    const coins = props.coins.map(coin => {
        return <Row coin={coin} key={coin.name}/>
    })
    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>1m</th>
                    <th>24d Volume</th>
                    <th>Mkt Cap</th>
                </tr>
            </thead>
            <tbody>
                {coins}
            </tbody>
        </table>
    )
}

export default Table