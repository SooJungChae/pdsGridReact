import { ADD_COLUMN } from "../action/actions";

// reducer 는 action 을 가져와 해당하는 state 를 변경하는 역할
const column = (state, action) => {
    switch (action.type) {
        case ADD_COLUMN :
            return {
                ...state
            }
        default:
            return state
    }
}

export default column