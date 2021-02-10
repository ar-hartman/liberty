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
                <div className="row" style={{margin: "auto", position: "relative", height: "100px", width: "50%", borderStyle: "solid"}}>
                    <div className="col-sm-2" >
                        <FeaturedImage src={"/images/road.jpg"} alt="fall trail" style={{display: "block", position: "absolute", maxHeight: "100%"}}/>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-sm-6" style={{backgroundColor: 'red', height: '60%', wdith: '100%'}}>
                            <Headline headline="test headline"/>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-sm-6" style={{backgroundColor: 'blue', height: '40%', width: '100%'}}>
                            <Hook hook="test hook that pulls readers in"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}