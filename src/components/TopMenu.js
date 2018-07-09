import React, { Component } from 'react';

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
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
                               aria-label="Column name" />
                            <div className="input-group-append">
                                <button id="addColumn" className="btn" type="button"
                                        onclick={this.onClick}>컬럼추가</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

    onClick() {
        // 리스너 함수 붙임
        this.props.store.dispatch(increase(1));
    }

}

export default TopMenu;