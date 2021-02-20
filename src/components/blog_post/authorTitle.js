import React, {Component} from "react";


export class AuthorTitle extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <p className="blog-post-author-title">
                    Written by {this.props.author}
                </p>
            </React.Fragment>
        )
    }
}