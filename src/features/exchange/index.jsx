import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../components/Header/index';
import { Box } from '@mui/material/';

Exchange.propTypes = {
    
};

function Exchange(props) {
    return (
        <div>
            <Header/>
            <Box sx={{paddingTop: '70px'}}></Box>
            <h1>Exchange page</h1>
        </div>
    );
}

export default Exchange;