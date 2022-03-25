import InfoIcon from '@mui/icons-material/Info';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton } from '@mui/material/';
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ChatField from '../../../components/form-controls/ChatField/ChatField';
import MessageObj from './../MessageObj/MessageObj';
import './ChatView.scss';
import { useSelector } from 'react-redux';
import { addDoc, collection, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import { useLocation, useParams } from 'react-router-dom';
import { db } from '../../../Firebase/firebase';


ChatView.propTypes = {
    messages: PropTypes.array,
    users: PropTypes.array,
    id: PropTypes.string
};



function ChatView({ messages, users, id }) {

    // Current User
    const currentUser = useSelector(state => state.account.current);
    const currrentUserId = currentUser.accountId

    console.log("messages: ", messages);

    // Scroll chat view when have new msg
    const messageRef = useRef();
    console.log("messageRef: ", messageRef);

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const form = useForm({
        defaultValues: {
            message: ''
        },
        // resolver: yupResolver(schema),
    })
    const handleSubmit = async (values) => {
        console.log("values: ", values.message);
        await addDoc(collection(db, `messages/${id}/${id}`),
            {
                content: values.message,
                fromId: currrentUserId,
                toId: parseInt(id?.split('-')[1]),
                timestamp: Timestamp.now(),
                type: 0,
            })
        form.reset();
    }

    return (
        <div className='ChatView'>

            {/* Header of Chat view */}
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

            {/* Message container */}
            <div className='ChatContent'>
                <div ref={messageRef} className="MessageList">
                    {messages?.map((msg, index) => {
                        return <MessageObj key={index} users={users} msg={msg} />
                    }
                    )}
                </div>

                {/* input form */}
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padddingRight: '50px', width: '70%' }}>
                        <ChatField name="message" label='message' form={form} />
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