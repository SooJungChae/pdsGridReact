import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Grid extends Component {
    constructor(props) {
        super(props);
    }
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

        // const listColumns = this.props.datas.map( (lData) => {
        // //     console.log(lData);
        // //     if (lData.dataField === "id") {
        // //         return (<TableHeaderColumn dataField="empName" key="empName" isKey={true}>
        // //             empName
        // //         </TableHeaderColumn>)
        // //     }
        // //     else {
        // //         return (<TableHeaderColumn dataField="empCode" key="empCode">
        // //             empCode
        // //         </TableHeaderColumn>)
        // //     }
        // });

        // const listColumns = this.props.column.map( (lData) => {
        //     console.log(lData);
        //     if (lData.dataField === "empCode") {
        //         return (<TableHeaderColumn dataField="id" key="id" isKey={true}>
        //             id
        //         </TableHeaderColumn>)
        //     }
        //     else {
        //         return (<TableHeaderColumn dataField="name" key="name">
        //             name
        //         </TableHeaderColumn>)
        //     }
        // });

        const listColumns = this.state.headerColumn.map( (lData) => {
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

    // <BootstrapTable data={ this.state.test }  striped>
    // <BootstrapTable data={ this.props.column }  striped>
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
