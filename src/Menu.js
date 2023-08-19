import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <ul className="menu">
            <NavLink className='menu__item' to='/' >Home Page</NavLink>
            <NavLink className='menu__item' to='/drift' >Drift</NavLink>
            <NavLink className='menu__item' to='/timeattack' >Time Attack</NavLink>
            <NavLink className='menu__item' to='/forza' >Forza</NavLink>
        </ul>
    );
}