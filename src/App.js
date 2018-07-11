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

