import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import ChatView from './ChatView/ChatView';
import { Grid } from '@mui/material/';
import { Form, Button } from 'react-bootstrap';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { db } from '../../Firebase/firebase';
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRouteMatch } from 'react-router-dom';
import { useCollectionData, useCollection, useDocumentData } from 'react-firebase-hooks/firestore';
import accountApi from '../../api/accountApi';

message.propTypes = {

};

function message(props) {

    const currentUser = useSelector(state => state.account.current);

    const { params: { id } } = useRouteMatch();

    const [users, setUsers] = useState([]);

    //   FETCH USER LIST
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await accountApi.getAll();
                console.log();
                setUsers(response.data);
            } catch (error) {
                console.log('Failed to fetch userList', error)
            }
        }
        fetchUser();
    }, [])

    const q = query(collection(db, `messages/${id}/${id}`), orderBy("timestamp"));
    const [messages] = useCollectionData(q);


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Sidebar users={users} />
                </Grid>
                <Grid item xs={8}>
                    <ChatView id={id} users={users} messages={messages} />
                </Grid>
            </Grid>
        </>
    );
}

export default message;

