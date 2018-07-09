/*
 * action types
 */
export const ADD_COLUMN = 'ADD_COLUMN';

export INCREMENT = 'INCREMENT';

/*
 * action creators
 */
export function addColumn(columnData) {
    return { type: ADD_COLUMN, data: columnData }
}

export function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    }
}