import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import PropfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

// import { render } from '@testing-library/react';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/profile/:userId?" render={() => <PropfileContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <LoginPage />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp,
    }),
)(App);
