import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react";

import { dataPost } from '../../../data/postData';

import Singlepage from "../../../components/Singlepage";

export default function Singlepost() {
    const router = useRouter();

    const [postdata, setPostdata] = useState({})


    const { id } = router.query;

    useEffect(() => {
        const post = dataPost.filter(p => p.id === id)
       return post.length ? setPostdata(post[0]): null
        
        
    }, [id])

    return (
        <div>
            <Singlepage post={postdata} />
        </div>
    )
}