import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Box } from '@mui/material/';
import { useSelector } from 'react-redux';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase';
import { makeStyles } from '@mui/styles';
import { format, compareAsc } from 'date-fns'
import endOfDay from './../../../../node_modules/date-fns/esm/endOfDay/index';

const useStyles = makeStyles(theme => ({
    msgSender: {
        alignItems: 'flex-end',
    },
    msgReceiver: {
        alignItems: 'flex-start'
    },
    msgChatSender: {
        backgroundColor: '#DB36A4',
        color: 'white',
    },
    msgChatReceiver: {
        backgroundColor: '#ddd',
        color: 'black',
    }
}))


MessageObj.propTypes = {
    msg: PropTypes.object,
    users: PropTypes.array
};

function MessageObj({ msg, users }) {

    console.log("msg: ", msg);
    const currentUser = useSelector(state => state.account.current);
    const currrentUserId = currentUser.accountId

    const classes = useStyles();

    const sender = msg.fromId == currrentUserId || msg.fromId === currrentUserId;
    // const receiver = msg.fromId !== currrentUserId;
    let receiver = users?.filter(user => user.id == msg.fromId)[0];
    // const sender = msg.sender === currentUser.name;

    return (

        <Box className={sender ? classes.msgSender : classes.msgReceiver}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                margin: '0'
            }}>

            <Box
                sx={{
                    p: 1,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                {sender ?
                    <>
                        <Typography sx={{ mr: 1 }}>
                            {currentUser.name}
                        </Typography>
                        <Typography>
                        {/* {format(endOfDay(msg.timestamp.toDate().toISOString()), 'yyyy-MM-dd HH:mm:ss')} */}
                        {(msg.timestamp.toDate().toISOString())}
                            {/* {moment().format(msg.timestamp)} */}
                        </Typography>
                        <Avatar alt="name" src={currentUser.avatar} />

                    </> :
                    <>
                        <Avatar sx={{ mr: 1 }} alt="name" src={receiver?.avatar} />
                        <Typography >
                            {receiver?.name}
                        </Typography>
                    </>
                }
            </Box>

            <Box
                className={sender ? classes.msgChatSender : classes.msgChatReceiver}
                sx={{
                    p: 1,
                    ml: '40px',
                    width: 'auto',
                    borderRadius: '10px'
                }}>
                <Typography>{msg.content}</Typography>
            </Box>
        </Box>

    );
}

export default MessageObj;