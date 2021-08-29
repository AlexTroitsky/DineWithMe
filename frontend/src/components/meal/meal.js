import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Fab, ImageList, makeStyles, TextField} from "@material-ui/core";
import {Col, Row, ThemeProvider} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.css'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExploreIcon from '@material-ui/icons/Explore';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RecipeTile from "../recipe-tile";
import ViewListIcon from '@material-ui/icons/ViewList';
import axios from "axios";
import {HEADERS, REST_API_IP} from "../../config";
import CircularProgress from "@material-ui/core/CircularProgress";
import {green} from "@material-ui/core/colors";
import UsersList from "../users-modal";
import Modal from "@material-ui/core/Modal";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import {createTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        padding: 0,
        listStyle: 'none',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
    },
    margin: {
        margin: theme.spacing(1),
    },
    fabProgress: {

        color: green[500],
        position: 'absolute',
        zIndex: 1,
    }
}));

const Meal = ({ id }) => {
    const [meal, setMeal] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const theme = createTheme({
        palette: {
            primary: green,
        },
    });
    const delete_recipe = (recipe) => {
        let r = window.confirm("Are you sure you want to delete?");
        if (r == true) {
            const currentIndex = recipe?.meals.indexOf(parseInt(id));
            const recipe_meals = [...recipe?.meals];

            if (currentIndex !== -1) {
                recipe_meals.splice(currentIndex, 1);
            }
            console.log("new recipes: ", recipe_meals);

            axios.put(`${REST_API_IP}/recipes/${recipe.id}`, {'meals': recipe_meals} ,{headers: HEADERS}).then(
                (result) => {
                    window.location.reload();
                    console.log(result);
                }
            ).catch((error) => {
                setError(error);
            });
        }
    }
    const get_users = () => {
        axios.get(`${REST_API_IP}/users/`, {headers: HEADERS})
            .then(
                (result) => {
                    setUsers(result.data);
                },
            ).catch((error) => {
            console.log(error.response);
        });
    }

    const handleOpen = () => {
        get_users();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeUser = (recipe, value) => {
        axios.put(`${REST_API_IP}/recipes/${recipe.id}`, {'user': value} ,{headers: HEADERS}).then(
                (result) => {
                    console.log(result);
                }
            ).catch((error) => {
                setError(error);
            });
    }


    useEffect(() => {
        axios.get(`${REST_API_IP}/meals/${id}`, {headers: HEADERS})
            .then(
                (result) => {
                    setMeal(result.data)
                    setSelected(result.data.members);

                    setIsLoaded(true);
                    console.log(result.data)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {
            setIsLoaded(true);
            console.log(error.response);
        })
        get_users()
    }, [])

    const user_component = (recipe) => <center>
                                <br/>
                                <label htmlFor="baker">Baker: </label>
                                <select defaultValue={recipe.user} name="baker" id="baker" onChange={(e) => handleChangeUser(recipe, e.target.value)}>
                                    {users.length > 0 && users.filter((user) => selected.includes(user.id)).map(f_user => {
                                        return <option value={f_user.id}>
                                            {f_user.username}
                                        </option>
                                    })
                                    }
                                </select>
                            </center>;


    if (error) {
        return <center>Error: {error.message}</center>;
    } else if (!isLoaded || !meal) {
        return (
            <div className="loading-card">
                <CircularProgress size={68} className={classes.fabProgress} />
            </div>);
    } else {
        return (
            <div>
            <div className='recipe-card '>

                <div className="recipe-card__body">
                    <h2 className="recipe-card__heading text-center">{meal.name}</h2>
                    <ul className="recipe-details">
                        <li className="recipe-details-item time">
                            <center>
                                <ExploreIcon/>
                                <span className="value"> {meal.cuisine ? meal.cuisine : "All"}</span>
                            </center>
                            <span className="title">Cuisine</span>
                        </li>
                        <li className="recipe-details-item servings">
                            <center>
                                <PersonIcon/>
                                <span className="value"> {meal.mouths}</span>
                            </center>
                            <span className="title">Participants</span>
                        </li>
                        <li className="recipe-details-item calories">
                            <center>
                                <FavoriteIcon/>
                                <span className="value"> {meal.health ? meal.health : "All"}</span>
                            </center>
                            <span className="title">Meal</span>
                        </li>
                    </ul>

                    <ul className="recipe-card__nav text-center">
                        <h3 className="active"><ListAltIcon/> Recipes</h3>
                    </ul>
                    <Row className={"recipes-container"}>
                        <ImageList cols={4} classes={{root: classes.root}}>
                            {meal.recipes != null && meal.recipes?.map((recipe) =>
                                <RecipeTile style={{padding: '2px'}} del={true} recipe={recipe} setSelected
                                            handleDelete={delete_recipe}
                                            additional_component={user_component(recipe)}/>)
                            }
                        </ImageList>
                    </Row>
                </div>
                <Row>
                    <Col xs={3}>
                        <Fab color="secondary"  className="share_ingredient" onClick={handleOpen}>
                            <GroupAddIcon />
                        </Fab>
                    </Col>
                    <Col className="offset-7">
                        <Fab color="secondary" className="add_ingredient" component={Link} to={"/recipes"}>
                            <ViewListIcon />
                        </Fab>
                    </Col>
                </Row>
            </div>
                <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition aria-labelledby="select users" aria-describedby="select the users for the meal">
                    <UsersList meal_id={id} users={users} selected_users={selected} set_selected={setSelected} />
                </Modal>

            </div>
        );
    }
};

Meal.propTypes = {
    id: PropTypes.string
};

export default Meal;