import React, { Component } from "react";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Icon } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Components.css';

{/* <Accordian list={ this.list } background="#a09a30" textColor="#fff" border="#222" />  Use Like This*/}

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      color: '#FFF'
    },
});

class Accordian extends Component{

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
        let list = [];
        const { expanded } = this.state;
        const { classes } = this.props;
        for(let i = 0; i < this.props.list.length; i++){
            let { title, parag, name, iconName, noChildren, hasText } = this.props.list[i];
            list.push(
                <ExpansionPanel style={
                    {
                        borderRadius: '35px',
                        border: `3px solid ${this.props.border}`,
                        background: this.props.background,
                        margin: '20px 0', 
                    }
                }
                square={false} 
                expanded={expanded === name}
                key={ name }
                className="accordianPannel"
                onChange={ this.handleChange(name)  }
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color:'#FFF'}} />}>
                        {iconName && <span><Icon style={{
                            margin: 0,
                            fontSize: "2em",
                            color:this.props.textColor
                        }}>{ iconName }</Icon></span>}
                        <Typography style={{color:  this.props.textColor}}>
                                <span style={{
                                    lineHeight: "1.6em",
                                    marginLeft:'0.5em',
                                    fontSize: "1.45em",
                                    fontFamily: 'ProximaNovaAlt-Regular'
                                }}> { title } </span>
                        </Typography>
                    </ExpansionPanelSummary>
                    {!noChildren ? <ExpansionPanelDetails>
                        {hasText ? <Typography     
                        style={{ color: this.props.textColor, 
                                fontFamily: 'ProximaNovaAlt-Regular',
                                fontSize: '1.2em' }}>
                            { parag }
                        </Typography> : this.props.children }
                    </ExpansionPanelDetails> : null}
                </ExpansionPanel>
            )
        }
        return (
            <div style={{ width: '90%', padding: '0 5%', margin: '0 auto' }}>
                { list }
            </div>
        )
    }
}

Accordian.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accordian);
