import React from 'react';

import AppBar from '../../component/template/AppBar';
import CardDetail from '../../component/template/CardDetail';
 
import Container from '@material-ui/core/Container';
 

function Detail(){

    return (
        <div>
        <AppBar />
        <Container maxWidth="sm"> 

            <CardDetail />         
                 
        </Container>
         
        </div>
    );

}

export default Detail;