import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Grid extends Component {

    state = {
        test: [{
            'id' : '1',
            'name' : 'test',
            'price' : '1000',
            'account' : '10000'
        }],
        headerColumn: [{
            dataField: 'id',
            columnName: 'id'
        }, {
            dataField: 'name',
            columnName: 'name'
        }, {
            dataField: 'price',
            columnName: 'price'
        }]
    };

    getTableHeaderColumn() {

        // this.prop.column 으로 받아오기!!!
        console.log('prop:' + this.props.column);
        // const listColumns = this.state.headerColumn.map( (lData) => {
        const listColumns = this.props.column.map( (lData) => {
            console.log(lData);
            if (lData.dataField === "id") {
                return (<TableHeaderColumn dataField={lData.dataField} key={lData.dataField} isKey={true}>
                    {lData.columnName}
                </TableHeaderColumn>)
            }
            else {
                return (<TableHeaderColumn dataField={lData.dataField} key={lData.dataField}>
                    {lData.columnName}
                </TableHeaderColumn>)
            }
        });

        return (
            listColumns
        )
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <BootstrapTable data={ this.state.test }  striped>
                            {this.getTableHeaderColumn()}
                        </BootstrapTable>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;
