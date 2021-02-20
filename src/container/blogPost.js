import React, {Component} from "react";
import {Headline} from "../components/blog_post/headline";
import {Hook} from "../components/blog_post/hook";
import {TextBody} from "../components/blog_post/textBody";
import {FeaturedImage} from "../components/blog_post/featuredImage";
import {SupportingImage} from "../components/blog_post/supportingImage";
import {BlogHeader} from "../components/blog_post/blogHeader";


export class BlogPost extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="blog-post-grid-container">
                    <div className="blog-post-image">
                        <FeaturedImage className="post-featured-image"  src={"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"} alt="fall trail"/>
                    </div>
                    <div className="blog-post-header">
                        <BlogHeader/>
                    </div>   
                    <div className="blog-post-text">
                        <TextBody/>
                    </div>            
                </div>
            </React.Fragment>
        )
    }
}