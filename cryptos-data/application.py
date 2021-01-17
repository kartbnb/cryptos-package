from flask import Flask
from flask_cors import CORS
from csvreader import CsvReader
import json

app=Flask(__name__)
CORS(app)

return_default = {'return_code': '200', 'return_info': 'success', 'result': False}
coins = ['tezos', 'bitcoin', 'bnb', 'bitcoin-cash', 'cardano', 'eos', 'ethereum', 'litecoin', 'stellar', 'tether', 'xrp']
file_reader = CsvReader()


@app.route("/", methods=["GET"])
def getData():
    result = []
    for coin in coins:
        latest = file_reader.getLatest(coin)
        one_day_change = file_reader.getDayChange(coin, 1)
        seven_day_change = file_reader.getDayChange(coin, 7)
        one_month_change = file_reader.getDayChange(coin, 30)
        row_for_coin = {}
        row_for_coin = {
            'name': coin, 
            'price': float(latest['Open'].replace(',', '')), 
            'one_day': one_day_change, 
            'seven_day': seven_day_change, 
            'one_month': one_month_change,
            'volume': int(latest['Volume'].replace(',', '')),
            'market': int(latest['Market Cap'].replace(',', ''))}
        result.append(row_for_coin)
    return_dict = return_default.copy()
    return_dict['result'] = result
    return return_dict

