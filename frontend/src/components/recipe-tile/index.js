import React, { useEffect } from "react";
import "./style.css";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {ImageListItem, ImageListItemBar} from "@material-ui/core";
import {BrowserRouter, Link} from "react-router-dom";

export default function RecipeTile({ recipe }) {
    debugger;
    const url = `../recipes/${recipe["uri"].split("#")[1]}`
    return (
        recipe["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <ImageListItem style={{padding: '3px', height: 'auto'}} key={recipe["label"]}>
                <img src={recipe["image"]} alt={recipe["label"]} />
                <ImageListItemBar
                    title={recipe["label"]}
                    subtitle={<span>{recipe['totalTime']} minutes | {Math.round(recipe['calories'])} calories | {recipe['dishType']}</span>}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${recipe["label"]}`}
                        >
                            <a href={url}>
                            <InfoIcon />
                                </a>
                        </IconButton>
                    }
                />
            </ImageListItem>)
    )
}
