import React from 'react'
import ButtonExtended from '../Components/ButtonExtended';
import FormAccordion from '../Components/FormAccordion';
import CustomSnackbar from '../Components/CustomSnackbar'
import CallIcon from '@material-ui/icons/Call';
import Services from '../Services';
import '../Components/Components.css'


class ContactUs extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      number: '',
      calltime: '',
      country: '',
      message: '',
      isExpanded: null,
     
    }
    this.submitCall = this.submitCall.bind(this)
  }

  async submitCall(){
    if(!this.state.name || !this.state.number || !this.state.country || !this.state.calltime || !this.state.message) {
      this.props.onrequestSubmit(false);
      return;
    }
    try{
      let results = await Services.sendMessage(this.state);  
      this.setState({
          name: '',
          number: '',
          country: '',
          calltime: '',
      });
      this.props.onrequestSubmit(true);
    }catch(e){
      this.props.onrequestSubmit(false); 
    }
  }

  handleChange = panel => (event, expanded) => {  
    this.setState({
      isExpanded: expanded ? panel : false
    });
  };
  
  onClick(){
    window.open('tel:8097900119');
  }

  render(){
    return(
      <div style={this.props.style}>     
      
                   
        <ButtonExtended name='HOW CAN YOU REACH US?' color='#E6CE57'/>
        
        <ButtonExtended name='Call us ' onClick={ this.onClick.bind(this) } iconName='call' color='#FFF' iconStyle={{marginTop: '21px'}}
        style={{height: '75px', fontSize: '1.5em', backgroundColor: '#E6CE57', margin: '0'}}/>
        <div className='formAccordionContainer'>
        
        <FormAccordion
        title='Have us reach you'
        border='#E6CE57'
        textColor='#FFF'
        name='panel5'
        style={{margin: '0'}}
        onChange={ this.handleChange.apply(this, ['panel5']) }
        isExpanded={this.state.isExpanded}
        background='#E6CE57'>
          <form style={{width: '100%'}}>
            <div className='formgroup'>
              <input required type="text" className="inputelement" placeholder="name * " onChange={ (e)=> this.setState({ name: e.currentTarget.value }) } />
            </div>            
              <div className='formgroup'>
                <input required type="text" className="inputelement" placeholder="number * " onChange={ (e)=> this.setState({ number: e.currentTarget.value }) } />
              </div>
              <div className='formgroup'>
                <input required type="text" className="inputelement" placeholder="country * " onChange={ (e)=> this.setState({ country: e.currentTarget.value }) }/>
              </div>
              <div className='formgroup'>
                <input required type="text" className="inputelement" placeholder="prefered call time * " onChange={ (e)=> this.setState({ calltime: e.currentTarget.value }) }/>
              </div>
              <div className='formgroup'>
                <input required type="text" className="inputelement" placeholder="message * " onChange={ (e)=> this.setState({ message: e.currentTarget.value }) }/>
              </div>
              <div className='formgroup'>
                <button className="refformsubmit" onClick={ this.submitCall } type="button">Send</button>
              </div>  
            </form>
            

        </FormAccordion>
        </div>
      </div>
    )
  }
}

export { ContactUs };