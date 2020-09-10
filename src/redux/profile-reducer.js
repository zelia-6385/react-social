import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(setStatus(data.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;
