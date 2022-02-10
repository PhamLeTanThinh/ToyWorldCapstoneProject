import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CreatePost from './../CreatePost/index';
import PostList from './../PostList/index';
import { Grid, Container, Box, Card } from '@mui/material';
import {useParams} from 'react-router-dom';
import postApi from './../../../../api/postApi';
import PostSkeleton from './../../../../components/PostSkeleton/PostSkeleton';

function GroupContent(props) {

    const { id: groupId } = useParams();
    console.log(groupId);

    // const initPostList = [
    //     {
    //         id: 1,
    //         userName: 'Tấn Thịnh',
    //         avatar: 'avatar.jpg',
    //         postContent: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    //         postTime: 'a second ago',
    //         sourceList: [
    //             'images/toys1.jpg', 'images/toys2.jpg', 'images/toys3.jpg', 'images/toys4.jpg'
    //         ],
    //     },
    //     {
    //         id: 2,
    //         userName: 'Shrimp and Chorizo Paella',
    //         avatar: 'avatar.jpg',
    //         postContent: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    //         postTime: '3 hour',
    //         sourceList: [
    //             'images/toys1.jpg', 'images/toys2.jpg', 'images/toys3.jpg'
    //         ],
    //     },
    //     {
    //         id: 3,
    //         userName: 'Thanh Vinh',
    //         avatar: 'avatar.jpg',
    //         postContent: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    //         postTime: 'September 14, 2021',
    //         sourceList: [
    //             'images/toys1.jpg', 'images/toys2.jpg'
    //         ],
    //     },
    //     {
    //         id: 4,
    //         userName: 'Minh Quân',
    //         avatar: 'avatar.jpg',
    //         postContent: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    //         postTime: 'September 14, 2021',
    //         sourceList: [
    //             'images/toys1.jpg'
    //         ],
    //     },
    //     {
    //         id: 5,
    //         userName: 'Tấn Thịnh',
    //         avatar: 'avatar.jpg',
    //         postContent: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    //         postTime: 'a second ago',
    //         sourceList: [
    //             'images/toys1.jpg', 'images/toys2.jpg', 'images/toys3.jpg', 'images/toys4.jpg', 'images/gunpla.jpg', 'images/lego.jpg'
    //         ],
    //     },
    // ]

    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListPost = async () => {
            try {
                const {data} = await postApi.getAll(groupId);
                console.log(data);
                setPostList(data.data)
            } catch (error) {
                console.log('Failed to fetch ListPost', error)
            }
            setLoading(false);
        }
        fetchListPost();
    }, [groupId])

    const handleCreatePostSubmit = (values) => {
        // console.log('Post submit: ', values);
        // const newPost = {
        //     id: initPostList.lenght + 1,
        //     userName: 'Current User',
        //     avatar: 'avatar.jpg',
        //     postContent: values.postContent,
        //     postTime: 'test'
        // }
        // const newPostList = [...initPostList, newPost];
        // setPostList(newPostList);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            {/* Form to create a post */}
                            <CreatePost onSubmit={handleCreatePostSubmit} />

                            {/* get List post */}

                            {loading ? <PostSkeleton/>: <PostList postList={postList} />}
                            
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                Event
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

export default GroupContent;