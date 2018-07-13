/*
 * action types // reducer 에서 사용?!
 */
export const ADD_COLUMN = 'ADD_COLUMN'

/*
 * action creators // container 에서 사용?!
 */
export function addColumn(columnData) {
    return { type: ADD_COLUMN, data: columnData }
}
