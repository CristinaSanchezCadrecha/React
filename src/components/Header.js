import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return ( 
        <header className="header">
            <h1 className="header__title">Lista de Tareas</h1>
            <button className="header__btn">
                No mostrar completadas
                <FontAwesomeIcon icon={faEyeSlash} className="header__icon_btn"/>
            </button>
            
        </header>
     );
}
 
export default Header;