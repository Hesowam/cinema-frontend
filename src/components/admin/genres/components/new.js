import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";
import RoleService from "../../../../services/RoleService";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import GenreService from "../../../../services/GenreService";

export default function NewRole({roles}) {
    const [name, setName] = useState("");


    const onSubmit = () => {
        if (name.length > 3) {
            let submitData = {
                name,
            }
            GenreService.create(submitData);
        }
    }

    return (
        <Paper className="paper">
            <h4>Add new genre</h4>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Genre name"
                    aria-describedby="basic-addon2"
                    onChange={(e)=> setName(e.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={onSubmit}>Submit</Button>
                </InputGroup.Append>
            </InputGroup>
        </Paper>
    )
}