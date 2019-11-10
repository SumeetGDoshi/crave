
import React,{ Component } from "react";
import { Slide } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Services from '../Services';
import Icon from '@material-ui/core/Icon';
import { Dialog, DialogContent, DialogTitle, DialogContentText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Components.css';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      position: "absolute",
    },
    button: {
        backgroundColor: "#000",
        width: '90%',
        borderRadius:40,
        margin: '20px 0px',
        height: 50,
        lineHeight: "50px",
        fontSize: '1.2em',
        boxShadow: "none",
        border: "none",
        outline:"none",
        '&:hover': {
            backgroundColor: "#222",
        },
        fontFamily: 'ProximaNovaAlt-Light',
        '&:focus': {
            border: "none",
        },
        color: "#fff",
        position: "absolute",
        bottom: 0
    },
});

const initialForm = {
    name: null,
    number: null,
    email: null,
    calltime: null,
    code: null,
    checked: false,
    country: null,
    comingFrom: null,
    showPopup: false
}

class RequestDemo extends Component{
    constructor(props){
        super(props)
        this.state = initialForm
        this.handleRequestDemoEvent = this.handleRequestDemoEvent.bind(this)
        this.submitCall = this.submitCall.bind(this)
    }
    handleRequestDemoEvent(){
        this.setState({ checked: !this.state.checked, height: window.innerHeight, comingFrom: this.props.comingFrom })
    }

    validateEmail(email){
        console.log(email);
        var regex = /\S+@\S+\.\S+/;;
        if(!regex.test(String(email).toLowerCase())){
            this.props.onrequestSubmit(false);
            return false;
        }
        return true;
    }

    async submitCall(){
        if(!this.state.name || !this.state.number || !this.state.email ){
            this.props.onrequestSubmit(false);
            this.handleRequestDemoEvent()
            return;
        }
        this.validateEmail(this.state.email);
        try{
            let result = await Services.sendRequestDemo({...this.state, source: this.props.source, isMobile: "Yes"});
            window.fbq("track", "Free Demo Form Submit");

            this.props.onrequestSubmit(true)
            this.setState({ showPopup: true })
        }catch(err){
            this.props.onrequestSubmit(false)
        }
        this.setState(initialForm)
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showPopup: false });
    };
    render(){
        const { classes, title, modalButtonText } = this.props;
        const { checked } = this.state;
        return(
            <div className={classes.container}>
                <div className="refContainer">
                    <button className={classes.button} onClick={ this.handleRequestDemoEvent }>{ title }</button>
                </div>
                
                <Slide in={checked} direction="up" mountOnEnter unmountOnExit>
                    <div className="refFromContainer">
                        <button className={classes.button} onClick={ this.handleRequestDemoEvent } style={{ top: 0, margin: '0 5%' }}>
                            <span>{ title }</span>
                            <Icon style={{ position: 'absolute', top: '15px', right: "13px" }}>close</Icon>
                        </button>
                        <form style={{marginTop:'50px'}} action="#">
                            <div className="formgroup">
                                <input type="text" className="inputelement" placeholder="Name*" onChange={ (e)=> this.setState({ name: e.currentTarget.value }) } />
                            </div>
                            <div className="formgroup">
                                <input type="text" className="inputelement" placeholder="Number*" onChange={ (e)=> this.setState({ number: e.currentTarget.value }) } />
                            </div>
                            <div className="formgroup">
                                <input type="text" className="inputelement" placeholder="Email*" onChange={ (e)=> this.setState({ email: e.currentTarget.value }) }/>
                            </div>
                            {/* <div className="formgroup">
                                <input type="text" className="inputelement" placeholder="country (required)" onChange={ (e)=> this.setState({ country: e.currentTarget.value }) }/>
                            </div> */}
                            {/* <div className="formgroup">
                                <input type="text" className="inputelement" placeholder="prefered call time (required)" onChange={ (e)=> this.setState({ calltime: e.currentTarget.value }) }/>
                            </div> */}
                            <div className="formgroup">
                                <textarea className="textareaelement" placeholder="APPLY REFERRAL CODE HERE" onChange={ (e)=> this.setState({ code: e.currentTarget.value }) }></textarea>
                            </div>
                            <div className="formgroup">
                                <button className="refformsubmit" onClick={ this.submitCall } type="button">{ modalButtonText }</button>
                            </div>
                            
                        </form>
                        
                    </div>
                </Slide>
            </div>
        )
    }
}

RequestDemo.propTypes = {
    classes: PropTypes.object.isRequired,
    comingFrom: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    modalButtonText: PropTypes.string.isRequired
};

export default withStyles(styles)(RequestDemo);