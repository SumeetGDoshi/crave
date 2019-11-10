import React, { Component } from "react";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Icon } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../Components/Components.css';

import './Components.css'


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
});

class FormAccordion extends Component{

    state = {
        expanded: null
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
        
    };

    componentWillMount(){
        console.log(this.props.list, "will mount")
    }

    render(){
        const { classes, 
            title, 
            name, 
            border, 
            iconName,
            background,
            textColor,
            noChildren,
            
        } = this.props;
        return (
            <ExpansionPanel style={
                {
                    borderRadius: '35px',
                    border: `3px solid ${border}`,
                    background: background,
                    margin: '20px 0',
                    width: '95%',
                    color:`${textColor}`,
                    ...this.props.style
                }
            }
            square={false} 
            expanded={this.props.isExpanded === name}
            key={ name }
            className='accordianPannel'
            onChange={ this.props.onChange || this.handleChange(name) }
            >
                <ExpansionPanelSummary disabled={this.props.disabled} expandIcon={this.props.accordionIcon || <ExpandMoreIcon style={{color:'#FFF'}} />}>
                    <Typography className={classes.heading} style={{color:  textColor, clear: "both", flexBasis: "auto" }}> 
                            <span style={{
                                lineHeight: "1.6em",
                                marginLeft: "8px",
                                fontSize: "1.5em",
                                float: "left",
                                fontFamily: 'ProximaNovaAlt-Regular'
                            }}> { title } </span>
                            {iconName && <span><Icon className={classes.icon} style={{
                                float: "left",
                                margin: 0,
                                fontSize: "2.5em"
                            }}>{ iconName }</Icon></span>}
                    </Typography>
                </ExpansionPanelSummary>
                {!noChildren ? 
                    <ExpansionPanelDetails>
                    { this.props.children }
                </ExpansionPanelDetails> : null}
                
                
            </ExpansionPanel>
        )
    }
}

FormAccordion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormAccordion);
