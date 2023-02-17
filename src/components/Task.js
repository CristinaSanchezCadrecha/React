import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

const Task = ({task, toggleDone, editTask, deleteTask}) => {
	const [editingTask, changingEditingTask] = useState(false);
	const [newTask, changingNewTask] = useState(task.text);

	const handleSubmit = (e) => {
		e.preventDefault();
		editTask(task.id, newTask);
		changingEditingTask(false);
	}

	return (
		<li className="lista-tareas__tarea">
			<FontAwesomeIcon 
				icon={task.completada ? faCheckSquare : faSquare}
				className="lista-tareas__icono lista-tareas__icono-check"
				onClick={() => toggleDone(task.id)}
			/>
			<div className="lista-tareas__texto">
				{editingTask ? 
				<form action="" className="formulario-editar-task" onSubmit={handleSubmit}>
					<input 
						type="text"
						className="formulario-editar-tarea__input"
						value={newTask}
						onChange={(e) => changingNewTask(e.target.value)}
					/>
					<button 
						type="submit" 
						className="formulario-editar-tarea__btn"
					>
						Actualizar
					</button>
				</form>
				: task.text
				}
			</div>
			<div className="lista-tareas__contenedor-botones">
				<FontAwesomeIcon 
					icon={faEdit} 
					className="lista-tareas__icono lista-tareas__icono-accion"
					onClick={() => changingEditingTask(!editingTask)}
				/>
				<FontAwesomeIcon 
					icon={faTimes} 
					className="lista-tareas__icono lista-tareas__icono-accion" 
					onClick={() => deleteTask(task.id)}
				/>
			</div>
		</li>
	);
}
 
export default Task;