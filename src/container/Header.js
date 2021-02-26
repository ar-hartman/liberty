import React, {Component} from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import "../index.css";

export class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <Router>
            <React.Fragment>
                <NavLink className="header-link" to="/">
                    <div className="HeaderTitle">
                        <p>Some People Are Weird</p>
                    </div>
                </NavLink>
                {/*
                <div className="HeaderLogo">
                    <img></img>
                </div>
                <div className="HeaderDivider">

                </div>
                */}
            </React.Fragment>
        </Router>
    }
}