import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async() => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    render() {
        return (
            <div>
                <TodoListTemplate form={<Form/>}>
                    <TodoItemList/>
                </TodoListTemplate>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default App;

