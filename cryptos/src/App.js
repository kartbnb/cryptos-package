import React from 'react';
import axios from 'axios';
import Table from './components/Table'

class App extends React.Component {

    state = { coins: [] };
    
    async componentDidMount() {
        const response = await axios.get('http://127.0.0.1:5000')
        console.log(response.data.result)

        const result = response.data.result


        this.setState({ coins: response.data.result })
    }

    sortData(data) {
        // TODO need sort function
        var result = []
        
    }

    render() {
        if (this.state.coins.length === 0) {
            return (
                <h1>Loading...</h1>
            )
        }
        return(
            <div>
                <Table coins={this.state.coins} />
            </div>
        )
        
        
    }
}

export default App;