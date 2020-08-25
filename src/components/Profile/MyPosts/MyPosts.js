import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    let postsElements = props.posts.map((elem) => (
        <Post message={elem.message} likesCount={elem.likesCount} key={elem.id} />
    ));

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={styles.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
