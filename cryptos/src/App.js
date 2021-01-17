import React from 'react';
import axios from 'axios';
import Table from './components/Table'

class App extends React.Component {

    state = { coins: [] };
    
    async componentDidMount() {
        // get api requests
        const response = await axios.get('http://127.0.0.1:5000')
        // sort data by key market
        const result = this.sortData(response.data.result, 'market')
        // set key and sorted data to state
        this.setState({ coins: result, currentKey: 'market' })
    }

    // this function is resorting data by specific key
    reSortData = (data, key) => {
        const newResult = this.sortData(data, key)
        this.setState({ coins: newResult, currentKey: key })
    }

    // this function is sorting data by specific key
    sortData(data, key) {
        // Use quick sort
        if (data.length === 0) {
            return []
        }
        if (data.length === 1) {
            return data
        }
        var leftChild = [];
        var rightChild = [];
        var i;
        for (i = 1; i < data.length; i++) {
            if (data[i][key] > data[0][key]) {
                leftChild.push(data[i])
            } else {
                rightChild.push(data[i])
            }
        }
        var left = this.sortData(leftChild, key)
        var right = this.sortData(rightChild, key)
        left.push(data[0])
        var result = [].concat(left, right)
        return result
    }

    render() {
        if (this.state.coins.length === 0) {
            // if no data show Loading
            return (
                <h1>Loading...</h1>
            )
        }
        return(
            <div>
                <Table coins={this.state.coins} sortData={this.reSortData} currentKey={this.state.currentKey}/>
            </div>
        )
        
        
    }
}

export default App;