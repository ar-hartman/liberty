import React, {Component} from "react";
import "../../index.css";

export class Hook extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <p className="tileblog-hook">
                {this.props.hook}
            </p>
        )
    }
}