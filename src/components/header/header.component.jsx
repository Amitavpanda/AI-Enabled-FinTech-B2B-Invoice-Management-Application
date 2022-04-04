import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from '../../static/logo.png';
import HighRadius from '../../static/highradius.png';
import './header.styles.css';

const Header = () => {
    return ( <
        div >
        <
        AppBar >
        <
        Toolbar className = "header" >
        <
        Typography variant = 'h5' >
        <
        img src = { Logo }
        width = "150"
        height = "50" / >
        <
        /Typography> <
        Typography variant = 'h5'
        className = 'highradius'
        color = 'inherit'
        sx = {
            { flexGrow: 1, textAlign: 'center' } } >
        <
        img src = { HighRadius }
        width = "250"
        height = "50" / >
        <
        /Typography> <
        /Toolbar>     <
        /AppBar>            

        <
        /div>
    )
}
export default Header;