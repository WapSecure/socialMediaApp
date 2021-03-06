import React from "react";
import Button from '../../CommonComp/button/button.jsx'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <h3>Dashboard</h3>
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavLink to="/" activeStyle>
                <Button>Create Post <span style={{marginLeft:'30px'}}><i class="fas fa-chevron-down"></i></span></Button>
                </NavLink>
                <NavLink to="/sign-in" activeStyle>
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
