import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './TodoListTemplate.css';
console.log('pdsgrid');


// const columns = [{
//     dataField: 'id',
//     text: 'Product ID'
// }, {
//     dataField: 'name',
//     text: 'Product Name'
// }, {
//     dataField: 'price',
//     text: 'Product Price'
// }];

const products = [{
    'id' : '1',
    'name' : 'test',
    'price' : '1000'
}];

class Table extends React.Component {
    render() {
        return (
            <BootstrapTable data={ products }>
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default Table;


// ========================================

// ReactDOM.render(
//     <Table />,
//     document.getElementById('pdsGrid')
// );
