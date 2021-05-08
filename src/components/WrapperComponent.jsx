import React, {Component} from "react";
import {Grid} from "@material-ui/core";


export default class WrapperComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    card(film) {
        return (
            <Grid item lg={0}>
                <div className="wrapper-card" key={film.id}>
                    <img src={film.poster} alt={film.name}/>
                    <div className="info">
                        <h3>{film.name}</h3>
                        <p>{film.episodes} episodes</p>
                        <div className="card-button">Watch the movie</div>
                    </div>
                </div>
            </Grid>)
    }

    collector(list) {
        return list.slice(0, 6).map(film => this.card(film));
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <Grid container spacing={3} direction="row"
                      justify="center"
                      alignItems="center">
                    {this.collector(this.props.list)}
                </Grid>
            </div>
        )
    }


}