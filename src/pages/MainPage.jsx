import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import NavBarComponent from "../components/NavBarComponent";

import AuthenticationPage from '../pages/AuthenticationPage'
import PreviewPage from "./PreviewPage.jsx";

import LocalStorageService from "../services/LocalStorageService";
import FilmServise from "../services/FilmService";

export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: LocalStorageService.isActive(),
            userData: LocalStorageService.getUser(),
            recently: []
        }
    }


    render() {
        return (
            <div className="body">
               <BrowserRouter>
                    <NavBarComponent user={this.state.userData} isUser={this.state.user}/>
                    {this.state.user == false ?
                        <BrowserRouter>
                            <Route path="/"><AuthenticationPage user={this.state.user} /></Route></BrowserRouter>
                        :
                        <BrowserRouter>
                            <Route path="/" component={PreviewPage}/>
                        </BrowserRouter>}
                </BrowserRouter>
            </div>)
    }
}

