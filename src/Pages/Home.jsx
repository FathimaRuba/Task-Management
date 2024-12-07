import React, { useEffect, useState } from 'react';
import { getTasks, addTask, deleteTask, toggleTaskCompletion } from '../Api/allApi';
import { toast } from 'react-toastify';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        getTaskData();
    }, []);

    const getTaskData = async () => {
        const response = await getTasks();
        if (response.status === 200) {
            setTasks(response.data);
        }
    };

    const handleAddTask = async () => {
        if (newTask.trim() === '') {
            toast.error("Task cannot be empty!");
            return;
        }
        const response = await addTask({ title: newTask });
        if (response.status === 201) {
            setTasks([...tasks, response.data]);
            setNewTask('');
            toast.success('Task Added Successfully');
        } else {
            toast.error("Something Went Wrong!");
        }
    };

    const handleDeleteTask = async (id) => {
        const response = await deleteTask(id);
        if (response.status === 200) {
            setTasks(tasks.filter((task) => task._id !== id));
            toast.success("Task Deleted Successfully");
        } else {
            toast.error("Something Went Wrong!");
        }
    };

    const handleToggleCompletion = async (id) => {
        const response = await toggleTaskCompletion(id);
        if (response.status === 200) {
            setTasks(
                tasks.map((task) =>
                    task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
                )
            );
        } else {
            toast.error("Something Went Wrong!");
        }
    };

    return (
        <div
            className="container my-5 d-flex flex-column align-items-center shadow p-4"
            style={{
                maxWidth: '600px',
                borderRadius: '10px',
                backgroundColor: '#daf5e9',
            }}
        >
            <h1 className="text-center mb-4" style={{ color: '#2a7d4f' }}>
                Task Manager
            </h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleAddTask}>
                    Add
                </button>
            </div>
            <ul className="list-group w-100">
                {tasks.map((task) => (
                    <li
                        key={task._id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${
                            task.isCompleted ? 'bg-completed' : ''
                        }`}
                        style={{
                            color: task.isCompleted ? '#555' : '#000',
                        }}
                    >
                        <span className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={task.isCompleted}
                                onChange={() => handleToggleCompletion(task._id)}
                            />
                            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                                {task.title}
                            </span>
                        </span>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteTask(task._id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
