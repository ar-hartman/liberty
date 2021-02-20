import React, {Component} from "react"


export class PostDate extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="blog-header-date-grid">
                    <div className="blog-header-date-day">
                        {this.props.day}
                    </div>
                    <div className="blog-header-date-month-year">
                        {this.props.month} {this.props.year}
                    </div>
                </div>
            </React.Fragment>
       )
    }
}