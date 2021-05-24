import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";
import {Button, Chip, MenuItem, TextField} from "@material-ui/core";
import axios from 'axios';
import Upload from "../../../upload/Upload";
import FilmService from "../../../../services/FilmService";

export default function NewFilm({genres}) {
    const [genre, setGenre] = React.useState('Action');
    const [posterFile, setPosterFile] = React.useState(null);
    const [backgroundFile, setBackgroundFile] = React.useState(null);
    const [genreList, setGenreList] = React.useState([]);

    const [name, setName] = useState("");
    const [kpkId, setKpkId] = useState(0);
    const [trailer, setTrailer] = useState("");
    const [description, setDescription] = useState("");
    const [episodes, setEpisodes] = useState("");

    const handleChange = (e) => {
        const _genres = genreList;
        setGenreList(genreList.concat(genres.genres.find((_g) => _g.name == e.target.value)));
    }

    const submitFiles = (action, payload) => {
        switch (action) {
            case "SET_POSTER":
                setPosterFile(payload);
            case "SET_BACKGROUND":
                setBackgroundFile(payload);
        }
    }

    const onSubmit = () => {
        if (name && episodes && kpkId && trailer && description && posterFile && backgroundFile && name.length > 3 && episodes >= 1 && kpkId.length && trailer.length && description.length && posterFile.length && backgroundFile.length) {
            let submitData = {
                name,
                episodes,
                kpkId,
                description,
                trailer,
                background: "http://45.141.76.252:8000/" + backgroundFile,
                poster: "http://45.141.76.252:8000/" + posterFile,
                genresIds: genreList.map((_g) => _g.id)
            }
            FilmService.create(submitData).then(() => alert("ok"))
        }
    }

    return (
        <Paper className="paper">
            <h4>Add new films</h4>
            <div className="form">
                <TextField
                    error={false}
                    className="input"
                    label="Film name"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                    style={{width: "400px"}}
                />
                <TextField
                    error={false}
                    className="input"
                    label="Kinopoisk id"
                    onChange={(e) => setKpkId(e.target.value)}
                    variant="outlined"
                    style={{width: "200px"}}
                />
            </div>
            <div className="form">
                <TextField
                    className="input"
                    error={false}
                    label="Youtube trailer link"
                    // helperText="Incorrect entry."
                    onChange={(e) => setTrailer(e.target.value)}
                    variant="outlined"
                    style={{width: "400px"}}
                />
                <TextField
                    className="input"
                    error={false}
                    label="Episodes"
                    // helperText="Incorrect entry."
                    onChange={(e) => setEpisodes(e.target.value)}
                    variant="outlined"
                    style={{width: "200px"}}
                />
            </div>
            <div className="genres">
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Add genre"
                    onChange={(e) => {
                        let newArray = [];
                        newArray.push(genres.genres.find((_g) => _g.name == e.target.value));
                        setGenreList([...new Set([...genreList, ...newArray])])
                    }}
                    helperText="Please select genre"
                    variant="outlined"
                >
                    {genres.genres.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <div className="genres_map">
                    {genreList.map((_g) => <Chip
                        label={_g.name}
                        className="_genre_list"
                        key={_g.id}
                        variant="outlined"
                        onDelete={() => {
                            if (genreList.length <= 1) {
                                setGenreList([]);
                            } else {
                                setGenreList(genreList.filter((_genre => _genre.name != _g.name)))
                            }
                        }}
                    />)}
                </div>
            </div>
            <p>Description</p>
            <div className="form">
                <textarea className="_text_area" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <Upload type={"background"} action={"SET_BACKGROUND"} submit={submitFiles}/>
            <Upload type={"poster"} action={"SET_POSTER"} submit={submitFiles}/>
            <Button variant="contained" color="primary" className="mb-5" onClick={onSubmit}>
                Submit
            </Button>
        </Paper>
    )
}