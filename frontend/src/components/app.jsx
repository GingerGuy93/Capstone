import React, { Component } from "react";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import NavbarHome from "./NavBar/navbar";
import Tournaments from "./Tournaments/tournaments";
import {Container} from "react-bootstrap";
import HomePage from "./HomePage/homePage";
import Contact from "./Contact/contact";
import Calendar from "./Calendar/calendar";
import Reservations from "./Reservations/reservations";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTable: []
        }
    };
    
    render () {
        return (
            <Container>
                <div className="app">
                    <Switch>
                        <React.Fragment>
                            <div className="navbar">
                                <NavbarHome />
                            </div>
                            <Route path='/home' render={HomePage}/>
                            <Route path='/tournaments' render={Tournaments}/>
                            <Route path='/contact' render={Contact}/>
                            <Route path='/calendar' render={Calendar}/>
                            <Route path='/reservations' render={Reservations}/>
                        </React.Fragment>
                    </Switch>
                </div>
            </Container>
        );
    }
}

export default App;