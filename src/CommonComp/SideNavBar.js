import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div` 
    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 700px;
    width: 209px;     /* Set the width of the sidebar */
    z-index: 1; 
    left: 0;     /* Stay on top of everything */
    top: 0;      /* Stay at the top */
    background-color: white;
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 30px;
    color: #777777;

`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Dashboard',
                  css: 'fas fa-home',
                  text: 'Dashboard', 
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/task',
                  name: 'task',
                  css: 'fas fa-tasks',
                  text: 'Task',
                  key: 2
                },
                {
                  path: '/post',
                  name: 'post',
                  css: 'fas fa-location-arrow',
                  text: 'Post',
                  key: 3
                },
                {
                    path: '/calender',
                    name: 'calender',
                    css: 'fas fa-calendar-alt',
                    text: 'Calender',
                    key: 4
                },
                {//Todo:change url
                    path: '/messages',
                    name: 'messages',
                    css: 'fas fa-comment-dots',
                    text: 'Messages',
                    key: 5
                },
                {//Todo:change url
                    path: '/user-settings',
                    name: 'settings',
                    css: 'fa fa-user-cog',
                    text: 'Settings',
                    key: 6
                }
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                text={item.text}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 8%;
    width: 100%; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 15px;   /* Puts space between NavItems */
    a {
        font-size: 20px;
        color: ${(props) => props.active ? "white" : "#777777"};
        background-color: ${(props) => props.active ? "#3FCF8E" : "white"};
        text-align: center;
        border-radius: 5px;
        text-decoration:none;
        margin-right: 15px;
        padding-top: 15px;
        padding-left: 15px;
        :hover {
            opacity: 0.7;    
            color:"white";
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link style={{display: 'flex', flexDirection:'row', marginLeft: '20px', marginBottom: '50px'}} 
                to={this.props.path} 
                className={this.props.css} 
                onClick={this.handleClick}>
                <NavIcon /> <p style={{marginLeft: '20px'}}>{this.props.text}</p>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}