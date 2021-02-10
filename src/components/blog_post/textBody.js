import React, {Component} from "react";

export class TextBody extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <p className="post-text-body">
                {this.props.textBody}
            </p>
        )
    }
}