import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Box } from '@mui/material/';

MessageObj.propTypes = {

};

function MessageObj(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Avatar sx={{ mr: 1 }}>A</Avatar>
                <Typography sx={{ mr: 1 }}>Create at</Typography>
            </Box>

            <Box sx={{
                p: 1,
                ml: '40px',
                width: 'auto'

            }}>
                <Typography>messsage text</Typography>
            </Box>
        </Box>
    );
}

export default MessageObj;