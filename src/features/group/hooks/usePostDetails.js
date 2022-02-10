
import { useState, useEffect } from 'react';
import postApi from './../../../api/postApi';

export default function usePostDetails(postId) {


    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try{
                const result = await postApi.get(postId);
                console.log("post detail", result);
                setPost(result);
            }catch (error) {
                console.log('Failed to fetch toy', error)
            }

            setLoading(false)
        })()
    }, [postId])

    return { post, loading };
}