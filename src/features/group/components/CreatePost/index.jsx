import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardHeader, Typography, Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import FileThumbnail from "react-uploaded-video-preview";
import InputPostField from './../../../../components/form-controls/InputPostFields/index';
import { useForm } from 'react-hook-form';



CreatePost.propTypes = {
    onSubmit: PropTypes.func,
};

// Style CSS
const useStyle = makeStyles(theme => ({
    root: {
        // color: '#db36a4 !important',
    },
    btn: {
        color: '#db36a4 !important',
    },
    closeBtn: {
        position: 'absolute !important',
        // top: 0,
        bottom: 0,
        right: 0,
        color: 'black',
        backgroundColor: 'rgba(219, 54, 164, 0.3)'
    }
}))


function CreatePost(props) {

    // Style MUI
    const classes = useStyle();

    // Hide inpput of Media
    const Input = styled('input')({
        display: 'none',
    });


    // ======================

    const [inputImage, setInputImage] = React.useState([]);
    const [inputVideo, setInputVideo] = React.useState([]);
    const inputRef = React.useRef();


    // Display selected iamge and video
    const handleFileChange = (event) => {
        let video = [];
        let image = [];
        for (let i = 0; i < event.target.files.length; i++) {
            console.log(event.target.files[i].type)
            if (event.target.files[i].type === 'video/mp4' || event.target.files[i].type === 'video/mov' || event.target.files[i].type === 'video/x-matroska' || event.target.files[i].type === 'video/gif') {
                video.push(URL.createObjectURL(event.target.files[i]))
            } else if (event.target.files[i].type === 'image/png' || event.target.files[i].type === 'image/jpeg' || event.target.files[i].type === 'image/jpg' || event.target.files[i].type === 'image/gif') {
                image.push(URL.createObjectURL(event.target.files[i]))
            }
        }
        setInputVideo(video);
        setInputImage(image);
    };

    // Choose image and video
    const handleChoose = (event) => {
        inputRef.current.click();
    };

    // =============

    // Open dialog
    const [open, setOpen] = React.useState(false);

    // set full width for dialog
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    // Handle open dialogo
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Handle close dialog and reset state
    const handleClose = () => {
        setOpen(false);
        setInputVideo([]);
        setInputImage([]);
    };

    // handle deleted iamge and video
    const handleDeleteSelectedSource = () => {
        setInputVideo([]);
        setInputImage([]);
    }

    const form = useForm({
        defaultValues: {
            postContent: '',
        }
    })

    const handleSubmitPost = (values) => {
        console.log('POST COontent: ', values);
        const {onSubmit} = props;
        if(onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }


    return (
        <div className='CreatePost'>

            {/* CLICK TO OPEN DIALOG CREATE A POST */}
            <Card sx={{ maxWidth: '100%', display: 'flex', paddingTop: 1 }}>

                {/* AVATAR */}
                <CardHeader
                    avatar={
                        <Avatar src='/avatar.jpg'></Avatar>
                    }
                />
                {/* BOX CLICK OPEN DIALOG */}
                <Box
                    onClick={handleClickOpen}
                    sx={{
                        width: '100%',
                        height: 70,
                        backgroundColor: grey[400],
                        borderRadius: '20px',
                        padding: '20px',
                        marginBottom: '10px',
                        marginRight: '10px',
                        '&:hover': {
                            backgroundColor: grey[300],
                            opacity: [0.9, 0.8, 0.7],
                            cursor: 'pointer',
                            transition: 'ease-in-out .5s'
                        },
                    }}
                >
                    <Typography>
                        How are you doing???
                    </Typography>
                </Box>
            </Card>

            {/* DIALOG CREATE TO FILL CREATE A POST */}
            <Dialog open={open} onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth}>

                {/* DIALOG'S TITLE */}
                <DialogTitle sx={{ textAlign: 'center', borderBottom: '1px solid #d3d3d3' }}>Create A Post</DialogTitle>
                <DialogContent sx={{ marginTop: '10px' }}>
                    {/* AVATAR */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ marginRight: '10px' }} src='/avatar.jpg'></Avatar>
                        <h4>User Name</h4>
                    </Box>

                    {/* TEXTFIELD TO FILL STATUS */}
                    <form onSubmit={form.handleSubmit(handleSubmitPost)}>
                        <InputPostField  name="postContent" form={form} />
                        <Button className={classes.btn} type='submit' onClick={handleClose}>Post</Button>
                    </form>
                    {/* INPUT AND BUTTON TO FILL MEDIA */}
                    <label htmlFor="contained-button-file">
                        <Input accept="image/* video/*" id="contained-button-file" multiple type="file" onChange={handleFileChange} />
                        <Button sx={{ backgroundColor: "#db36a4 !important" }} variant="contained" aria-label="upload picture" onClick={handleChoose} component="span" endIcon={<PhotoCamera />}>
                            Photo/Video
                        </Button>
                    </label>

                    {inputImage.length || inputVideo.length ?
                        <Card variant="outlined" sx={{ padding: '10px', marginTop: 2, position: 'relative' }}>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {inputVideo.map((source, index) => (
                                    console.log(source),
                                    <div key={index} className="image-item">
                                        <ImageListItem key={index}>
                                            <video
                                                className="VideoInput_video"
                                                width="100%"
                                                height={100}
                                                controls
                                                src={source}
                                            />
                                        </ImageListItem>
                                    </div>
                                ))}
                                {inputImage.map((image, index) => (
                                    // console.log(source),
                                    console.log(image),
                                    <div key={index} className="image-item">
                                        <ImageListItem key={index}>
                                            <img
                                                src={image}
                                                alt={'image'}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </div>
                                ))}
                            </ImageList>
                            <IconButton className={classes.closeBtn} onClick={handleDeleteSelectedSource}>
                                <CloseIcon />
                            </IconButton>
                        </Card>
                        : <></>
                    }
                </DialogContent>

                <DialogActions>
                    <Button color='inherit' onClick={handleClose}>Cancel</Button>
                    <Button className={classes.btn} type='submit' onClick={handleClose}>Post</Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}

export default CreatePost;