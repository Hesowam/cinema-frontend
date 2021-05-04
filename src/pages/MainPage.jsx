import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import NavBarComponent from "../components/NavBarComponent";

import AuthenticationPage from '../pages/AuthenticationPage'
import PreviewPage from "./PreviewPage.jsx";

import LocalStorageService from "../services/LocalStorageService";

export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: LocalStorageService.isActive()
        }
    }

    render() {
        return (
            <div style={{backgroundColor: "#020916", height: "1080px"}}>
                <BrowserRouter>
                    <NavBarComponent/>
                    {this.state.user == false ?
                        <BrowserRouter>
                            <Route path="/" component={AuthenticationPage}/></BrowserRouter>
                        :
                        <BrowserRouter>
                            <Route path="/" component={PreviewPage}/>
                        </BrowserRouter>}
                </BrowserRouter>
            </div>)
    }
}

