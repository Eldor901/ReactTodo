import React, {Component} from 'react';
import uuid from 'uuid';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row ">
                        <TodoInput/>
                        <TodoList/>
                    </div>
                </div>
            </section>
        );
    }
}

