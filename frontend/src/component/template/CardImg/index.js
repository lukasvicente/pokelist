import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Add from '@material-ui/icons/Add';


import pokeApi from '../../../services/pokeApi';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '86.25%', // 16:9
    backgroundColor:'#000'
  },
  cardContent: {
    flexGrow: 1,
  },
  button:{
    marginTop:10,
  }
}));


export default function Album() {
  const classes = useStyles();

  const [ characters, setCharacters] = useState([]);
  const [ counter, setCounter] = useState(12);
 
 
  useEffect(() =>{
    pokeApi.get(`pokemon/?limit=${counter}`)
    .then( response => {
      setCharacters(response.data.results)
 
    })
  },[counter]);

  
  function increment(){

    setCounter(counter + 9)

  }
   
  return (
    <React.Fragment>
      <CssBaseline />
       
      <main>

          <Grid container spacing={6}>
            {characters.map((character) => (
              <Grid item key={character} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image={`https://pokeres.bastionbot.org/images/pokemon/${(character.url).split('/')[6]}.png`}
                    title={character.name}
                    
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {(character.name).toUpperCase()}
                    </Typography>
                    <Typography>
                    Description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/detail/${character.name}/${(character.url).split('/')[6]}`} style={{ textDecoration: 'none',color:"inherit" }}>
                      <Button   variant="outlined" color="secondary">
                        Detail
                      </Button>
                    </Link>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<Add />}
        onClick={increment}
      >
        Mais
      </Button>   
      </main>
       
    </React.Fragment>
  );
}