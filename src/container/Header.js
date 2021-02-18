import React, {Component} from "react";
import "../index.css";

export class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="HeaderTitle">
                    <p>Some People Are Weird</p>
                </div>
                <div className="HeaderLogo">
                    <img></img>
                </div>
                <div className="HeaderDivider">

                </div>
            </React.Fragment>
        )
    }
}