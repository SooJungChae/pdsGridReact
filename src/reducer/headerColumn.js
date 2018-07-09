import { ADD_COLUMN, INCREMENT, addColumn } from "../action/actions";

const initialState = {
    value: 0
}

// reducer 는 action 을 가져와 해당하는 state 를 변경하는 역할
const columnReducer = (state, action) => {
    switch (action.type) {
        case ADD_COLUMN :
            return {
                ...state
            }
        case addColumn:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign( {}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}

export default columnReducer;