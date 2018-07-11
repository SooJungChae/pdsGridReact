import React, { Component } from 'react';
import Grid from './component/Grid';
import TopMenu from './component/TopMenu';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response: '',
            column: [
                {
                    dataField: 'id',
                    columnName: 'id'
                }
            ],
            addColumn: ''
        };

        this.addColumn = this.addColumn.bind(this);
    }

    componentDidMount() {
        fetch('/users'
            , {
            method: 'GET',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                response.json().then(json => {
                    this.setState({response: json})
                });
            })
            .catch((error)=>{
                console.log('Error fetching man',error);
        });
        // console.log('didmount');
        // this.callApi()
        //     .then(res => this.setState({ response: res.express }))
        //     .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    addColumn(newColumn) {
        this.setState({
            column : this.state.column.concat(newColumn)
        })
    }

    render() {
        return (
            <div>
                <TopMenu addColumn={this.addColumn} />
                {this.state.response}
                <Grid column={this.state.column}  />
            </div>
        );
    }
}

export default App;

