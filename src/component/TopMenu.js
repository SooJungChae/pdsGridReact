import React, { Component } from 'react';
import '../css/pds.core.css';
import '../css/bootstrap.min.css';

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnName: ""
        };

        this.columnNameChange = this.columnNameChange.bind(this);
    }

    _addColumn = () => {
        this.props.addColumn({
            dataField: this.state.columnName,
            columnName: this.state.columnName
        });
    }

    columnNameChange(event) {
        this.setState({
            columnName: event.target.value
        });
    }

    render() {
        return(
            <div className="container-fluid topMenu">
                <div className="width-250 d-inline-block">
                    <div className="input-group mb-3">
                        <input id="gridId" type="text" className="form-control" placeholder="Grid Id"
                               aria-label="Grid Id" />
                            <div className="input-group-append">
                                <button id="addGrid" className="btn" type="button">그리드생성</button>
                            </div>
                    </div>
                </div>
                <div className="width-250 d-inline-block">
                    <div className="input-group mb-3">
                        <input id="columnName" type="text" className="form-control" placeholder="Column name"
                               aria-label="Column name" value={this.state.columnName} onChange={this.columnNameChange} />
                            <div className="input-group-append">
                                <button id="addColumn" className="btn" type="button"
                                        onClick={this._addColumn}>컬럼추가</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopMenu;