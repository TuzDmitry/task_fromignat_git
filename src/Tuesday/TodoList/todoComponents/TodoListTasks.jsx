import React from "react";
import TodoListTask from "./TodoListTask";
import PropTypes from "prop-types";


class TodoListTasks extends React.Component {

    render = () => {

        let taskElements= this.props.tasks.map(task=>{
            return <TodoListTask
                pseudoDispatch={this.props.pseudoDispatch}
                changeStatus={this.props.changeStatus}
                deleteTask={this.props.deleteTask}
                task={task}/>
        })
        return (
            <div className="todoList-tasks">
                {taskElements}
                {/*<TodoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].isDone}/>*/}
            </div>
        );
    }
}

export default TodoListTasks;

TodoListTasks.propTypes = {
    tasks: PropTypes.array.isRequired
};