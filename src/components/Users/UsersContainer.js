import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
} from '../../redux/users-reducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        console.log(window.store.getState());
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// props.setUsers([
//     {
//         id: 1,
//         photoUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
//         followed: false,
//         fullName: 'Dmitry',
//         status: 'I am a boss',
//         location: { city: 'Minsk', country: 'Belarus' },
//     },
//     {
//         id: 2,
//         photoUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
//         followed: true,
//         fullName: 'Yury',
//         status: 'I am a boss too',
//         location: { city: 'Moscow', country: 'Russia' },
//     },
//     {
//         id: 3,
//         photoUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
//         followed: false,
//         fullName: 'Sasha',
//         status: 'I am a boss too',
//         location: { city: 'Kiev', country: 'Ukrain' },
//     },
// ]);
