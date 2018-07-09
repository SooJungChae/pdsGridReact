import { createStore, counterReducer } from 'redux';
// reducer 모음을 가져온다.

// reducer 를 가진 store 를 만든다.
const store = createStore(counterReducer);

// dispatch 를 호출하면 store 에서 해당하는 reducer 를 찾아 연결한다.

// export default function(initialState) {
//     return createStore(reducer, initialState, enhancer);
// }