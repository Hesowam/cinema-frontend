import React, {Component} from 'react';

import LocalStorageService from "../services/LocalStorageService";
import {Carousel} from "react-bootstrap";
import {Container, Grid, Paper} from "@material-ui/core";
import FilmService from "../services/FilmService";
import WrapperComponent from "../components/WrapperComponent";


export default class PreviewPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: LocalStorageService.isActive(),
            recently: [],
            films: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        FilmService.getAll().then(res => {
            console.log(res)
            this.setState({
                films: res
            });
        });
    }

    render() {
        return (
            this.state.films.length ? <Container maxWidth="xl">
                    <Carousel className="carousel-main" style={{maxWidth: "1582px"}}>
                        <Carousel.Item style={{boxShadow: "0 6px 2px rgba(0, 0, 0, 0.1)"}}>
                            <img
                                className="d-block w-100 border-0"
                                src="https://i.ibb.co/xm1PN9X/2-layers.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption style={{textAlign: 'left'}}>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {this.state.films.length > 0 ?
                        <div>
                            <WrapperComponent list={this.state.films} name="Recently added"/>
                            <WrapperComponent list={this.state.films} name="High rating"/>
                            <WrapperComponent list={this.state.films}
                                              name={`${new Date().getUTCDay()} anime release list`}/>
                        </div>
                        : 0}
                    <div className="optional">
                        <div className="anime-calendar-button">
                            <h2>View the entire calendar</h2>
                        </div>
                    </div>
                </Container> : <div className="preload">ss</div>
        )
    }
}

