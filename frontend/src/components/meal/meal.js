import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Fab,  ImageList, makeStyles } from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        padding: 0,
        listStyle: 'none',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
    },

    fabProgress: {

        color: green[500],
        position: 'absolute',
        zIndex: 1,
    }
}));

const Meal = ({ id }) => {
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const classes = useStyles();
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

    useEffect(() => {
        axios.get(`${REST_API_IP}/meals/${id}`, {headers: HEADERS})
            .then(
                (result) => {
                    setMeal(result.data)
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
    }, [])


    if (error) {
        return <center>Error: {error.message}</center>;
    } else if (!isLoaded || !meal) {
        return (
            <div className="loading-card">
                <CircularProgress size={68} className={classes.fabProgress} />
            </div>);
    } else {
        return (
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
                            {meal.recipes !=null && meal.recipes?.map((recipe) => <RecipeTile style={{padding: '2px'}} del={true} recipe={recipe} setSelected handleDelete={delete_recipe}/>)};
                        </ImageList>
                    </Row>
                </div>
                <Row>
                    <Col className="offset-10">
                        <Fab color="secondary" className="add_ingredient" component={Link} to={"/recipes"}>
                            <ViewListIcon />
                        </Fab>
                    </Col>
                </Row>

            </div>
        );
    }
};

Meal.propTypes = {
    id: PropTypes.string
};

export default Meal;