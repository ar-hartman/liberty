import React, {Component} from "react";
import "../../index.css";


export class Headline extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <p className="tile-blog-headline">
                {this.props.headline}
            </p>
        )
    }
}