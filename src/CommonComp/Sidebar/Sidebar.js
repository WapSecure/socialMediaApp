import React from 'react'
import {Sidebar, InputItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';

const SideBar = () => {
  return (
    <div>
      <Sidebar bgColor='white' isCollapsed={false}>
        <Logo
          image=''
          imageName='Social Media App'/>
        <LogoText></LogoText>

        <Item bgColor='white'>
        <InputItem type='text' placeholder={'Search...'}/>
          <Icon><i className="fas fa-home"/></Icon>
          Dashboard
        </Item>
        <Item bgColor='white'>
          <Icon><i className="fas fa-info"/></Icon>
          Tasks
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          Post
        </Item>
        <Item bgColor='white'>
          <Icon><i className="far fa-address-book"/></Icon>
          Calender
        </Item>
        <Item bgColor='white'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          messages
        </Item>
        <Item bgColor='white'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Settings
        </Item>
      </Sidebar>
    </div>
  )
};

export default SideBar;