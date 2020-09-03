import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import PropfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

// import { render } from '@testing-library/react';

const App = (props) => {
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
};

export default App;
