import React, {Component} from "react";

export class Hook extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <h3 className="tileblog-hook" style={{fontSize: "small", maxHeight: '50%'}}>
                {this.props.hook}
            </h3>
        )
    }
}