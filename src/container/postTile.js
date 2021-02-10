import React, {Component} from "react";
import {FeaturedImage} from "../components/blog_tile/featuredImage";
import {Headline} from "../components/blog_tile/headline";
import {Hook} from "../components/blog_tile/hook";

export class PostTile extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-2" >
                        <FeaturedImage src={require("./road-square.jpg")} alt="fall trail"/>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-sm-6" style={{backgroundColor: 'red'}}>
                            <Headline headline="test headline"/>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-sm-6" style={{backgroundColor: 'blue'}}>
                            <Hook hook="test hook that pulls readers in"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}