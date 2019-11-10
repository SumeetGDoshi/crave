import React, { Component } from 'react';
import './Components.css';
import Icon from '@material-ui/core/Icon'

class ButtonExtended extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='buttonContainer'>
                <button onClick={ this.props.onClick } className="Rounded CustomButton" style={{ color: this.props.color || "#3f51b5", ...this.props.style }}>
                    <span className="CustText" style={{lineHeight: '2.8em'}}> { this.props.name || "Button" } </span>
                    <Icon onClick={this.props.onClick} className="buttonChevron" style={{marginTop: '13px', ...this.props.iconStyle}}>{this.props.iconName}</Icon>
                </button>
                
            </div>
        )
    }

}

export default (ButtonExtended);