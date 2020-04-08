import React from "react"
import PropTypes from 'prop-types';


class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
        // alert(e.currentTarget.checked);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
        // alert(e.currentTarget.checked);
    }

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }


    render = () => {
        let classForIsDone = this.props.task.isDone ? "done" : "todoList-task";
        return (
            <div>
                <div>
                    <div className={classForIsDone}>
                        <input type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.task.isDone}/>

                        <span>{this.props.task.id}</span>
                        {
                            this.state.editMode
                                ? <input onBlur={this.deActivateEditMode}
                                         onChange={this.onTitleChanged}
                                         value={this.props.task.title}
                                         autoFocus={true}/>
                                : <span onClick={this.activateEditMode}>-{this.props.task.title},</span>
                        }

                        {/*<span onClick={this.activateEditMode}>-{this.props.task.title},</span>*/}
                        <span>priority:{this.props.task.priority}</span>

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    isDone: PropTypes.bool,
    title: PropTypes.string,
    priority: PropTypes.string
};