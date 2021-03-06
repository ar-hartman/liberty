import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { BlogList } from './blogList';
import { BlogPost } from './blogPost';

export class PageBody extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Router basename="/" forceRefresh={true}>
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={BlogList}/>    
                    <Route path="/posts" component={BlogPost}/>
                </Switch>
            </div>
        </Router>
    }
}
