import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    validate={[required]}
                    component={Input}
                    type={'password'}
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> запомнить
                пользователя
            </div>
            {props.error && <div className={styles.form_summary_error}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = ({ email, password, rememberMe }) => {
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    login,
})(Login);
