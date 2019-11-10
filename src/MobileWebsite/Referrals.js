import React,{ Component} from "react";
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ButtonExtended from './Components/ButtonExtended';
import Popup from './Components/Popup';
import RequestDemo from './Components/RequestDemo';
import Header from './Components/Header';
import CustomSnackbar from './Components/CustomSnackbar';
import Services from './Services';

import './Components/Components.css';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'ProximaNovaAlt-Light'
    },
    input: {
      width: '100%',
      fontFamily: 'ProximaNovaAlt-Light',
      borderBottomColor: "#E5DD45 !important",
      '&:focus': {
        borderColor: "#E5DD45",
      },
    },
    textField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    margin: {
        margin: theme.spacing.unit,
    },
    button: {
        backgroundColor: "#000",
        width: '90%',
        borderRadius:40,
        margin: '20px 0px',
        height: 50,
        lineHeight: "50px",
        fontSize: '1.5em',
        fontWeight: 'bold',
        boxShadow: "none",
        border: "none",
        outline:"none",
        '&:hover': {
            backgroundColor: "#222",
        },
        '&:focus': {
            border: "none",
        },
        color: "#fff",
        position: "absolute",
        bottom: 0
    },
});
  

class Referrals extends Component{
    constructor(props){
        super(props)
        this.state = {
            expanded: null,
            name: '',
            number: '',
            email:'',
            country: '',
            showSnakbar: false,
            showPopup: false,
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.message="This is Success";
        this.variant = "success";
        this.code = null
    }

    async onSubmit(){
        
        if(!this.validateEmail(this.state.email)){
            this.variant = 'error';
            this.message = 'Incorrect email'
            this.setState({showSnakbar: true})
            return;
        }
        if(!this.state.name || !this.state.number || !this.state.country){
            this.variant = 'error';
            this.message = 'Please enter all fields'
            this.setState({showSnakbar: true})
            return;
        }
        try{
            let results = await Services.getReferralCode({
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                country: this.state.country,
                source: "generate referral code mobile",
                isMobile: "Yes"
            });
            this.setState({
                name: '',
                number: '',
                email:'',
                showPopup: true,
                country: ''
            });
            this.code = results.data.code
            this.message = results.message;
            this.variant = 'success'
        }catch(e){
            this.message = "Server Error";
            this.variant = "error"
        }
        this.setState({ showSnakbar: true })
        
    }
    onrequestSubmit(status){
        
        if(!status){
            this.variant = "error"
            this.message = "Server Error Occured! Try Again"
            this.setState({ showSnackbar: true });
            return;
        }
        this.variant = "success"
        this.message = "Your Request is in Process"
        this.setState({ showSnakbar: true });
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnakbar: false });
    };

    onClosePopup = () => {
        this.setState({ showPopup: false })
    }

    validateEmail(email){
        console.log(email);
        var regex = /\S+@\S+\.\S+/;;
        if(!regex.test(String(email).toLowerCase())){
            this.variant='error';
            this.message='Incorrect Email';
            this.setState({ showSnakbar: true });
            return false;
        } 
        return true;
    }

    render(){
        const { classes } = this.props;
        return (

            <div className={classes.container}>
                <CustomSnackbar vertical="bottom" variant={ this.variant } message={ this.message } isOpen={ this.state.showSnakbar } handleClose={ this.handleClose.bind(this) }  />
                
                <Popup open={this.state.showPopup}
                  popupScreen={false}
                  onClose= { this.onClosePopup }>
                    
                        {this.code}
                    
                </Popup>

                <Header />
                <div className='spacer_referral'></div>
                <div className="refHeader">
                    <ButtonExtended color="#E5DD45" name="REFERRALS"/>
                </div>
                
                <div className="refHolder">
                    
                    <p>
                        Drop in <strong>your contact details</strong> for us to
                        generate a unique code for you.
                    </p>
                    <p>
                        For each person who signs up using this one-month free discount code,you receive $150.
                    </p>
                    <form className='referralFormContainer'>
                        <TextField
                        required
                        label='name'
                        className={classes.input}
                        margin="normal"
                        value={ this.state.name }
                        inputProps={{ maxLength: 40 }}
                        onChange={ (e)=> this.setState({ name: e.currentTarget.value }) }
                        />
                        <TextField
                        required
                        label='number'
                        className={classes.input}
                        margin="normal"
                        value={ this.state.number }
                        inputProps={{ maxLength: 10 }}
                        onChange={ (e)=> {
                            this.setState({ number: e.currentTarget.value })
                        }}/>

                        <TextField
                        required
                        label='country'
                        className={classes.input}
                        margin="normal"
                        type="text"
                        value={ this.state.country }
                        inputProps={{ maxLength: 40 }}
                        onChange={ (e)=> this.setState({ country: e.currentTarget.value }) }
                        />
                        <TextField
                        required
                        label='email'
                        className={classes.input}
                        margin="normal"
                        type="email"
                        value={ this.state.email }
                        inputProps={{ maxLength: 40 }}
                        onChange={ (e)=> this.setState({ email: e.currentTarget.value }) }
                        />
                    </form>
                        <button className="refformfubmit" onClick={ this.onSubmit }>Generate Code</button>
                </div>
                <div style={{height: '80px'}}></div>
                <RequestDemo  title='USE REFERRAL CODE' modalButtonText='SUBSCRIBE' comingFrom='referrals' onrequestSubmit = { this.onrequestSubmit.bind(this) } source="USE REFERRAL CODE" />       
            </div>

        )
    }

}

Referrals.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Referrals);

// export default Referrals;