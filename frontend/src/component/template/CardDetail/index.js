import React, {useEffect, useState } from 'react';
import pokeApi from '../../../services/pokeApi';
import {  useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
 
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip: {
    marginRight:5,
    marginBottom:10
    },
 titleChip:{

    marginBottom:10
 }
    
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] =  useState(false);
  const [characters, setCharacters] =  useState([]);
  const [abilities, setAbilities] =  useState([]);
  const [types, setTypes] =  useState([]);

  let { name, id } = useParams();

  var firstName = name.toUpperCase().substr(0,1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() =>{
    pokeApi.get(`pokemon/${id}`)
    .then( response => {
        setCharacters(response.data)
        setAbilities(response.data.abilities)
        setTypes(response.data.types)
 
    })
  },[id]);
     
  return (
    <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
         {firstName}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title= {characters.name}
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      title={name}
    />

    <CardContent>
    <Typography className={classes.titleChip} variant="body"   component="h2">
        Abilitys
    </Typography>
    
    {abilities.map( abilitie => (
        <Chip 
        label={abilitie.ability.name} 
        className={classes.chip}
        color="secondary"
        />
        
    ))}

    <Typography className={classes.titleChip} variant="body"   component="h2">
        Types
    </Typography>
      
    {types.map( type => (
        <Chip 
        label={type.type.name} 
        className={classes.chip}
        color="secondary"
        />
        
    ))}

    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    
  </Card>
  );
}