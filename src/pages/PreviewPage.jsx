import React, {Component} from 'react';

import LocalStorageService from "../services/LocalStorageService";
import {Carousel} from "react-bootstrap";

export default class PreviewPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: LocalStorageService.isActive()
        }
    }

    render() {
        return (
            <div className="container">
                <Carousel className="mt-3">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height: "300px"}}
                            src="https://i.ibb.co/xm1PN9X/2-layers.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{textAlign: 'left'}}>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height: "300px"}}
                            src="https://i.ibb.co/xm1PN9X/2-layers.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{textAlign: 'left'}}>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>)
    }
}

