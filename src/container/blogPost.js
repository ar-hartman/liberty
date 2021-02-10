import React, {Component} from "react";
import {Headline} from "../components/blog_post/headline";
import {Hook} from "../components/blog_post/hook";
import {TextBody} from "../components/blog_post/textBody";
import {FeaturedImage} from "../components/blog_post/featuredImage";
import {SupportingImage} from "../components/blog_post/supportingImage";


export class BlogPost extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <FeaturedImage src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" alt="fall trail"/>
                <Headline headline="test headline"/>
                <Hook hook="test hook that pulls readers in"/>
                <TextBody textBody="this is some sample text for an article"/>
                <SupportingImage src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="dude in a field"/>
                <TextBody textBody="this is additional sample text separated by an image."/>
            </React.Fragment>
        )
    }
}