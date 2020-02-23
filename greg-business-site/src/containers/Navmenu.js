// Navmenu.js

import React, { Component } from 'react';
import { 
    Button, 
    List, 
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    InboxIcon,
    MailIcon,
    Drawer,
    IconButton,
    Paper
  } from '@material-ui/core';
  import MenuIcon from '@material-ui/icons/Menu';
  import styled from 'styled-components';
  import Banner from './Banner';
  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Navmenu extends Component {
  constructor(props){
      super(props);
      this.state = {
          left: false
      }
  }
  
  toggleDrawer(side, open) {
    this.setState({left: open});
  }

  closeMenu(){
    this.setState({left:false});
  }

  render() {
    return (
        <Navbar>
            {/* <h2>Navmenu</h2> */}
            <NavbarContainer>
                <IconButton onClick={()=>this.toggleDrawer('left', true)}>
                    <MenuIcon/>
                </IconButton>
                {/* <Banner></Banner> */}
                <LogoContainer>
                    <p>NeuroVantage Cognitive Development</p>
                </LogoContainer>
            </NavbarContainer>

            <MenuOverlay open={this.state.left} onClose={() => this.toggleDrawer('left', false)}>
                <h2>NCD</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ButtonContainer>
                    <Button><NavLink to={'/'} onClick={() => this.closeMenu()} className="nav-link"> Home </NavLink></Button>
                    <Button><NavLink to={'/contact'} onClick={() => this.closeMenu()}  className="nav-link">Contact</NavLink></Button>
                    <Button><NavLink to={'/about'} onClick={() => this.closeMenu()}  className="nav-link">About</NavLink></Button>
                </ButtonContainer>
                </nav>
                <hr />
            </MenuOverlay>
        </Navbar>
    );
  }
}
const Navbar = styled(Paper)`
    // min-width: 200px;
`;

const MenuOverlay = styled(Drawer)`
    min-width: 200px;
`;

const NavbarContainer = styled.div`
    background-color:#fff9ea;
    display:flex;
    justify-content: space-between;
`;

const LogoContainer= styled.div`
    // right:0;
    padding-right: 5px;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    min-width: 200px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color:black;
`;

export default Navmenu;