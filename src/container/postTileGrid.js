import React, {Component} from "react";
import {FeaturedImage} from "../components/blog_tile/featuredImage";
import {Headline} from "../components/blog_tile/headline";
import {Hook} from "../components/blog_tile/hook";
import "../index.css";
import {Bolt} from "../components/blog_tile/bolt";
import {Share} from "../components/blog_tile/share"
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";

export class PostTileGrid extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <React.Fragment className="tile">
                <NavLink className="tile-link" to="/posts">
                    <div class="grid-container">
                        <div className="item1">
                            <FeaturedImage className="tile-featured-image"  src={"/images/road.jpg"} alt="fall trail"/>
                        </div>
                        <div className="item2"></div>
                        <div className="item3">
                            <Headline headline={this.props.headline}/>
                        </div>
                        <div className="item4">
                            <Hook hook={this.props.hook}/>
                        </div>                     
                        <div className="item5"> </div>
                        <div className="item6">
                            <Bolt/>
                        </div>
                        <div className="item7"> 
                            <Share/>
                        </div>  
                    </div>
                </NavLink>
            </React.Fragment>
        )
    }
}