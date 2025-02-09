import { useState } from "react";
import { Button } from "./Button"

export default function Task({ task, addSubtask }) {
    return (
        <li className="p-2 borderd rounded-lg">
            <div className="flex justify-between items-center">
                <span>{task.title}</span>
                <Button size="sm" onClick={() => addSubtask(task.id)} className="ml-2"> + Subtask </Button>
            </div>
            {
                task.subtasks.length > 0 && (
                    <ul className="mt-2 ml-4 space-y-1 border-l pl-2">
                        {
                            task.subtasks.map(
                                (subtask) => (
                                    <Task key={subtask.id} task={subtask} addSubtask={addSubtask} />
                                )
                            )
                        }
                    </ul>
                )
            }
        </li >
    )
}