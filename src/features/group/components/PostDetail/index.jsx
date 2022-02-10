import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DialogContent } from '@mui/material';
import { Box, Dialog } from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router';
import postApi from './../../../../api/postApi';


PostDetail.propTypes = {
    post: PropTypes.object,
};
PostDetail.defaultProps = {

}

const useStyle = makeStyles(theme => ({
    root: {
    },
    onClickOpenImgDiv: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'

    },
    onClickOpenImg: {
        filter: 'brightness(40%)',

    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '2rem',
    },
    boxContainImg: {
        display: 'flex',
        justifyContent: 'center',
    },
    media: {
        objectFit: 'contain',
        minWidth: 'auto',
        minHeight: 'auto',
    },
    heartIcon: {
        color: '#ED213A'
    },
    unHeartIcon: {
        // color: '#ED213A'
    }
}))

function PostDetail(props) {
    const classes = useStyle();
    const { post } = props;
    console.log("post", post)
    const srcList = post.images;
    const history = useHistory();
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [open, setOpen] = React.useState(false);

    const [isLiked, setIsLiked] = React.useState(post.isLikedPost);
    const [numOfLiked, setNumOfLiked] =  React.useState(post.numOfReact);

    const handleShowImageDialog = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        history.push(`/post/${post.id}`);
    }

    const handleOpenProfile = () => {
        // history.push(`/account/${account.id}`)
    }

    const handleEmotionClick = async () => {
        try {
            const response = await postApi.reactPost(post.id)            
            setIsLiked(response.data.isLiked);
            setNumOfLiked(response.data.numOfReact);
        } catch (error) {
            console.log('Failed to reactPost', error)
        }
    }

    return (
        <Card sx={{ maxWidth: '100%', marginTop: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} src={post.ownerAvatar}>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.ownerName}
                onClick={handleOpenProfile}
                subheader={new Date(post.publicDate).toISOString().slice(0, 19).replace('T', ' ')}
            />

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                {srcList.length === 1 ?
                    srcList.map((source, index) => (
                        <Box onClick={handleShowImageDialog} key={index} gridColumn="span 12" sx={{
                            '&:hover': {
                                opacity: [0.9, 0.8, 0.7],
                                cursor: 'pointer',
                                transition: 'all 0.5s'
                            },
                        }}>
                            <CardMedia height="200" component="img" src={source.url}></CardMedia>
                        </Box>
                    ))
                    : srcList?.length === 2 || srcList?.length === 4 ?
                        srcList?.map((source, index) => (
                            <Box onClick={handleShowImageDialog} key={index} gridColumn="span 6" sx={{
                                '&:hover': {
                                    opacity: [0.9, 0.8, 0.7],
                                    cursor: 'pointer',
                                    transition: 'all 0.5s'
                                },
                            }}>
                                <CardMedia height="200" component="img" src={source.url}></CardMedia>
                            </Box>
                        ))
                        : srcList?.length === 3 ?
                            <>
                                <Box onClick={handleShowImageDialog} gridColumn="span 12" sx={{
                                    '&:hover': {
                                        opacity: [0.9, 0.8, 0.7],
                                        cursor: 'pointer',
                                        transition: 'all 0.5s'
                                    },
                                }}>
                                    <CardMedia height="200" component="img" src={srcList.url[0]}></CardMedia>
                                </Box>
                                <Box onClick={handleShowImageDialog} gridColumn="span 6" sx={{
                                    '&:hover': {
                                        opacity: [0.9, 0.8, 0.7],
                                        cursor: 'pointer',
                                        transition: 'all 0.5s'
                                    },
                                }}>
                                    <CardMedia height="200" component="img" src={srcList.url[1]}></CardMedia>
                                </Box>
                                <Box onClick={handleShowImageDialog} gridColumn="span 6" sx={{
                                    '&:hover': {
                                        opacity: [0.9, 0.8, 0.7],
                                        cursor: 'pointer',
                                        transition: 'all 0.5s'
                                    },
                                }}>
                                    <CardMedia height="200" component="img" src={srcList.url[2]}></CardMedia>
                                </Box>
                            </>

                            : srcList?.length > 4 ?
                                <>
                                    <Box onClick={handleShowImageDialog} gridColumn="span 6" sx={{
                                        '&:hover': {
                                            opacity: [0.9, 0.8, 0.7],
                                            cursor: 'pointer',
                                            transition: 'all 0.5s'
                                        },
                                    }}>
                                        <CardMedia height="200" component="img" src={srcList.url[0]}></CardMedia>
                                    </Box>
                                    <Box onClick={handleShowImageDialog} gridColumn="span 6" sx={{
                                        '&:hover': {
                                            opacity: [0.9, 0.8, 0.7],
                                            cursor: 'pointer',
                                            transition: 'all 0.5s'
                                        },
                                    }}>
                                        <CardMedia height="200" component="img" src={srcList.url[1]}></CardMedia>
                                    </Box>
                                    <Box onClick={handleShowImageDialog} gridColumn="span 6" sx={{
                                        '&:hover': {
                                            opacity: [0.9, 0.8, 0.7],
                                            cursor: 'pointer',
                                            transition: 'all 0.5s'
                                        },
                                    }}>
                                        <CardMedia height="200" component="img" src={srcList.url[2]}></CardMedia>
                                    </Box>
                                    <Box onClick={handleShowImageDialog} className={classes.onClickOpenImgDiv} gridColumn="span 6" sx={{
                                        '&:hover': {
                                            opacity: [0.9, 0.8, 0.7],
                                            cursor: 'pointer',
                                            transition: 'all 0.5s'
                                        },
                                    }}>
                                        <CardMedia className={classes.onClickOpenImg} height="200" component="img" src={srcList.url[3]}></CardMedia>
                                        <Typography className={classes.text} >{srcList.length - 4} +</Typography>
                                    </Box>
                                </>
                                : <></>}
            </Box>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >

                <DialogContent>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {srcList?.map((src, index) => (
                          
                            <SwiperSlide className={classes.boxContainImg} key={index}>
                                <CardMedia className={classes.media} height="700" component="img" src={src.url}></CardMedia>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </DialogContent>
            </Dialog>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.content}
                </Typography>
            </CardContent>
            
            <CardActions disableSpacing>

                {/* Like icon - like number */}
                <IconButton onClick={handleEmotionClick} aria-label="add to favorites">
                    {isLiked===true? <FavoriteIcon  className={classes.heartIcon}/> : <FavoriteIcon  className={classes.unHeartIcon}/>}
                </IconButton>
                <Typography>{numOfLiked}</Typography>

                {/* comment icon - comment number */}
                <IconButton onClick={handleClick} aria-label="share">
                    <CommentIcon />
                </IconButton>
                <Typography>{post.numOfComment}</Typography>
            </CardActions>
        </Card>
    );
}

export default PostDetail;