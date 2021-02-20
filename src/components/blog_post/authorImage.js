import React, {Component} from "react";
import "../../index.css";


export class AuthorImage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <img className="post-author-image" src={"images/author-600.jpg"} alt={"author image"}/>
                </div>
            </React.Fragment>
        )
    }
}