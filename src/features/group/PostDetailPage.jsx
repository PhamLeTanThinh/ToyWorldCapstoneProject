import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import usePostDetails from './hooks/usePostDetails';
import PostDetail from './components/PostDetail';
import Post from './components/Post';
import CommentList from './components/CommentList';
import Header from '../../components/Header';
import GroupBar from '../../components/GroupBar';
import { Box, Container, Card } from '@mui/material';

PostDetailPage.propTypes = {

};

function PostDetailPage(props) {

    // const { params: { postId } } = useRouteMatch();
    const { params: { postId } } = useRouteMatch();
    // console.log(postId)
    const { post, loading } = usePostDetails(postId);
    console.log(post.data);

    return (
        <div>
            <Header />
            <Box sx={{ paddingTop: '80px' }}></Box>
            <GroupBar />
            <Container maxWidth="md">
                <Card>
                    {loading ? <p>loading</p> : <Post post={post.data} />}
                    {loading ? <p>loading</p> : <CommentList comments={post.data.comments} />}
                </Card>


            </Container>
        </div>
    );
}

export default PostDetailPage;