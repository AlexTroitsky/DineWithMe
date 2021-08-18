import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {API_URL, APP_ID, APP_KEY, HEADERS, REST_API_IP} from "../../config";
import {Button, Container, Fab, } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import {Col, Row} from "react-bootstrap";
import './style.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MealsList from "../meals-modal";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {green} from "@material-ui/core/colors";
import axios from "axios";
import { toUUID } from 'to-uuid'
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    fabProgress: {

        color: green[500],
        position: 'absolute',
        zIndex: 1,
    }
}));

const Recipe = ({ id, is_logged_in }) => {
    const [recipeData, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [meals, setMeals] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const recipe_id = toUUID(id.split('_')[1]);

    const classes = useStyles();
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(alert("Recipe copied to clipboard!"));
    };

    const handleOpen = () => {
        if (!is_logged_in)
            return;

        axios.get(`${REST_API_IP}/meals/`, {headers: HEADERS})
            .then(
                (result) => {
                    axios.get(`${REST_API_IP}/recipes/${recipe_id}`, {headers:HEADERS}).then(
                        (result) =>
                        {
                            setSelected(result.data.meals);
                        }
                    ).catch((error) => {
                        debugger;
                        recipeData['id'] = recipe_id;
                        recipeData['cuisineType'] = recipeData['cuisineType'][0];
                        recipeData['mealType'] = recipeData['mealType'][0];
                        recipeData['dishType'] = recipeData['dishType'][0];

                        axios.post(`${REST_API_IP}/recipes/`, recipeData, {headers:HEADERS}).catch(error => alert(JSON.stringify(error.response.data)));
                    });

                    setMeals(result.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {
            console.log(error.response);
        });



        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const url = `${API_URL}/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRecipe(result.recipe);
                    console.log(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <center>Error: {error.message}</center>;
        } else if (!isLoaded || !recipeData) {
            return (
                <div className="loading-card">
                    <CircularProgress size={68} className={classes.fabProgress} />
                </div>);
    } else {
        return (
            <div>
                <div className='recipe-card '>

                    <div className="recipe-card__body">
                        <h2 className="recipe-card__heading text-center">{recipeData.label}</h2>
                        <img className="d-block w-100" alt="recipe" style={{maxHeight: '30rem'}} src={recipeData.image}/>

                        <ul className="recipe-details">
                            <li className="recipe-details-item time">
                                <center>
                                    <AccessTimeIcon/>
                                    <span className="value"> {recipeData.totalTime}</span>
                                </center>
                                <span className="title">Minutes</span>
                            </li>
                            <li className="recipe-details-item servings">
                                <center>
                                    <PersonIcon/>
                                    <span className="value"> {recipeData.yield}</span>
                                </center>
                                <span className="title">Servings</span>
                            </li>
                            <li className="recipe-details-item calories">
                                <center>
                                    <FitnessCenterIcon/>
                                    <span className="value"> {Math.round(recipeData.calories)}</span>
                                </center>
                                <span className="title">Calories</span>
                            </li>
                        </ul>

                        <ul className="recipe-card__nav text-center">
                            <h3 className="active"><MenuBookIcon/> Ingredients</h3>
                        </ul>

                        <ul className="recipe-card__ingredients">
                            {recipeData.ingredients != null ?
                                recipeData.ingredients.map((ingredient, index) =>
                                    <li key={index}>{index+1}. {ingredient.text}</li>)
                                : null}

                        </ul>

                    </div>

                    {is_logged_in ?
                    <Row>
                        <Col xs={3}>
                           <Fab color="secondary"  className="share_ingredient" onClick={handleShare}>
                                <ShareIcon />
                            </Fab>
                        </Col>
                        <Col className="offset-7">
                            <Fab color="secondary"  className="add_ingredient" onClick={handleOpen}>
                                <AddIcon />
                            </Fab>
                        </Col>
                    </Row> : <div />}

                </div>

                <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                        <MealsList recipe_id={recipe_id} recipe={recipeData} meals={meals} close_handler={handleClose} selected_meals={selected}/>
                </Modal>
            </div>
        );
    }
};

Recipe.propTypes = {
    id: PropTypes.string,
    is_logged_in: PropTypes.bool
};

export default Recipe;