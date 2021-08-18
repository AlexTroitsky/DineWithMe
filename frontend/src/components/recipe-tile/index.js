import React from "react";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import {ButtonGroup, ImageListItem, ImageListItemBar} from "@material-ui/core";
import "./style.css";

export default function RecipeTile({ recipe, del, handleDelete }) {
    const url = `../recipes/${recipe["uri"].split("#")[1]}`;
    const delete_it = (e) => {
       e.preventDefault();
       handleDelete(recipe);
    }
    return (
        recipe["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <ImageListItem style={{padding: '3px', height: 'auto'}} key={recipe["label"]}>
                <img src={recipe["image"]} alt={recipe["label"]} />
                <ImageListItemBar
                    title={recipe["label"]}
                    subtitle={<span>{recipe['totalTime']} minutes | {Math.round(recipe['calories'])} calories | {recipe['dishType']}</span>}
                    actionIcon={
                        <ButtonGroup color="white" aria-label="outlined primary button group">
                            { del===true ?
                                <IconButton aria-label={`info about ${recipe["label"]}`} onClick={delete_it}>
                                        <DeleteIcon />
                                </IconButton>
                                : null }

                            <IconButton aria-label={`info about ${recipe["label"]}`}>
                                <a href={url}>
                                    <InfoIcon />
                                </a>
                            </IconButton>

                        </ButtonGroup>
                    }
                />

            </ImageListItem>

        )
    )
}
