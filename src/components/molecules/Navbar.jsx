import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/img/logo-ICTI_Chiapas.svg' 

const StyledHeader = styled.header`
    width: 100%;
    height: 8vh;
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
    img{
        height: 70%;
    }

    .options{
        display: flex;
        gap: 3rem;
    }
    .options .navLink{
        text-decoration: none;
        color: white;
    }
`;

function Navbar() {
    return ( 
        <StyledHeader>
            <nav>
                <img src={Logo} alt="" />
                <div className="options">
                    <NavLink to={'#'} className={"navLink"}>Inicio</NavLink>
                    <NavLink to={'#'} className={"navLink"}>Dashboard</NavLink>
                    <NavLink to={'#'} className={"navLink"}>Nosotros</NavLink>
                    <NavLink to={'#'} className={"navLink"}>Iniciar Sesión</NavLink>
                </div>
            </nav>
        </StyledHeader>
     );
}

export default Navbar;