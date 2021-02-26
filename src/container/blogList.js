import React, {Component} from 'react';
import {PostTileGrid} from './postTileGrid';
import "../index.css"


export class BlogList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
                <div>
                    <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
                </div>
            </React.Fragment>
        )
    }
}