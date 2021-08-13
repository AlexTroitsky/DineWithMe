import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import {Button, Divider, Fab, FormControl, Input, makeStyles, NativeSelect, TextField} from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from '@material-ui/core/MenuItem';

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
        field: 'title',
        headerName: 'Title',
        minWidth: 150,
        flex: 0.2,
        resizable: true
    },
    {
        field: 'health',
        headerName: 'Health',
        minWidth: 120,
        flex: 0.1,
    },
    {
        field: 'cuisine',
        headerName: 'Cuisine',
        minWidth: 150,
        flex: 0.1,
    },
    {
        field: 'people',
        headerName: 'Mouths',
        type: 'number',
        minWidth: 150,
        sortable: false,
        flex: 0.1,
    },
    {
        field: "open",
        headerName: "Open",
        sortable: false,
        width: 90,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            console.log(params.row)
            return (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<OpenInNewIcon/>}
                    component={Link}
                    to={`/meals/${params.row.id}`}
                >
                </Button>
            );
        }
    }
];

const rows = [
    { id: 1, title: 'testing asjdjakksdhkjasdjkh ashd', health: 'Vegan', cuisine: "Italian", people: 5},
    { id: 2, title: 'testing asjdjakksdhkjasdjkh ashd', health: 'Vegan', cuisine: "Italian", people: 5},
    { id: 3, title: 'testing asjdjakksdhkjasdjkh ashd', health: 'Vegan', cuisine: "Italian", people: 5},
    { id: 4, title: 'testing asjdjakksdhkjasdjkh ashd', health: 'Vegan', cuisine: "Italian", people: 5},

];

export default function Meals() {
    const classes = useStyles();
    const [formData, updateFormData] = React.useState(null);
    const [meals, setMeals] = React.useState(rows);
    const onSubmit = (event) => {
        event.preventDefault();
        debugger
        formData['id'] = meals[meals.length - 1].id + 1;
        setMeals( meals.concat(formData))

    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container style={{ height: 600, width: '100%' }} fixed>

            <Row className="text-center">
                <form className={classes.root} onChange={handleChange} onSubmit={onSubmit} autoComplete="off">
                    <h6>Create New Meal</h6>
                    <hr/>

                    <TextField name="title" error={formData ? formData.title == "": null} id="standard-secondary" label="Meal Title" color="primary" required/>
                    <TextField name="people" error={formData ? formData.people <= 0: null} id="standard-number" label="People eating" type="number" required/>

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
                        <MenuItem value="red-meat-free">
                            Red-meat-free
                        </MenuItem>
                        <MenuItem value="kosher">
                            Kosher
                        </MenuItem>
                        <MenuItem value="gluten-free">
                            Gluten-free
                        </MenuItem>
                    </TextField>
                    <TextField id="standard-select-cuisine"
                               defaultValue={""}
                               onChange={handleChange}
                               name="cuisine" select label="Cuisine" helperText="Select your Cuisine type">
                        <MenuItem value={""}>
                            All Cuisine
                        </MenuItem>
                        <MenuItem value="American">
                            American
                        </MenuItem>
                        <MenuItem value="Asian">
                            Asian
                        </MenuItem>
                        <MenuItem value="British">
                            British
                        </MenuItem>
                        <MenuItem value="Chinese">
                            Chinese
                        </MenuItem>
                        <MenuItem value="French">
                            French
                        </MenuItem>
                        <MenuItem value="Italian">
                            Italian
                        </MenuItem>
                        <MenuItem value="Kosher">
                            Kosher
                        </MenuItem>
                        <MenuItem value="Mediterranean">
                            Mediterranean
                        </MenuItem>
                        <MenuItem value="Mexican">
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
                        rowDoubleClick={(params, event) => {
                            if (!event.ctrlKey) {
                                event.defaultMuiPrevented = true;
                                console.log(params, event)
                            }
                        }}
                        rows={meals}
                        columns={columns}
                        pageSize={10}
                    />
                </div>
            </div>
        </Container>
    );
}