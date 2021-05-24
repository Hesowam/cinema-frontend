import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";
import RoleService from "../../../../services/RoleService";
import {Button, FormControl, InputGroup} from "react-bootstrap";

export default function NewRole({roles}) {
    const [name, setName] = useState("");


    const onSubmit = () => {
        if (name.startsWith("ROLE_")) {
            let submitData = {
                name,
            }
            RoleService.create(submitData);
        } else {
            alert("The name must start with ROLE_")
        }
    }

    return (
        <Paper className="paper">
            <h4>Add new role</h4>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="ROLE_NAME"
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