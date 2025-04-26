type TaskProps = {
    task: {
        id: string;
        title: string;
    }
};

export default function Task({ task }: TaskProps) {
    return (
        <div className="bg-white flex w-full p-2 rounded shadow text-black"> {task.title} </div>
    )
}