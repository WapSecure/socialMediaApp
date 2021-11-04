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
                <h3 style={{padding:"20px", float: "left"}}>Task</h3>
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavLink to="/" activeStyle style={{display: 'flex', justifyContent: 'flexEnd' }}>
                <Button>Create Task</Button>
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
