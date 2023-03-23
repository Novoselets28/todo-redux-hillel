import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const selectTodo = state => state.todos;

const TodoList = () => {
    const todos = useSelector(selectTodo);

    const renderedListItem = todos.mao(todo => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return <ul className="todo-list">{renderedListItem}</ul>
}

export default TodoList;