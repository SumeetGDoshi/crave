import React from 'react';
import './Freetrail.css';
import clsx from 'clsx';
import HeaderLogo from "../assets/DesktopWebsite/top_logo.png";
import StripeImage from "../assets/DesktopWebsite/Payments_Graphic.png";
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CustomSnackbar from '../MobileWebsite/Components/CustomSnackbar';
import Services from '../MobileWebsite/Services';


const useStyles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: '8px',
      marginRight: '8px',
    },
    button: {
        margin: '8px',
        color: '#fff',
        background: '#000',
        borderRadius: 20
    },
    dense: {
      marginTop: '6px',
    },
    menu: {
      width: 200,
    },
});

const initial = {
    name: '',
    number: '',
    country: '',
    showSnakbar: false,
    calltime: "",
    code: "",
    comingFrom: "home",
}

class Freetrail extends React.Component{
    
    state = initial;
    onSubmit = this.onSubmit.bind(this)
    message = "This is Success";
    variant = "success";

    async onSubmit(){

        if(!this.state.name || !this.state.number){
            this.variant = 'error';
            this.message = 'Please enter all fields'
            this.setState({showSnakbar: true})
            return;
        }
        console.log(this.state)
        try{
            let result = await Services.sendRequestDemo({...this.state, source: "freetrial form", isMobile: "No"});
            this.variant = 'success'
            this.message = "Your message has been sent"
            this.setState(initial);
            window.fbq("track", "Free Demo Form Submit");
            return;
        }catch(err){
            console.log(err)
            this.variant = 'error';
            this.message = 'There was some error. Please try again!';
            this.setState({showSnakbar: true});
        }
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ showSnakbar: false });
    };

    render(){
        let { classes } = this.props;
        return (
            <div className="full-parent">
                <CustomSnackbar vertical="bottom" horizontal={'left'} variant={ this.variant } message={ this.message } isOpen={ this.state.showSnakbar } handleClose={ this.handleClose.bind(this) }  />
                <div className="free-container">
                    <div className="free-row">
                        <div className="logo-f">
                            <a href="/" ><img src={HeaderLogo} className='f-header-logo'/></a>
                        </div>
                        <div className="description">
                            <h2 className="title"> Where Social Media Happens </h2>
                            <p className="subtitle">
                                We're here to help businesses like yours find their identity online
                            </p>
                            <p className="sub-info">
                                @  is a streamlined combination of photography, content creation, graphic design, influencer marketing, analytics, surveillance and ad management that come together cohesively to form the monthly cycle that works on a subscription model.
                            </p>
                        </div>
                    </div>
                    <div className="free-row">
                        <p className="package-title">
                            So, what does it cost?
                        </p>
                    </div>
                    <div className="free-row">
                        <div className="mar-9">                
                            <div className="package-c">
                                <p className="package-label">
                                
                                </p>
                                <div className="package">
                                    <div className="package-header" style={{ background:'#99cccc' }}>
                                        Cute
                                        <label>$250</label>
                                    </div>
                                    <div className="package-body">
                                        <p>15 Posts on Instagram & Facebook without graphic design</p>
                                        <p>Surveillance</p>
                                        <p>Analytics</p>
                                    </div>
                                </div>
                            </div>

                            <div className="package-c">
                                <p className="package-label">
                                    Our Bestseller
                                </p>
                                <div className="package">
                                    <div className="package-header" style={{ background:'#e78374' }}>
                                        HUSTLE
                                        <label>$500</label>
                                    </div>
                                    <div className="package-body">
                                        <p>15 Posts on Instagram & Facebook without graphic design</p>
                                        <p>2 hr Photography or Videography session Every Month</p>
                                        <p>Surveillance</p>
                                        <p>Analytics</p>
                                        <p>Ad Management or Influencer Marketing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="package-c">
                                <p className="package-label">
                                
                                </p>
                                <div className="package">
                                    <div className="package-header" style={{ background:'#edd354' }}>
                                        Disrupt
                                        <label>$800</label>
                                    </div>
                                    <div className="package-body">
                                        <p>30 Posts on Instagram & Facebook</p>
                                        <p>4 hr  Photography / Videography Session Every Month</p>
                                        <p>Surveillance</p>
                                        <p>Ad Management or Influencer Marketing</p>
                                        <p>Engagement Campaign</p>
                                        <p>Analytics</p>
                                    </div>
                                </div>
                            </div>

                            <div className="package-c">
                                <p className="package-label">
                                
                                </p>
                                <div className="package">
                                    <div className="package-header" style={{ background:'#000000' }}>
                                        dream
                                        <label>custom</label>
                                    </div>
                                    <div className="package-body">
                                        <p>Allow yourself to dream and combine our services to suit your budget and brand requirements.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="free-row">
                        <div className="title-form">
                            <div className="title">
                                Sign Up For A Consultation
                            </div>
                            {/* <div className="subtitle"> Sign Up For A Consultation below </div> */}
                        </div>
                    </div>
                    <div className="free-row">
                        <div className="mar-9 start-left">
                            <div className="left-container">
                                <div className="input-control">
                                    <TextField 
                                        margin="dense"
                                        variant="outlined"
                                        inputProps={{ 'aria-label': 'bare' }}
                                        className={clsx(classes.textField, classes.dense)}
                                        placeholder="Full Name"
                                        value={ this.state.name }
                                        onChange={ (e)=> {
                                            this.setState({ name: e.currentTarget.value })
                                        }}
                                    />
                                </div>
                                <div className="input-control">
                                    <TextField 
                                        margin="dense"
                                        variant="outlined"
                                        inputProps={{ 'aria-label': 'bare' }}
                                        className={clsx(classes.textField, classes.dense)}
                                        placeholder="Contact Number"
                                        value={ this.state.number }
                                        onChange={ (e)=> {
                                            this.setState({ number: e.currentTarget.value })
                                        }}
                                    />
                                </div>
                                <div className="input-control">
                                    <TextField 
                                        margin="dense"
                                        variant="outlined"
                                        inputProps={{ 'aria-label': 'bare' }}
                                        className={clsx(classes.textField, classes.dense)}
                                        placeholder="Preferred Call Time"
                                        value={ this.state.calltime }
                                        onChange={ (e)=> {
                                            this.setState({ calltime: e.currentTarget.value })
                                        }}
                                    />
                                </div>
                                <div className="input-control">
                                    <TextField 
                                        margin="dense"
                                        variant="outlined"
                                        inputProps={{ 'aria-label': 'bare' }}
                                        className={clsx(classes.textField, classes.dense)}
                                        placeholder="Country"
                                        value={ this.state.country }
                                        onChange={ (e)=> {
                                            this.setState({ country: e.currentTarget.value })
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="left-container right-container">
                                <div className="input-control">
                                <TextField
                                    multiline
                                    rows="10"
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth={true}
                                    inputProps={{'cols':40}}
                                    placeholder="Message"
                                    value={ this.state.code }
                                    onChange={ (e)=> {
                                        this.setState({ code: e.currentTarget.value })
                                    }}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-form subtext">
                        Try @ Today For Free. No risk and No Credit Card Required     
                    </div>
                    <div className="sub-form">
                        <Button variant="contained" size="large" className={classes.button} onClick={this.onSubmit}>
                            submit details
                        </Button> 
                    </div>
                </div>
            </div>
        );
    }
}

Freetrail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Freetrail)