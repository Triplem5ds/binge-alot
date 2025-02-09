import { useState } from "react";
import { Button } from "./Button";
import Task from "./Task"
import { TaskInterface } from "./TaskInterface"

export default function TaskTree() {
    const [tasks, setTasks] = useState([])

    function addTask() {
        setTasks(
            [...tasks, { id: Date.now(), title: "New Task", subtasks: [] }]
        )
    }

    function getNewTaskTree(currentTask, targetId) {
        if (currentTask.id == targetId) {
            return {
                ...currentTask, subtasks: [...currentTask.subtasks, {
                    id: Date.now(),
                    title: "New Subtask",
                    subtasks: []
                }]
            };
        } else {
            return {
                ...currentTask, subtasks: currentTask.subtasks.map(task => getNewTaskTree(task, targetId))
            };
        }

    };

    function addSubtask(taskId) {
        const newTaskTree = tasks.map(
            task => getNewTaskTree(task, taskId)
        )
        setTasks(newTaskTree)
    };

    console.log("WTF")
    console.log(tasks)

    return (
        <div className="p-4 max-w-md mx-auto md:mx-0 md:max-w-full">
            <Button onClick={addTask}> Add Task </Button>
            <ul className="space-y-2">
                {
                    tasks.map((task) => <Task key={task.id} task={task} addSubtask={addSubtask} />)
                }
            </ul>
        </div>
    )
}