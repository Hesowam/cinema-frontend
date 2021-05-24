import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Button, Fade, FormControl, InputBase} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Backdrop from '@material-ui/core/Backdrop';
import Modal from "@material-ui/core/Modal";
import {InputGroup} from "react-bootstrap";
import FilmService from "../../../../services/FilmService";
import RoleService from "../../../../services/RoleService";
import UserService from "../../../../services/UserService";

const columns = [
    {id: 'id', label: 'Id', minWidth: 30},
    {id: 'name', label: 'Name', minWidth: 100},
    {
        id: 'created',
        label: 'Created on',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'updated',
        label: 'Updated on',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 100,
        align: 'left',
    },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: "80vh",
    },
    title: {
        flex: '1 1 100%',
        display: "flex",
        paddingTop: 15,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "100%",
        border: "1px solid #E0E0E0",
        borderRadius: "6px",
        padding: "10px"
    },
    iconButton: {
        padding: 10,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "white",
        boxShadow: 5,
        padding: 15,
        width: 700,
        height: 400,
    },
});

export default function FilmsAdminComponent({roles}) {
    const classes = useStyles();
    const [input, setInput] = React.useState('');
    const [filmsRows, setFilmsRows] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState({});

    const [name, setName] = React.useState("");

    useEffect(() => {
        if (input.length <= 0) {
            setFilmsRows(roles.roles)
        }
    })

    const update = () => {
        const toUpdate = {
            name: name.length > 0 ? name : edit.name,
        }
        RoleService.update(toUpdate, edit.id);
    }
    const onDeleteRole = (role) => {
        RoleService.delete(role);
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChangeInput = (e) => {
        setInput(e.target.value)
        const result = roles.roles.filter(value => value.name.toLowerCase().search(e.target.value.toLowerCase()) != -1 && value);
        setFilmsRows(result || [])
    }

    const handleSearch = () => {
        const result = roles.roles.filter(value => value.name.toLowerCase().search(input.toLowerCase()) != -1 && value);
        setFilmsRows(result || [])
    }

    const formatData = (time) => {
        let con = "0";
        if (time < 10) {
            return con + time;
        }
        return time;
    }

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                <InputBase
                    className={classes.input}
                    placeholder="Search roles by name"
                    inputProps={{'aria-label': 'search roles'}}
                    onChange={handleChangeInput}
                />
            </Typography>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filmsRows.map(row =>
                            <TableRow>
                                <TableCell>
                                    {row.id}
                                </TableCell>
                                <TableCell>
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {`(${formatData(new Date(row.created).getHours())}:${formatData(new Date(row.created).getMinutes())}) ${formatData(new Date(row.created).getDate())}.${formatData(new Date(row.created).getMonth())}.${new Date(row.created).getUTCFullYear()}`}
                                </TableCell>
                                <TableCell>
                                    {`(${formatData(new Date(row.updated).getHours())}:${formatData(new Date(row.updated).getMinutes())}) ${formatData(new Date(row.updated).getDate())}.${formatData(new Date(row.updated).getMonth())}.${new Date(row.updated).getUTCFullYear()}`}
                                </TableCell>
                                <TableCell style={{display: "flex"}}>
                                    <div className="actions">
                                        <EditIcon className="table_icon" onClick={() => {
                                            setEdit(row)
                                            setOpen(true)
                                        }}/>
                                    </div>
                                    <div className="actions">
                                        <DeleteOutlineIcon className="table_icon" onClick={()=> onDeleteRole(row.id)}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={[classes.paper]}>
                        <p>Edit {edit.name}</p>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <input type="text" className="_form_input" defaultValue={edit.name} placeholder={edit.name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </InputGroup>
                        <Button variant="contained" style={{float: "right"}} color="primary" onClick={update}>
                            Update data
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </Paper>
    );
}