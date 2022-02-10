import React from 'react';
import PropTypes from 'prop-types';
import CommentDetail from './CommentDetail';
import InputField from './../../../components/form-controls/InputFields/index';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import commentApi from './../../../api/commentApi';
CommentList.propTypes = {

};


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        padding: '18px 0'
    },


    inputtext: {
        "& .Mui-focused": {
            color: 'pink',
            borderColor: 'pink'
        },
        '& .MuiOutlinedInput-root': {
            '& .MuiOutlinedInput-notchedOutline-focused': {
                borderColor: 'pink',
            },
            '&:hover fieldset': {
                borderColor: 'pink',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'pink',
            },
        },

    },
    form: {
        // width: '90% !important',
        padding: '0 20px',
    },

}))
function CommentList({ comments, postId }) {

    const classes = useStyles();
    // console.log(postId)
    const form = useForm({
        defaultValues: {
            comment: '',
        },
        // resolver: yupResolver(schema),
    })

    const { isSubmitting } = form.formState;


    const handleSubmit = async (values) => {
        console.log("value: ", values)
        const newComment = {
            postId: postId,
            content: values,
        }
        try{
            const response = await commentApi.addNewComment(newComment)
            
        }catch (error) {
            console.log('Failed create comment: ', error);
        }
        form.reset();
    }

    return (
        <div>
            <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField className="inputField" className={classes.inputtext} name="comment" label="Comment" form={form} />
            </form>
            {comments.map((comment) => (
                <CommentDetail key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

export default CommentList;