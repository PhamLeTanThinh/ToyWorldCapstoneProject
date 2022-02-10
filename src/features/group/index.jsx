import Box from '@mui/material/Box';
import React from 'react';
import GroupBar from '../../components/GroupBar';
import Header from './../../components/Header/index';
import GroupContent from './components/GroupContent/GroupContent';



Group.propTypes = {

};


function Group(props) {

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

    // const [postList, setPostList] = useState(initPostList);

    // const handleCreatePostSubmit = (values) => {
    //     console.log('Post submit: ', values);
    //     const newPost = {
    //         id: initPostList.lenght + 1,
    //         userName: 'Current User',
    //         avatar: 'avatar.jpg',
    //         postContent: values.postContent,
    //         postTime: 'test'
    //     }
    //     const newPostList = [...initPostList, newPost];
    //     setPostList(newPostList);
    // };





    return (
        <div>
            <Header />
            <Box sx={{ paddingTop: '80px' }}></Box>
            <GroupBar />
            <GroupContent />
        </div>
    );
}

export default Group;