import React, {Component} from "react";

export class FeaturedImage extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <img className="featured-image" 
                src={this.props.src}
                alt={this.props.alt}
            />
        )
    }
}