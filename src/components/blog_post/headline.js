import React, {Component} from "react";

export class Headline extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="post-blog-headline">
                {this.props.headline}
            </div>
        )
    }
}