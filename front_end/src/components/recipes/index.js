import Axios from "axios";
import {useEffect, useState} from "react";
import "./style.css";
import RecipeTile from "../recipe-tile";
import {
    FormControl,
    ImageList,
    Input,
    makeStyles,
    NativeSelect,
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

import {Col, Container, Row} from "react-bootstrap";
import {API_URL, APP_ID, APP_KEY} from "../../config";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

function Receipes() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [health, setHealth] = useState("");
    const [cuisine, setCuisine] = useState("");


    const classes = useStyles();

    let getRecipeInfo = async () => {
        let url = `${API_URL}?type=public&imageSize=REGULAR&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        console.log(health, cuisine)
        if (health.length > 0)
            url += `&health=${health}`;
        if (cuisine.length > 0)
            url += `&cuisineType=${cuisine}`;
        let result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
        console.log(result);
    };

    useEffect(() => {
        getRecipeInfo();
        }, [cuisine, health]
    );


    const onSubmit = (e) => {
        e.preventDefault();
        if (query != null)
            getRecipeInfo();
    };

    return (

        <Container className="app"  >
            <Row className="align-items-center">
                <Col xs={6} style={{display: 'flex', justifyContent: 'center'}}>
                   <form onSubmit={onSubmit}>
                    <Input
                        type="text"
                        placeholder="Enter ingredient"
                        autoComplete="Off"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                       <IconButton type="submit" className={classes.iconButton} aria-label="search">
                           <SearchIcon />
                       </IconButton>

                </form>

                </Col>
                <Col xs={3}>
                    <FormControl className={classes.margin}>
                        <NativeSelect onChange={(e) => setHealth(e.target.value)}>
                            <option value={""}>
                                All
                            </option>
                            <option value="vegetarian">
                                Vegetarian
                            </option>
                            <option value="vegan">
                                Vegan
                            </option>
                            <option value="pecatarian">
                                Pecatarian-(Only Fish)
                            </option>
                            <option value="red-meat-free">
                                Red-meat-free
                            </option>
                            <option value="kosher">
                                Kosher
                            </option>
                            <option value="gluten-free">
                                Gluten-free
                            </option>
                        </NativeSelect>
                    </FormControl>

                </Col>
                <Col xs={3}>
                    <FormControl className={classes.margin}>
                        <NativeSelect onChange={(e) => setCuisine(e.target.value)}>
                            <option value={""}>
                                All Cuisine
                            </option>
                            <option value="American">
                                American
                            </option>
                            <option value="Asian">
                                Asian
                            </option>
                            <option value="British">
                                British
                            </option>
                            <option value="Chinese">
                                Chinese
                            </option>
                            <option value="French">
                                French
                            </option>
                            <option value="Italian">
                                Italian
                            </option>
                            <option value="Kosher">
                                Kosher
                            </option>
                            <option value="Mediterranean">
                                Mediterranean
                            </option>
                            <option value="Mexican">
                                Mexican
                            </option>
                        </NativeSelect>
                    </FormControl>
                </Col>
            </Row>
            <Row className="justify-content-center ">
                <ImageList className={"justify-content-center"}
                           style={{"margin": 20}}
                >
                    {recipes !== [] && recipes.map((recipe) => <RecipeTile style={{padding: '2px'}} recipe={recipe} />)};
                </ImageList>
            </Row>
        </Container>
    );
}

export default Receipes;
