import { useState } from "react";

const AddTask =({taskList, setTaskList})=>{
    const [addModal, setAddModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleInput = e => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;

        if(name === "projectName") setProjectName(value)
        if(name === "taskDescription") setTaskDescription(value)
    }

    const handleAdd = e => {
        e.preventDefault();
        setTaskList(
            [...taskList, {projectName, taskDescription}]
        );
        setAddModal(false)
        setProjectName("");
        setTaskDescription("");
    }
    return (
        <>
            <button 
                className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 
                rounded hover:opacity-70"
                type="button"
                onClick={() => setAddModal(true)}
            >
                    + New
            </button>
            {addModal ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                        <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col">
                            <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                                <h3 className="bg-white text-3xl font-semibold">Add New Task</h3>
                                <button
                                    className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                                    onClick={() => setAddModal(false)}
                                >
                                    x
                                </button>
                            </div>
                            <form className="px-6 pt-6 pb-4">
                                <div>
                                    <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block" 
                                        htmlFor="project-name">
                                        Project Name
                                    </label>
                                    <input
                                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight
                                        focus:outline-none focus:bg-white" 
                                        id="project-name"
                                        name="projectName"
                                        type="text"
                                        placeholder="Project Name"
                                        value={projectName}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block" 
                                        htmlFor="project-name">
                                        Task Description
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight
                                        focus:outline-none focus:bg-white"
                                        id="task-description"
                                        name="taskDescription"
                                        rows="5"
                                        placeholder="Task Description"
                                        value={taskDescription}
                                        onChange={handleInput}
                                    />
                                </div>
                            </form>
                            <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                                <button 
                                    className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70"
                                    onClick={handleAdd}
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default AddTask;