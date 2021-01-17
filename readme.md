# cryptos data practice

This project is showing static cryptos coins data from a csv file

The backend is using flask(a python package) to read data from csv file and sending json api to the application

The frontend is using React.js to show all calculated data from json

Backend part is cryptos-data
Frontend part is cryptos

# Follow steps below to use the project
## 1.Backend

The backend of this project needs following packages:
        1. Flask
        2. flask_cors

1. activate venv environment, type following commands in terminal: 
        cd cryptos-data
        . venv/bin/activate

2. export flask app environment variable 
        export FLASK_APP=application.py

3. run flask application
        flask run

## 2.Frontend
The frontend of this project needs following packages:
        1. React
        2. axios

1. go to the folder and start the project:
        cd cryptos
        npm start
