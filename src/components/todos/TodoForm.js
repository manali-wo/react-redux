import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../data-access/Todo/actions/actions";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        console.log('handleAddTodo', this.state.input)
        if(this.state.input) {
            this.props.addTodo(this.state.input);
        }
        this.setState({ input: "" });
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(TodoForm);
