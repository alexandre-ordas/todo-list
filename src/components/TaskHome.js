import React, {useCallback} from "react"
import TaskList from "./TaskList";
import {Link} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TaskHome = ({tasks, setTasks,setTaskStatus}) => {

    const remove= label => {

        confirmAlert({

            title: 'Delete task',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => setTasks(tasks => tasks.filter(task => task.label !== label))
                },
                {
                    label: 'No',
                    onClick: () => ''
                }
            ]
        });

    }


    return (
        <div>
            <div className={"d-flex justify-content-between"}>
                <h1 className={"p-3"}>Todolist</h1>
                <button className="btn btn-primary btn-lg m-3">
                    <Link to="/add-task" className={"text-decoration-none text-white"} >
                        Add Task
                    </Link>
                </button>
            </div>

            <TaskList
                tasks={tasks}
                setTaskStatus={setTaskStatus}
                remove={remove}


            />
        </div>
    )
}

export default TaskHome