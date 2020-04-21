import React from 'react';

import AppBar from '../../component/template/AppBar';
import Footer from '../../component/template/Footer';
import Tabs from '../../component/template/Tabs';


import Container from '@material-ui/core/Container';
 
function Home(){

 
    return ( 
        <div>
            <AppBar />
            <Container >
                <Tabs />
                 
            </Container>
            <Footer />
        </div>
    );
}

export default Home;