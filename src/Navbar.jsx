import { NavLink } from "react-router-dom";
import styled from 'styled-components';


export function Navbar(){
    return(
        <nav >
            <ul>
                <NavLink to='/fake'><li>Fake Store</li></NavLink>
                <NavLink to='/poke'><li>Poke</li></NavLink>
                <NavLink to='/rick'><li>Ricky</li></NavLink>
                <NavLink to='/movie'><li>MTBMovie</li></NavLink>
                <NavLink to='/marvel'><li>Marvel</li></NavLink>
            </ul>
        </nav>
        
    )
}