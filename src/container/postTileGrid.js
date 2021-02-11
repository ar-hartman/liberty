import React, {Component} from "react";
import {FeaturedImage} from "../components/blog_tile/featuredImage";
import {Headline} from "../components/blog_tile/headline";
import {Hook} from "../components/blog_tile/hook";
import "../index.css";

export class PostTileGrid extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="grid-container">
                    <div className="item1">
                        <FeaturedImage className="tile-featured-image"  src={"/images/road.jpg"} alt="fall trail"/>
                    </div>
                    <div className="item2">
                        <Headline headline="test headline"/>
                    </div>
                    <div className="item3">
                        <Hook hook="test hook that pulls readers in"/>
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}