import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import ChatView from './ChatView/ChatView';
import { Grid } from '@mui/material/';

message.propTypes = {

};



function message(props) {

    const currentUser = useSelector(state => state.account.current);
    console.log(currentUser);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Sidebar  />
                </Grid>
                <Grid item xs={8}>
                    <ChatView/>
                </Grid>
            </Grid>
        </>
    );
}

export default message;