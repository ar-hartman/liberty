import React, {Component} from "react";
import "../../index.css";


export class Share extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="tile-share">
                <img className="tile-share-icon" src={"/images/share-square-solid.svg"}/>
            </div>
                
            
        )
    }
}