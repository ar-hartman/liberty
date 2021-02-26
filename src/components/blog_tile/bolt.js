import React, {Component} from "react";
import "../../index.css";


export class Bolt extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="tile-bolt-grid">
                <img className="tile-bolt-icon" src={"/images/bolt.svg"}/>
                <div className="tile-bolt-count">10</div>
            </div>
                
            
        )
    }
}