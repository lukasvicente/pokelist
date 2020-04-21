import React from 'react';

import AppBar from '../../component/template/AppBar';
import CardImg from '../../component/template/CardImg';
import Footer from '../../component/template/Footer';


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginTop:40
    },
    dividerTitle: {
        marginBottom:20,

    }
  }));
  

function Home(){

    const classes = useStyles();
    
    return ( 
        <div>
            <AppBar />
            <Container >
                <Typography variant="h5" className={classes.title}>
                    Personagens
                </Typography>
                <Divider className={classes.dividerTitle} />
                <CardImg /> 
            </Container>
            <Footer />
        </div>
    );
}

export default Home;