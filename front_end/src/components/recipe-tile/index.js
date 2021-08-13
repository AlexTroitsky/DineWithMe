import React, { useEffect } from "react";
import "./style.css";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {ImageListItem, ImageListItemBar} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function RecipeTile({ recipe }) {
   const url = `recipes/${recipe["recipe"]["uri"].split("#")[1]}`
    console.log(url)

  return (
      recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
          <ImageListItem style={{padding: '3px', height: 'auto'}} key={recipe["recipe"]["label"]}>
              <img src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} />

              <ImageListItemBar
                  title={recipe["recipe"]["label"]}
                  subtitle={<span>{recipe['recipe']['totalTime']} minutes | {Math.round(recipe['recipe']['calories'])} calories | {recipe['recipe']['dishType']}</span>}
                  actionIcon={
                      <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${recipe["recipe"]["label"]}`}
                          component={Link}
                          to={url}
                      >
                          <InfoIcon />
                      </IconButton>
                  }
              />
          </ImageListItem>)
  )
}
