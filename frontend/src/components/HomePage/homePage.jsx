import React, { Component } from "react";
import {Container, Row, Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import "./homepage.css";
import {Image} from "react-bootstrap";
import {Col} from "react-bootstrap";
import NavbarHome from "../NavBar/navbar";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage" id="homePage">
                <header className="header" id="header">

                </header>
                <Row>
                    <Col>
                        <h2> Hours </h2>
                        <h3>1PM - 1AM Daily</h3>
                        <h3>$5 Per Person All Day</h3>
                        </Col>
                </Row>
                <Row className="about">
                    <Col>
                        <h4>We are a local pool hall and lounge featuring twelve tables including</h4>
                        <h4>Seven 9' Tables </h4>
                        <h4>Three 7' Tables </h4>
                        <h4>Two 6' Tables</h4>
                        <h4>All with Simonis cloth and well maintained by local great Joe Morasse.</h4>
                        <h4>Popular with local pros and amateurs, we strive to provide a high quality and fun entertainment!</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5>Located</h5>
                        <h6>116 Bridge St.</h6>
                        <h6>Pelham, NH 03076</h6>
                        <h5>Phone</h5>
                        <h6>(603) 508-6491</h6>
                    </Col>
                    <Col>
                        <div className="pic" >

                        </div>
                    </Col>
                    <Col>
                        <h4>--Tap List & Specialty Cocktails--</h4>
                        <h4>Drafts</h4>
                        <ul>Fiddlehead </ul>
                        <ul>Woodchuck Amber </ul>
                        <ul>Great North IPA </ul>
                        <ul>Pabst Blue Ribbon </ul>
                        <ul>Blue Moon </ul>
                        <h4>Bartender Favorites</h4>
                        <ul>Tom's - Bomb Pop</ul>
                        <ul>Bacardi Razz, Blue Curacao and Lemonade</ul>
                        <ul>Sabrina's - Holy Water</ul>
                        <ul>Vodka, Rum, Peach Schnapps, Blue Curacao, Lemonade, Splash of Pineapple and garnished with rock candy</ul>
                        <ul>Mario's - The Roxberry</ul>
                        <ul>Watermelon Vodka, Sour Apple, Stoli Razz, Lemonade and garnished with rock candy</ul>
                        <ul>Krystal's - Beach Water</ul>
                        <ul>Vodka, Malibu Rum, Sprite and a splash of Pineapple, Topped off with Blue Curacao, Swedish Fish and a Gummy Frog</ul>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default withRouter(HomePage);