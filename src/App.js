import React, { Component } from 'react';
import Grid from './component/Grid';
import TopMenu from './component/TopMenu';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            column: [
                {
                    dataField: 'id',
                    columnName: 'id'
                }
            ],
            datas: [],
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
                response.json().then(json => {
                    this.setState({
                        column: [{
                            dataField: 'empCode',
                            columnName: 'empCode'
                        },
                            {
                            dataField: 'empName',
                            columnName: 'empName'
                        }],
                        datas: json
                    })
                });
            })
            .catch((error)=>{
                console.log('Error fetching man',error);
        });
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
                <Grid column={this.state.column} datas={this.state.datas}  />
            </div>
        );
    }
}

export default App;

