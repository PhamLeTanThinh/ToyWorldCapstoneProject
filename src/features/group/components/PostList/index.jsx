import PropTypes from 'prop-types';
import React from 'react';
import PostDetail from './../PostDetail/index';
import usePostDetails from './../../hooks/usePostDetails';
PostList.propTypes = {
    postList: PropTypes.array,
};
PostList.defaultProps = {
    postList: [],
}



const sourceList = [
    {
        url: 'images/toys1.jpg',
    },
    {
        url: 'images/toys2.jpg',
    },
    {
        url: 'images/toys3.jpg',
    },
    {
        url: 'images/toys4.jpg',
    },
    // {
    //     url: 'images/toys4.jpg',
    // },
    // {
    //     url: 'images/toys4.jpg',
    // },
    // {
    //     url: 'images/toys3.jpg',
    // },
    // {
    //     url: 'images/toys4.jpg',
    // },
]

function PostList(props) {
    const { postList } = props;

    return (
        <>
            {postList.map((post) => (
                <PostDetail key={post.id} post={post} />
            ))}
        </>


    );
}

export default PostList;