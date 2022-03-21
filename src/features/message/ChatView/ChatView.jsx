import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Button } from '@mui/material/';
import InfoIcon from '@mui/icons-material/Info';
import './ChatView.scss'
import MessageObj from './../MessageObj/MessageObj';
import InputField from './../../../components/form-controls/InputFields/index';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import * as yup from "yup";
import ChatField from '../../../components/form-controls/ChatField/ChatField';

ChatView.propTypes = {

};



function ChatView(props) {


    const form = useForm({
        defaultValues: {
            message: ''
        },
        // resolver: yupResolver(schema),
    })
    const handleSubmit =  (values) => {
        console.log("values: ", values);

        form.reset();
    }






    return (
        <div className='ChatView'>
            <div className='ChatHeader'>
                <div className='info'>
                    <p>Chat Name</p>
                    <span>Mo ta chat</span>
                </div>
                <div>
                    <IconButton>
                        <InfoIcon />
                    </IconButton>
                </div>
            </div>

            <div className='ChatContent'>
                <div className="MessageList">
                    <MessageObj />
                    <MessageObj />
                    <MessageObj />
                    <MessageObj />
                </div>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', padddingRight: '50px',width:'70%' }}>
                        <ChatField name="message" label='message' form={form}/>
                        <IconButton sx={{ height: '50px', width: '50px' }} type='submit'>
                            <SendIcon></SendIcon>
                        </IconButton>
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default ChatView;