import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import style from "./NavBar.module.css"

const NavBar = ({pagination}) => {
    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState("");

    const handleInput = (event) => {
        setSearchDog(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchDog) {
            dispatch(getByName(searchDog))}
        setSearchDog("")
        pagination(1)
    }

    return(
        <nav className={style.navbar}>
            <div className={style.back}>
                <Link to = "/">
                    <FontAwesomeIcon className={style.logo} icon={faPaw} />
                </Link>
            </div>
            <div onSubmit={handleSubmit} className={style.search} >
                <input 
                    className={style.input}
                    type="text" 
                    onChange={handleInput} 
                    value={searchDog} 
                    placeholder="Name of a dog..."/>
                <button className={style.busqueda} type="submit">Search</button>
            </div>
            
            <div>
                <Link to="/form">
                    <button className={style.creation}>Create DOG</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;