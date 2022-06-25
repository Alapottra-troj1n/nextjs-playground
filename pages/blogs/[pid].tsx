import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
    const router = useRouter();

    const {pid} = router.query

    return (
        <div>
            <h2>Pid : {pid}</h2>
        </div>
    );
};

export default Post;