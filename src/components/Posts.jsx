import Post from "./Post";

import { dataPost } from '../data/postData';
import { useState } from "react";

import styles from '../styles/Posts.module.css'

export default function Posts() {

    const [data, setData] = useState(dataPost);

    return (
        <div className={styles.posts}>
            {
                data.map(p => (
                    <div key={p.id}>
                        <Post post= {p}/>
                    </div>
                ))
            }
        </div>
    )
}