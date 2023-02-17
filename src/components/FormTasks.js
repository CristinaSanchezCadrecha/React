import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const  FormTasks = ({tasks, changeTasks}) => {
    const [inputTask, changeInputTask] = useState('');

    const handleInput = (e) => {
		changeInputTask(e.target.value);
	}

    const handleSubmit = (e) => {
        e.preventDefault();

        changeTasks(
            [
                ...tasks,
                {
                    id: uuidv4(),
                    text: inputTask,
                    done: false
                }
            ]
        );
        changeInputTask('');
    }    
    
    return (  
        <form action="" className="form-tasks" onSubmit={handleSubmit}> 
            <input 
                type="text"
                className="form-tasks__input" 
                placeholder="Introduce una tarea"
                value={inputTask}
                //Esta función se ejecuta cada vez que hay un cambio en el input
                onChange={(e) => handleInput(e)}
            />

            <button type="submit" className="form-tasks__btn">
                <FontAwesomeIcon icon={faPlusSquare} className="form-tasks__icon-btn"/>
            </button>
        </form>
    );
}
 
export default FormTasks;