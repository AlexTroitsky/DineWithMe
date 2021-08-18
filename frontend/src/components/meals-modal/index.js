import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import clsx from "clsx";
import axios from "axios";
import {HEADERS, REST_API_IP} from "../../config";
import {Dialog, DialogTitle} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  wrapper: {
    display: 'flex',

    margin: theme.spacing(1),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MealsList({recipe_id, meals, selected_meals, close_handler}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(selected_meals);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });


  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      axios.patch(`${REST_API_IP}/recipes/${recipe_id}`, {'meals': checked}, {headers:HEADERS}).then(
          (result) => {
            setSuccess(true);
            setLoading(false);
          }
      ).catch((result) => {
        console.log(result.data)
        setSuccess(false);
        setLoading(false);
        let response = JSON.stringify(result.response.data)
        alert(response);
      });
    }
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
      <div className={classes.paper}>
        <List className={classes.root}>
          {meals?.map((meal) => {
            const labelId = `checkbox-list-label-${meal.id}`;

            return (
                <ListItem key={meal.id} role={undefined} dense button onClick={handleToggle(meal.id)}>
                  <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(meal.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={meal.name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                      <CommentIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            );
          })}
        </List>

        <div className={classes.wrapper}>
          <Fab
              aria-label="save"
              color="primary"
              className={buttonClassname}
              onClick={handleButtonClick}
          >
            {loading && <CircularProgress size={68} className={classes.fabProgress} />}
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
        </div>
      </div>
  );
}