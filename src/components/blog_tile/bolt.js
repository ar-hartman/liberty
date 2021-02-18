import React, {Component} from "react";
import "../../index.css";


export class Bolt extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="tile-bolt-grid">
                <div className="tile-bolt-top"> </div>
                <div className="tile-bolt-counter-top"> </div>
                <img className="tile-bolt-icon" src={"/images/bolt.svg"}/>
                <p className="tile-bolt-count">10</p>
                <div className="tile-bolt-bottom"> </div>
                <div className="tile-bolt-count-bottom"> </div>
            </div>
                
            
        )
    }
}