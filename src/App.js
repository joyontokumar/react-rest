import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import AddScreen from './screens/AddScreen';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <NavBar />
                    <div>
                        <Switch>
                            <Route path="/add" component={AddScreen} />
                            <Route path="/edit/:id" component={EditScreen} />
                            <Route path="/" component={HomeScreen} />

                        </Switch>
                    </div>
                </Router>
            </div >
        )
    }

}
export default App;