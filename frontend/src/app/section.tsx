
import Task from "./task";
type TaskType = {
    id: string;
    title: string;
};

type SectionProps = {
    section: {
        id: string;
        title: string;
        tasks: TaskType[];
    };
    addTask: (sectionId: string) => void;
};

export default function Section({ section, addTask }: SectionProps) {


    return (
        <div className="w-64 bg-gray-100 flex-col rounded p-4 flex shrink-0 shadow border border-black-500 overflow-y-auto h-96">
            <div className="flex justify-between text-black items-center mb-2">
                <h2 className="font-bold text-left">{section.title}</h2>
                <button onClick={() => addTask(section.id)} className="text-white rounded-full bg-blue-500 w-7 h-8">
                    +
                </button>
            </div>
            <div className="h-full">
                {
                    section.tasks.map(
                        task => (
                            <div className="flex felx-col p-1">
                                <Task key={task.id} task={task}></Task>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
};