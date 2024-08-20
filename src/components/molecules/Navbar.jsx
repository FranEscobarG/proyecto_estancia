import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/img/logoICTI-blanco.png' 

const StyledHeader = styled.header`
    width: 100%;
    height: 7vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: #333333;
    font-size: 1rem;
    color: white;
    z-index: 1000;

    nav{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: gray; */
    }
    .link-logo{
        height: 100%;
    }
    img{
        height: 90%;
    }

    .options{
        display: flex;
        gap: 3rem;
    }
    .options .navLink{
        text-decoration: none;
        color: white;
    }
    .options .navLink:hover{
        text-decoration: underline ; 
    }
`;

function Navbar() {
    return ( 
        <StyledHeader>
            <nav>
                <NavLink to={'https://icti.chiapas.gob.mx/'} className={"link-logo"}><img src={Logo} alt="" /></NavLink>
                <div className="options">
                    <NavLink to={'/'} className={"navLink"}>Inicio</NavLink>
                    <NavLink to={'/dashboard'} className={"navLink"}>Dashboard</NavLink>
                    <NavLink to={'https://icti.chiapas.gob.mx/conocenos'} className={"navLink"}>Nosotros</NavLink>
                    <NavLink to={'/login'} className={"navLink"}>Iniciar Sesión</NavLink>
                </div>
            </nav>
        </StyledHeader>
     );
}

export default Navbar;