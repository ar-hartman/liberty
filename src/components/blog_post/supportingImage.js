import React, {Component} from "react";

export class SupportingImage extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <img className="supporting-image" 
                src={this.props.src}
                alt={this.props.alt}
            />
        )
    }
}