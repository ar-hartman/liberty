import React, {Component} from "react";

export class Hook extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <h3 className="tileblog-hook">
                {this.props.hook}
            </h3>
        )
    }
}