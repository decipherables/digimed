import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header';
import Patient from './Patient';
import SearchBar from './SearchBar';
import Menu from './Menu';
import Login from './Registeration/Login';
import Register from './Registeration/Register';

function AppContainer() {
    const [show, setShow] = useState(false);


    const show_clicked = () => {
        setShow(!show);
    }

    const [logged, setLogged] = useState(false);
    function checkLogin() {
        if (localStorage.getItem('logged') == 'true') {
            setLogged(true)
        }
        else {
            setLogged(false)
        }
    }
    useEffect(() => {
        // checkLogin();
    }, [])



    {
        if (logged) {
            return (

                <div className="App">
                    <section className={'BodyContainer'}>
                        {/* SIDE BAR SECTION */}
                        <Router>
                            <div className={`sidebar ${(show) ? ('showSidebar') : ('hideSidebar')}`}>
                                <aside className={'logo'}>
                                    <h2>{'DigimedD'}</h2>
                                </aside>
                                <Menu is_login={checkLogin} />
                            </div>

                            {/* MAIN SECTION  */}
                            <div className={'main'}>
                                <Header menuClicked={show_clicked} />

                                <div className={'mainInner'}>
                                    <Switch>
                                        <Route path={'/'} exact component={Dashboard} />
                                        <Route path={'/Dashboard'} component={Dashboard} />
                                        <Route path={'/Patient'} component={Patient} />
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    </section>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <section>
                    <Route exact path="/">
                        <Register />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>
                    </section>
                </div>
            )
        }



    }
}

export default AppContainer
