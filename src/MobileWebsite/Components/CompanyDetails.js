import React,{ Component} from "react";
import { TextField } from '@material-ui/core';
//import ButtonExtended from './ButtonExtended';
import './Components.css';
 import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import RequestDemo from './RequestDemo';
import Header from './Header';
import CustomSnackbar from './CustomSnackbar';
//import Services from './Services';
//import Header from './Header'
import './steps.css';





class CompanyDetails extends Component{
    constructor(Props){
        super(Props)
        this.state = {
            expanded: null,
            Registeredname: '',
            Brandname: '',
            Address:'',
            GSTnumber:'',
            Industry:'',
            Nameofauthorizedsignatory:'',
            Designationofauthorizedsignatory:'',
            showSnakbar: false
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.message="This is Success";
        this.variant = "success";
        this.validateFormField = this.validateFormField.bind(this);
        this.updateState = this.updateState.bind(this);
    }
        onSubmit(){
            this.setState({
            Registeredname: '',
            Brandname: '',
            Address: '',
            GSTnumber: '',
            Industry: '',
            Nameofauthorizedsignatory: '',
            Designationofauthorizedsignatory: ''
            });
        }
    updateState(value, e) {
        this.setState({
          [e.target.Registeredname]: value,
          [e.target.Brandname]: value,
          [e.target.Address]: value,
          [e.target.GSTnumber]: value,
          [e.target.Industry]: value,
          [e.target.Nameofauthorizedsignatory]: value,
          [e.target.Designationofauthorizedsignatory]: value
        });
        
    }
        
    validateFormField(e) {
        const propName = e.target.Registeredname;
        const value = e.target.value;
        const errors = { ...this.state.errors };
    
        errors[propName] = '';
        switch (propName) {
          case 'Registeredname':
            if (value === '') {
              errors[propName] = 'Registered name required';
            }
            
            break;

            case 'Brandname':
            if (value === '') {
              errors[propName] = 'Brand name required';
            }
            break;

            case 'Address':
            if (value === '') {
              errors[propName] = 'Address required';
            }
            break;

            case 'GSTnumber':
            if (value === '') {
              errors[propName] = 'GST number required';
            }
            break;

            case 'Industry':
            if (value === '') {
              errors[propName] = 'Industry name required';
            }
            break;

            case 'Nameofauthorizedsignatory':
            if (value === '') {
              errors[propName] = 'Name of Authorized signatory required';
            }
            break;
             
            case 'Designationofauthorizedsignatory':
            if (value === '') {
              errors[propName] = 'Designation of authorized signatory required';
            }
            break;
             
          
          default:
        }
    
        this.setState({
          errors
        });
      }
      
    

    render(){
        const { classes } = this.props;
        const { expanded } = this.state;
        return (
            <div className="step1">
                {/* {<CustomSnackbar vertical="bottom" variant={ this.variant } message={ this.message } isOpen={ this.state.showSnakbar } handleClose={ this.handleClose.bind(this) }  /> } */}
             
                <Header />

             <div className="fillForm">
                    <h1>
                        STEP 1: 
                    </h1>    
                        <p>
                        Fill in your company details
                    </p>
                    
                        <form >
                            <TextField className="inputHolder"
                            required
                            placeholder="Registered name"
                            margin="normal"
                            value={ this.state.Registeredname }
                            inputProps={{ maxLength: 40 }}
                            onChange={ (e)=> this.setState({ Registeredname: e.currentTarget.value }) }
                            />
                            <TextField className="inputHolder"
                           
                            placeholder="Brand name"
                            margin="normal"
                            value={ this.state.Brandname }
                            inputProps={{ maxLength: 40 }}
                            onChange={ (e)=> {
                                this.setState({ Brandname: e.currentTarget.value })
                            }}/>
                            <TextField className="inputHolder"
                           
                            placeholder="Address"
                            margin="normal"
                            
                            value={ this.state.Address }
                            inputProps={{ maxLength: 50 }}
                            onChange={ (e)=> this.setState({ Address: e.currentTarget.value }) }
                            />
                            <TextField className="inputHolder"
                            
                            placeholder="GST number"
                            margin="normal"
                            value={ this.state.GSTnumber }
                            inputProps={{ maxLength: 15 }}
                            onChange={ (e)=> this.setState({ GSTnumber: e.currentTarget.value.toLocaleUpperCase() }) }
                          
                            />
                            
                            <TextField className="inputHolder"
                            
                            placeholder="Industry"
                            margin="normal"
                            value={ this.state.Industry }
                            inputProps={{ maxLength: 40 }}
                            onChange={ (e)=> this.setState({ Industry: e.currentTarget.value }) }
                            />
                            <TextField className="inputHolder"
                            
                            placeholder="Name of authorized signatory"
                            margin="normal"
                            value={ this.state.Nameofauthorizedsignatory }
                            inputProps={{ maxLength: 40 }}
                            onChange={ (e)=> this.setState({ Nameofauthorizedsignatory: e.currentTarget.value }) }
                            />
                            <TextField className="inputHolder"
                           
                            placeholder="Designation of authorized signatory"
                            margin="normal"
                            value={ this.state.Designationofauthorizedsignatory }
                            inputProps={{ maxLength: 40 }}
                            onChange={ (e)=> this.setState({ Designationofauthorizedsignatory: e.currentTarget.value }) }
                            />
                        </form>
                        <button className="stepsformsubmit" onClick={ this.onSubmit }>Submit</button>
                    </div>
                                        

         </div>
        );
   }
}
    

export default CompanyDetails;
