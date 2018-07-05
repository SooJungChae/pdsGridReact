import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default TodoListTemplate;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './TodoListTemplate.css';
// import PdsGrid from './pdsgrid';
//
// console.log('index');
//
// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square">
//                 {/* TODO */}
//             </button>
//         );
//     }
// }
//
// class Board extends React.Component {
//     renderSquare(i) {
//         return <Square />;
//     }
//
//     render() {
//         const status = 'Next player: X';
//
//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }
//
// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// ========================================

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );
//
// ReactDOM.render(
//     <PdsGrid />,
//     document.getElementById('pdsGrid')
// );
