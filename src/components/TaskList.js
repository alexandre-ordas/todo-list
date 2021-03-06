import React from "react"
import Task from "./Task"

const TaskList = ({ tasks, setTaskStatus, remove }) => (

    <ul className="list-unstyled">
        {tasks.map((task, index) => (
            <li key={index} className={"py-2"}>
                    <Task
                        task={task}
                        setTaskStatus={isDone => setTaskStatus(task.id, isDone)}
                        remove={remove}
                    />
            </li>
        ))}
    </ul>
)


export default TaskList

//