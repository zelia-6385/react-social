import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

// import { render } from '@testing-library/react';

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                {/* <Route path="/dialogs" component={Dialogs} />
                    <Route path="/profile" component={Profile} /> */}
                <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
                <Route
                    path="/profile"
                    render={() => (
                        <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
                    )}
                />
            </div>
        </div>
    );
};

export default App;
