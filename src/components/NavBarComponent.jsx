import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import {Avatar, Badge, Button, Container, Fade, makeStyles, Menu, MenuItem, withStyles} from "@material-ui/core";
import LocalStorageService from "../services/LocalStorageService";

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

export default class NavBarComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.logOut = this.logOut.bind()
    }

logOut(){
        LocalStorageService.logOut();
}
    render() {
        return (<div className="navigation-bar">
            <div className="navigation-bar-container">
                <h1 className="navbar-logo">Cinema.Online</h1>
                    <input className="search-bar" type="text" placeholder="Search by title..."/>
                <div className="dropdown">
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar className="navbar-image" alt="Remy Sharp"
                                src={`${this.props.isUser == true ? this.props.user.mainPictureUrl :
                                    "http://tinygraphs.com/isogrids/tinygraphs?theme=sugarsweets&numcolors=4&size=220&fmt=svg"}`}/>
                    </StyledBadge>
                    {this.props.isUser == true ?
                    <div className="dropdown-content">
                        {console.log(this.props)}
                        <div><a className="d-block" href="/" >Signed in as <strong >{this.props.user.username}</strong></a></div>
                        <div role="none" className="dropdown-divider-d"></div>
                        <a href="#">Profile</a>
                        <a href="#">Calendar</a>
                        <div role="none" className="dropdown-divider-d"></div>
                        <a href="#" onClick={this.logOut}>Logout</a>
                    </div>: <div className="dropdown-content">
                            <a href="#">You are not logged in</a>
                        </div>}
                </div>
            </div>
        </div>)
    }
}

