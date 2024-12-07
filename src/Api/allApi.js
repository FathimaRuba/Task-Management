import axios from "axios";
const base_url = 'https://task-backend-server.onrender.com'

export const addTask = async(data) => {
    return await axios.post(`${base_url}/tasks`,data)
}

export const getTasks = async() => {
    return await axios.get(`${base_url}/tasks`)
}

export const deleteTask = async(id) => {
    return await axios.delete(`${base_url}/tasks/${id}`)
}

export const toggleTaskCompletion = async(id) => {
    return await axios.put(`${base_url}/tasks/${id}`)
}