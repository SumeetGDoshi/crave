import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AtBubblesLogo from '../../assets/DesktopWebsite/AT_Bubbles_Logo.png';
import PaymentsGraphics from '../../assets/DesktopWebsite/Payments_Graphic.png';
import RazorpayLogo from '../../assets/DesktopWebsite/Razorpay_logo.png';
import StripeLogo from '../../assets/DesktopWebsite/Stripe_Logo.png';
import color from '@material-ui/core/colors/teal';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection:'column',
      fontFamily: 'proxima_nova_altbold'
    },
    textField: {
        fontSize: 12,
        fontWeight: 'bold',
        margin: 0,
        marginBottom: 20,
        
    },
    label:{      
        fontSize: 12,
        fontWeight: 'bold',
        margin: 5,
        padding: 0,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    card: {
        maxWidth: '450px'
    },
    atimage:{
        width:'91px !important',
    },
    paymentProviderLogo:{
        width:'90% !important',
    },
    paymentsubmit:{
        width:'250px',
        height:'37px',
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 0.43,
        borderRadius:'250px',
        backgroundColor: '#da7b6e',
        color:'#FFF',
        margin:'0 auto',
        border:'none'

    },
    mainDiv:{
        margin:'o auto',
        padding:'25px'
    },
    split:{
        display:'flex',
        justfyContent:'space-between',
        margin: 0,
        marginBottom: 20,
        padding: 0,
    },
    bottomImage:{
        width:'50%',
        margin: 'auto',
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    formControl: {
        marginRight: theme.spacing.unit,
        minWidth: 140,
      },
      splitFields:{
        fontSize: 12,
        fontWeight: 'bold',
        width: '50%'
      },
    
  });

  
  

class MobilePayment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cardNumber: '',
            month: '',
            year: '',
            cvc:'',
            postalZipCode:''
        }
        
    }

    async onPaysubmit(){
       this.setState({
           cardNumber: '',
           month: '',
           year: '',
           cvc: '',
           postalZipCode: '',
           labelWidth:'0'

       })
    }
    
    handleChange = name => event => {
        this.setState({
          cardNumber: event.target.cardNumber,
          month: event.target.month,
          year: event.target.year,
          cvc: event.target.cvc,
          postalZipCode: event.target.postalZipCode,

        });
      };
    

    render(){
        const { classes } = this.props;
        return (
           
            <div className={classes.mainDiv}>
                <div style={{textAlign: 'center'}}>
                    <img className={classes.atimage} src={AtBubblesLogo}></img>
                </div>
            <p style={{fontSize: 14, textAlign: 'center'}}>
                We are excited for you to start your services with @
                Please fill in your payment details below so we can
                start your subscription as soon as possible.
            </p>
             <Card>
                <CardContent>
                        <form className={classes.container}  noValidate autoComplete="on">
                           <span className={classes.label}>CARD NUMBER</span> 
                            <TextField
                                id="outlined-name"
                                placeholder = "5366 1000 0738 8538"
                                className={classes.textField}
                                value={this.state.cardNumber}
                                onChange={this.handleChange('cardNumber')}
                                margin="normal"
                                variant="outlined"
                            />
                           <span className={classes.label}>EXPIRY DATE</span> 
                            <div className={classes.split}>
                            <FormControl variant="outlined" className={classes.formControl}>
                            {/* <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-age-native-simple"
                            >
                                Month
                            </InputLabel> */}
                            
                            <Select
                                native
                                value={this.state.month}
                                onChange={this.handleChange('month')}
                                input={
                                <OutlinedInput
                                    name="month"
                                    labelWidth={this.state.labelWidth}
                                    id="outlined-age-native-simple"
                                />
                                }
                            >
                                <option>Month</option>
                                <option value={10}>January</option>
                                <option value={20}>February</option>
                                <option value={30}>March</option>
                                <option value={30}>April</option>
                                <option value={30}>May</option>
                                <option value={30}>June</option>
                                <option value={30}>July</option>
                                <option value={30}>August</option>
                                <option value={30}>September</option>
                                <option value={30}>October</option>
                                <option value={30}>November</option>
                                <option value={30}>December</option>
                            </Select>
                            </FormControl>
                            
                            <FormControl variant="outlined" className={classes.formControl}>
                            {/* <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-age-native-simple"
                            >
                                Year
                            </InputLabel> */}
                            <Select
                                
                                native
                                value={this.state.year}
                                onChange={this.handleChange('year')}
                                input={
                                <OutlinedInput
                                    name="year"
                                   labelWidth={this.state.labelWidth}
                                    id="outlined-age-native-simple"
                                />
                                }
                            >
                                
                                <option>Year</option>
                                <option value={10}>2019</option>
                                <option value={20}>2020</option>
                                <option value={30}>2021</option>
                                <option value={30}>2022</option>
                                <option value={30}>2023</option>
                                <option value={30}>2024</option>
                                <option value={30}>2025</option>
                                <option value={30}>2026</option>
                                <option value={30}>2027</option>
                                <option value={30}>2028</option>
                                <option value={30}>2029</option>
                                <option value={30}>2030</option>
                            </Select>
                            </FormControl>
                            </div>
                            
                            <div style={{ display: 'flex' }}>
                            
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span className={classes.label}>CVC</span> 
                            <TextField
                                id="outlined-name"
                                
                                className={classes.formControl}
                                placeholder = "3 Digit Code"
                                value={this.state.cvc}
                                onChange={this.handleChange('cvc')}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                            <div  style={{display: 'flex', flexDirection: 'column'}}>
                            <span className={classes.label}>POSTAL ZIP CODE</span> 
                            <TextField
                                id="outlined-name"
                                
                                className={classes.formControl}
                                placeholder = "400050"
                                value={this.state.postalZipCode}
                                onChange={this.handleChange('postalZipCode')}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                               
                            </div>
                            
                            
                            <p style={{fontSize: 12, textAlign: 'center'}}>
                                You hereby authorise @ to change you automatically
                                every month until you cancel your subscription.Your
                                terms are available here.
                            </p>
                            <button className = {classes.paymentsubmit} onClick = {this.onPaysubmit}>START SUBSCRIPTION</button>
                                <div className={classes.bottomImage}>
                                <div>
                                    <img className={classes.paymentProviderLogo} src={RazorpayLogo}></img>
                                </div>
                                <div>
                                    <img className={classes.paymentProviderLogo} src={StripeLogo}></img>
                                </div>
                                </div>
                            
                        </form>
                                 
                                 
                </CardContent>
            </Card>
            </div>
        )
    }
}
export default withStyles(styles)(MobilePayment);
