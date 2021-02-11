import React, {Component} from "react";

export class Headline extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <h1 className="tile-blog-headline" style={{maxHeight: '50%', fontSize: 'Medium'}}>
                {this.props.headline}
            </h1>
        )
    }
}