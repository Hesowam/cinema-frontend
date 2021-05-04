import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";

export default class NavBarComponent extends Component {
    render() {
        return (<div>
            <Navbar style={{backgroundColor: "#182131", height: "50px"}}>
                <div className="container">
                    <h1 className="logo-text">CINEMA.ONLINE</h1>
                    <input className="search-bar" type="text" placeholder="Search by title..."/>
                    <img className="navbar-image" src="http://tinygraphs.com/isogrids/tinygraphs?theme=sugarsweets&numcolors=4&size=220&fmt=svg" alt=""/>
                </div>
            </Navbar>
        </div>)
    }
}

