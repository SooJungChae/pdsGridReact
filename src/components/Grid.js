import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

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

// const Form = ({value, onChange, onCreate, onKeyPress}) => {
//     return (
//         <div className="form">
//             <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
//             <div className="create-button" onClick={onCreate}>
//                 추가
//             </div>
//         </div>
//     );
// };
//

const products = [{
    'id' : '1',
    'name' : 'test',
    'price' : '1000'
}];

class Table extends React.Component {
    render() {
        return (
            <BootstrapTable data={ products } striped>
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
