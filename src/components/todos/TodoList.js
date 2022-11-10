import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../../data-access/Todo/selectors/selectors";

const TodoList = ({ todos, visibilityFilter }) => (
    <ul className="todo-list">
        {todos?.length
            ? todos.map((todo) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : `No todos in "${visibilityFilter}" , yay!`}
    </ul>
);

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos, visibilityFilter };
};

export default connect(mapStateToProps)(TodoList);
