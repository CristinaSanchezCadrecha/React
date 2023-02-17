import React from 'react';
import Task from './Task';

const ListTasks = ({tasks, changeTasks, showDone}) => {
	const toggleDone = (id) => {
		changeTasks(tasks.map((task) => {
			if(task.id === id){
				return {...task, done: !task.done}
			}
			return task;
		}));
	}

	const editTask = (id, newText) => {
		changeTasks(tasks.map((task) => {
			if(task.id === id){
				return {...task, text: newText}
			}
			return task;
		}));
	}

	const deleteTask = (id) => {
		changeTasks(tasks.filter((task) => {
			if(task.id !== id){
				return task;
			}
			return;
		}));
	}

	return (
		<ul className="lista-tasks">
			{tasks.length > 0 ? tasks.map((task) => {
				if(showDone){
					return <Task 
								key={task.id}
								task={task}
								toggleDone={toggleDone}
								editTask={editTask}
								deleteTask={deleteTask}
							/>
				// Si la task no esta completada, la devolvemos.
				} else if(!task.done){
					return <Task 
								key={task.id}
								task={task}
								toggleDone={toggleDone}
								editTask={editTask}
								deleteTask={deleteTask}
							/>
				}
				// Si ya esta completada no la devolvemos
				return;
			})
			:<div className="list-tasks__message">~ No hay tareas agregadas ~</div>
			}
		</ul>
	);
}
 
export default ListTasks;