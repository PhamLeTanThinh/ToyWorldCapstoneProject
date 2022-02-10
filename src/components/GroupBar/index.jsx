import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button, Card, Container } from '@mui/material';
import groupApi from './../../api/groupApi';

GroupBar.propTypes = {

};

function GroupBar(props) {


    const [groupList, setGroupList] = useState([]);
    const [url, setUrl] = useState('');

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await groupApi.getAllGroup()
                // console.log(response);
                setGroupList(response.data)
            } catch (error) {
                console.log('Failed to fetch groupList', error)
            }
        }
        fetchGroup();
    }, [])


    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                }}
            >
                {groupList?.map((group) => (
                   
                    <NavLink key={group.id} style={{ textDecoration: 'none', }} activeClassName="active" to={`/group/${group.id}`}> 
                        <Button style={{ color: 'black', }} variant="text">{group.name}</Button>
                    </NavLink>
                ))}
            </Box>
        </Container>

    );
}

export default GroupBar;