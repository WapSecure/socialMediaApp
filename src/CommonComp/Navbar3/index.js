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
                <h3 style={{padding:"20px", float: "left"}}>Post</h3>
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavLink to="/" activeStyle style={{display: 'flex', justifyContent: 'flexEnd' }}><p>Filter by &nbsp; &nbsp;</p>
                <Button>Account</Button>
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
