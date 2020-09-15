import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        { id: 1, message: 'How are you?', likesCount: 23 },
        { id: 2, message: 'Fine!', likesCount: 0 },
    ],

    // newPostText: 'Samurai-road',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
});

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);

    dispatch(setStatus(data.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;
