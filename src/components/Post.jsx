/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { useState } from "react"

import styles from '../styles/Post.module.css'



export default function Post(props) {


    const [poste, setPost] = useState(props.post)

    return (

        <div className={styles.post}>


            <Link href={`/post/${poste.id}`}>

                <img
                    className={styles.postImg}
                    src={poste.imageURL}
                    alt="minha foto"
                />

            </Link>

            <div className={styles.postInfo}>

                <Link href={`/post/${poste.id}`}>

                    <span className={styles.postTitle}>
                        {poste.title}
                    </span>

                </Link>

                <hr />
                <span className={styles.postDate} >
                    {new Date(poste.date).toDateString()}
                </span>

            </div>

            
        </div>
    )


}