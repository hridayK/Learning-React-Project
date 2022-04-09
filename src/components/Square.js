import React from "react";
import './Square.css';

class Square extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }

    render(){
        return(
            <button className="square" id={this.props.identity} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;