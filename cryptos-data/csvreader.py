import csv
class CsvReader:
    file_path = './crypto_historical_data.csv'
    table = {}
    table['data'] = []

    def __init__(self):
        with open(self.file_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                data = {'Currency': row['Currency'], 'Date': row['Date'], 'Open': row['Open'], 'High': row['High'], 'Low': row['Low'], 'Close': row['Close'], 'Volume': row['Volume'], 'Market Cap': row['Market Cap']}
                self.table['data'].append(data)

    # get the latest record for each coin
    def getLatest(self, coin):
        for row in self.table['data']:
            if row['Currency'] == coin:
                return row
    
    # get change percentage for specific coins and days
    def getDayChange(self, coin, days):
        for i in range(len(self.table['data'])):
            if self.table['data'][i]['Currency'] == coin:
                # use Open price for calculate
                current_price = self.table['data'][i]['Open']
                day_change_price = self.table['data'][i + days]['Open']
                current_price = current_price.replace(',', '')
                day_change_price = day_change_price.replace(',', '')
                # current price - day price / day price
                percentage = (float(current_price) * 100 - float(day_change_price) * 100) * 100 / (float(day_change_price) * 100)
                return percentage.__round__(2)