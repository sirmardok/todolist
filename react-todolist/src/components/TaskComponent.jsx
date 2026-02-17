import React, { useEffect } from "react"
import { useState } from "react"
import { getTask, saveTask, updateTask } from "../services/TaskService"
import { useNavigate, useParams } from "react-router-dom"

const TaskComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    function saveOrUpdateTask(e){
        e.preventDefault()

        const task = {title, description, completed}
        console.log(task)

        if(id){
            updateTask(id, task).then((response) => {
                navigate('/tasks')
            }).catch(error =>{
                console.error(error);
            })
        }else{
            saveTask(task).then((response) => {
                console.log(response.data)
                navigate('/tasks')
            }).catch(error => {
                console.error(error);
            })
        } 
    }

    function cancel(){
        navigate('/tasks')
    }

    function pageTitle(){
        if(id){
            return <h2 className="text-center">Actualizar Tarea</h2>
        }else{
            return <h2 className="text-center">Nueva Tarea</h2>
        }
    }

    useEffect( () => {
        if(id){
            getTask(id).then((response) => {
                console.log(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCompleted(response.data.completed)                
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id]
    )

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    { pageTitle() }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Título:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese título de la tarea"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    ></input>                                    
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Descripción:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese la descripción"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Tarea Finalizada?:</label>
                                <select
                                    className="form-control"
                                    value={completed}
                                    onChange={(e) => setCompleted(e.target.value)}
                                    >
                                        <option value="false">No</option>
                                        <option value="true">Si</option>
                                    </select>
                            </div>

                            <button className="btn btn-success" onClick={(e) => saveOrUpdateTask(e)}>Enviar</button>
                            <button className="btn btn-danger" onClick={(e) => cancel(e)} style={ { marginLeft: "10px"}}>Cancelar</button>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskComponent
