import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import {Button, Divider, Fab, FormControl, Input, makeStyles, NativeSelect, TextField} from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
import {HEADERS, REST_API_IP, TOKEN} from "../../config";
import {useEffect, useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from "antd/es/button/button-group";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
    },

}));

const columns = [
    {
        field: 'name',
        headerName: 'Title',
        minWidth: 150,
        flex: 0.1,
        resizable: true
    },
    {
        field: 'health',
        headerName: 'Type',
        minWidth: 120,
        flex: 0.05,
    },
    {
        field: 'cuisine',
        headerName: 'Cuisine',
        minWidth: 130,
        flex: 0.05,
    },
    {
        field: 'mouths',
        headerName: 'Mouths',
        type: 'number',
        minWidth: 50,
        sortable: false,
        flex: 0.05,
    },
    {
        field: 'date_created',
        headerName: 'Created',
        type: 'dateTime',
        renderCell: (params) => {
            let current_datetime = new Date(params.value);
            let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
            return formatted_date;
        },
        minWidth: 100,
        sortable: true,
        flex: 0.1,
    },
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        minWidth: 180,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            return (
                <div className=".btns">
                    <ButtonGroup variant="text" size="small" aria-label="text outlined button group">
                        <Button
                            color="secondary"
                            size="small"
                            startIcon={<DeleteIcon/>}
                            // component={Link}
                            // to={`/meals/${params.row.id}`}
                            onClick={(event) => {
                                if (window.confirm('Are you sure you wish to delete this meal?')) {
                                    axios.delete(`${REST_API_IP}/meals/${params.row.id}`, {headers: HEADERS});
                                    window.location.reload(false);
                                }
                            }}
                        >
                            Delete
                        </Button>
                        <Button
                            color="primary"
                            size="small"
                            startIcon={<OpenInNewIcon/>}
                            component={Link}
                            to={`/meals/${params.row.id}`}
                        >
                            Open
                        </Button>
                    </ButtonGroup>
                </div>
            );
        }
    }
];

export default function Meals() {
    const classes = useStyles();
    const [formData, updateFormData] = React.useState(null);
    const [meals, setMeals] = React.useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`${REST_API_IP}/meals/`, {headers: HEADERS})
            .then(
                (result) => {
                    setMeals(result.data)
                    setIsLoaded(true);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {
            setIsLoaded(true);
            console.log(error.response);
        })
    }, []);


    const onSubmit = (event) => {
        event.preventDefault();

        axios.post(`${REST_API_IP}/meals/`,
            formData,
            {headers: HEADERS})
            .then(
                (result) => {
                    setMeals( meals.concat(result.data));
                    console.log(result.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {

            let response = JSON.stringify(error.response.data)
            alert(response);
            console.log(error.response);
        });
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value
        });
    };
    if (!isLoaded) {
        return <center>Loading ...</center>
    }

    return (
        <Container style={{ height: 600, width: '100%' }} fixed>

            <Row className="text-center">
                <form className={classes.root} onChange={handleChange} onSubmit={onSubmit} autoComplete="off">
                    <h6>Create New Meal</h6>
                    <hr/>

                    <TextField name="name" error={formData ? formData.name == "": null} id="standard-secondary" label="Meal Title" color="primary" required/>
                    <TextField name="mouths" error={formData ? formData.mouths <= 0: null} id="standard-number" label="Participants" type="number" required/>

                    <TextField id="standard-select-meal-type"
                               defaultValue={""}
                               onChange={handleChange}
                               error={formData ? formData.health <= 0: false}
                               name="health" select label="Type" helperText="Select your Meal type">
                        <MenuItem value={""}>
                            All
                        </MenuItem>
                        <MenuItem value="vegetarian">
                            Vegetarian
                        </MenuItem>
                        <MenuItem value="vegan">
                            Vegan
                        </MenuItem>
                        <MenuItem value="pecatarian">
                            Pecatarian-(Only Fish)
                        </MenuItem>
                        <MenuItem value="kosher">
                            Kosher
                        </MenuItem>
                        <MenuItem value="gluten-free">
                            Gluten-free
                        </MenuItem>

                        <MenuItem value="meat">
                            Meat
                        </MenuItem>
                    </TextField>
                    <TextField id="standard-select-cuisine"
                               defaultValue={""}
                               onChange={handleChange}
                               name="cuisine" select label="Cuisine" helperText="Select your Cuisine type">
                        <MenuItem value={""}>
                            All Cuisine
                        </MenuItem>
                        <MenuItem value="american">
                            American
                        </MenuItem>
                        <MenuItem value="asian">
                            Asian
                        </MenuItem>
                        <MenuItem value="british">
                            British
                        </MenuItem>
                        <MenuItem value="chinese">
                            Chinese
                        </MenuItem>
                        <MenuItem value="french">
                            French
                        </MenuItem>
                        <MenuItem value="italian">
                            Italian
                        </MenuItem>
                        <MenuItem value="mediterranean">
                            Mediterranean
                        </MenuItem>
                        <MenuItem value="mexican">
                            Mexican
                        </MenuItem>
                    </TextField>
                    <Fab color="primary" width="20px" aria-label="add" type="submit">
                        <AddIcon />
                    </Fab>


                </form>
            </Row>
            <hr/>

            <center><h6>My Meals</h6></center>

            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid

                        // rowDoubleClick={(params, event) => {
                        //     if (!event.ctrlKey) {
                        //         event.defaultMuiPrevented = true;
                        //         console.log(params, event)
                        //     }
                        // }}
                        rows={meals}
                        columns={columns}
                        pageSize={10}
                    />
                </div>
            </div>
        </Container>
    );
}