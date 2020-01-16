import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import store from './reduxStore';
import SignUp from './components/Signup';
import Login from './components/Login';

const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
