import React, {Component} from 'react';
import * as uuid from "uuid";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
    state = {
        items:[
            {id:1, title: "wake up"},
            {id:1, title: "make breakfast"}
        ],
        id: uuid.v4(),
        item: "",
        editItem: false,
    };

    handleChange = (e) =>
    {
        console.log("handlechange");
    };

    handleSubmit = (e) =>
    {
        console.log("Submit");
    };


    clearList = () =>
    {
        console.log("clear List");
    };

    handleEdit = (id) =>
    {
        console.log(`handle edit ${id}`);
    };

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">todo input</h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />
                        <TodoList
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

