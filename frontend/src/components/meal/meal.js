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

const useStyles = makeStyles((theme) => ({
  root: {
          display: 'flex',
          flexWrap: 'nowrap',
          transform: 'translateZ(0)',
          padding: 0,
          listStyle: 'none',
          overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
  }
}));

const Meal = ({ id }) => {
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const classes = useStyles();

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
        // const url = `${API_URL}/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
        // fetch(url)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             setRecipes(result.recipe);
        //             console.log(result)
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )
        let demo_recipe = {"recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4bb99424e1bbc40d3cd1d891883d6745",
            "label": "Frothy Iced Matcha Green Tea Recipe",
            "image": "https://www.edamam.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg",
            "url": "http://www.seriouseats.com/recipes/2016/08/iced-matcha-green-tea-recipe.html",
            "yield": 2,
            "calories": 0.06,
            "totalWeight": 232.796185,
            "totalTime": 2,
            "cuisineType": [
                "chinese"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "drinks"
            ],
        }}
    }, [])


    if (error) {
        return <center>Error: {error.message}</center>;
        } else if (!isLoaded || !meal) {
            return <center>Loading...</center>;
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
                             {meal.recipes !=null && meal.recipes?.map((recipe) => <RecipeTile style={{padding: '2px'}} recipe={recipe}/>)};
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