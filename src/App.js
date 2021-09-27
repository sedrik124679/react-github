import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/alert/Alert";
import {AlertState} from "./context/alertContext/AlertState";
import {GitHubState} from "./context/github/GitHubState";

function App() {
    return (
        <GitHubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-3">
                        <Alert alert={{text: 'test alert'}}/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/profile:name' component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GitHubState>
    );
}

export default App;
