import React, { Component } from "react";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import NavbarHome from "./NavBar/navbar";
import Tournaments from "./Tournaments/tournaments";
import {Container} from "react-bootstrap";
import HomePage from "./HomePage/homePage";
import Contact from "./Contact/contact";
import Calendar from "./Calendar/calendar";
import Reservations from "./Reservations/reservations";
import axios from "axios";
import Payment from "./Reservations/payment";
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {},
            tables: [],
            available: false,
        }
        this.getAllTables = this.getAllTables.bind(this);
    };
    componentDidMount() {
        this.getAllTables();
    }

    async getAllTables(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/allTables/');
            this.setState({
                tables: response.data
            })
        }
        catch(err) {
            alert(err);
        }
    }

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
                            <Route path='/reservations' render={props => <Reservations {...props} tables={this.state.tables}/>}/>
                            <Route path='/payment' render={Payment}/>
                        </React.Fragment>
                    </Switch>
                </div>
            </Container>
        );
    }
}

export default App;