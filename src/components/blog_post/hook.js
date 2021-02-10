import React, {Component} from "react";

export class Hook extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <h3 className="post-blog-hook">
                {this.props.hook}
            </h3>
        )
    }
}