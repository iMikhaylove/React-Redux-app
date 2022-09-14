import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return ( 
            <div className={s.item}>
            <img src="https://ih0.redbubble.net/image.209691046.2202/flat,1000x1000,075,f.u1.jpg" />
            { props.message }
            <div>
            <span>like</span> { props.likesCount }
            </div>
          </div>
    )
}

export default Post;