import React, { useEffect, useState} from "react"
import { completeTask, deleteTask, getAllTasks, incompleteTask } from '../services/TaskService'
import { useNavigate } from "react-router-dom"

const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listTasks();
    }, [])

    function listTasks(){
        getAllTasks().then((response) => {
            setTasks(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewTask(){
        navigate('/add-task')
    }

    function updateTask(id){
        console.log(id)
        navigate('/update-task/' + id)
    }

    function removeTask(id){
        deleteTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error)
        })
    }

    function markCompleteTask(id){
        completeTask(id).then((response) => {
            listTasks()
        }).catch(error => {
            console.error(error)
        })
    }

    function markIncompleteTask(id){
        incompleteTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error)
        })
    }

    return(
        <div className="container">
            <h3 className="text-center">Listado de Tareas</h3>
            <button className="btn btn-primary mb-2" onClick={addNewTask}>Nueva Tarea</button>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Completada?</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task =>
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.completed ? 'Si': 'No'}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateTask(task.id)}>Actualizar</button>
                                        <button className="btn btn-danger" onClick={() => removeTask(task.id)} style={ { marginLeft: "10px"}} >Borrar</button>
                                        <button className="btn btn-success" onClick={() => markCompleteTask(task.id)} style={ { marginLeft: "10px"}} >Finalizar</button>
                                        <button className="btn btn-info" onClick={() => markIncompleteTask(task.id)} style={ { marginLeft: "10px"}} >Pendiente</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTaskComponent