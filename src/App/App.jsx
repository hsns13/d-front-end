import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

/** actions */
import { alertActions } from '../_store/_actions';

/** pages */
import { Todo } from '../Pages/Todo';

/** components, like header, footer */

const history = createBrowserHistory();

class App extends Component {
    onAlertClick = (e) => {
        this.props.clearError();
    }

    render() {
        const { alertContainer } = this.props;

        return (
            <Fragment>
                {
                    alertContainer && (
                        <div className={['alert', `${alertContainer.type}`].join(' ')}
                            onClick={this.onAlertClick}>
                            {
                                alertContainer.message
                            }
                        </div>
                    )
                }
                <div className="app-background"></div>
                <div className="app-background-picture"></div>
                <div className="app-container">
                    <Router history={history}>
                        <div>
                            <Switch>
                                <Route path="/" component={Todo} exact />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ alertContainer }) => {
    return {
        alertContainer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(alertActions.clear())
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { connectedApp as App };