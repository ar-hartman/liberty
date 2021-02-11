import React, {Component} from "react";
import "../../index.css";


export class FeaturedImage extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <img className="tile-featured-image" 
                src={this.props.src}
                alt={this.props.alt}

            />
        )
    }
}