import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {getGenres as getGenresAction} from "../../../redux/modules/genres";

import Table from './components/table';
import NewFilm from "./components/new";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


function RolesAdminComponent ({genres, getGenres}){
    const [value, setValue] = React.useState(0);

    useEffect(()=> {
        getGenres();
        }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const deleteFilm = (id) => {

    }
    return(
        <div>
            <AppBar position="static" className="_tabs">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="All records" {...a11yProps(0)} />
                    <Tab label="Create new record" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                    <Table genres={genres}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {console.log(genres)}
                <NewFilm genres={genres}/>
            </TabPanel>
        </div>
    )
}

export default connect(
    ({genres}) => ({genres}),
    {
        getGenres: getGenresAction
    }
)(RolesAdminComponent)