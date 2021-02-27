import React, {Component} from "react";
import {Headline} from "./headline";
import {AuthorTitle} from "./authorTitle";
import {AuthorImage} from "./authorImage";
import {PostDate} from "./postDate";

export class BlogHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="blog-header-grid-container">
                    <div className="blog-header-date">
                        <PostDate day="19" month="FEB" year="2021"/>
                    </div>
                    <div className="blog-header-headline">
                        <Headline headline="Blog Post with Right Sidebar"/>
                    </div>
                    <div className="blog-header-author-title">
                        <AuthorTitle author="Adam Scott"/>
                    </div>
                    <div className="blog-header-author-image">
                        <AuthorImage/>
                    </div>                   
                </div>
            </React.Fragment>
        )
    }
}