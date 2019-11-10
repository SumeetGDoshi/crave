import React from 'react'
import './Components/Components.css'
import ButtonExtended from './Components/ButtonExtended';
import FormAccordion from './Components/FormAccordion';
import Header from './Components/Header';
import RequestDemo from './Components/RequestDemo';
import CustomSnackbar from './Components/CustomSnackbar';


class FreeTrailM extends React.Component {

  state = {
    isExpanded: null,
    showSnackbar: false,
  }

  message = "This is Success";
  variant = "success";
  onrequestSubmit = this.onrequestSubmit.bind(this)

  handleChange = panel => (event, expanded) => {
    
    this.setState({
      isExpanded: expanded ? panel : false
    });
    console.log(expanded)
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    this.setState({ showSnackbar: false });
  };

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


  render(){

    return(
      <div style={{paddingTop: 123}}>
        
        <Header />
        {/* <div className='spacer'></div> */}
        <CustomSnackbar vertical="bottom" variant={ this.variant } message={ this.message } isOpen={ this.state.showSnackbar } handleClose={ this.handleClose.bind(this) }  />
        <div className="header-text">
          <h3 className="top-header-text">Where Social Media Happens</h3>
          <p className="first-header-text">We’re here to help businesses like yours find their identity online</p>
          <p className="first-header-text extra-small">@ is a streamlined combination of photography, content creation, graphic design, influencer marketing, analytics, surveillance and ad management that come together cohesively to form the monthly cycle that works on a subscription model.</p>
          <h3 className="top-header-text">What Does It Cost?</h3>
        </div>
        {/* <section className='segment_body'>
            The option is yours:
        </section> */}
        <div className='formAccordionContainer'>
            <FormAccordion
            title='$250/per month'
            border='#A3D6CE'
            name='panel1'
            textColor='#FFF'
            background='#A3D6CE'
            onChange={ this.handleChange.apply(this, ['panel1']) }
            isExpanded={this.state.isExpanded}
            >
                <div>
                    <span className='accordionHtmlTitle'>Cute</span>
                    <ul className='accordionHtml'>
                      <li>15 Posts on Instagram & Facebook without graphic design</li>
                      <li>Surveillance</li>
                      <li>Analytics</li>
                    </ul> 
                </div>
            </FormAccordion>
            <FormAccordion
            title='$500/per month'
            border='#A3D6CE'
            textColor='#FFF'
            name='panel2'
            onChange={ this.handleChange.apply(this, ['panel2']) }
            isExpanded={this.state.isExpanded}
            background='#A3D6CE'>
                <div>
                    <span className='accordionHtmlTitle'>Hustle</span>
                    <ul className='accordionHtml'>
                      <li>15 Posts on Instagram & Facebook without graphic design</li>
                      <li>2 hr Photography or Videography session Every Month</li>
                      <li>Surveillance</li>
                      <li>Analytics</li>
                      <li>Ad Management </li>
                      OR
                      <li>Influencer Marketing</li>
                    </ul>
                </div>
            </FormAccordion>
            <FormAccordion
            title='$800/per month'
            border='#A3D6CE'
            name='panel3'
            textColor='#FFF'
            onChange={ this.handleChange.apply(this, ['panel3']) }
            isExpanded={this.state.isExpanded}
            background='#A3D6CE'>
                <div>
                    <span className='accordionHtmlTitle'>Disrupt</span>
                    <ul className='accordionHtml'>
                      <li>30 Posts on Instagram & Facebook without graphic design</li>
                      <li>4 hr Photography or Videography session Every Month</li>
                      <li>Surveillance</li>
                      <li>Ad Management</li>
                      OR
                      <li>Influencer Marketing</li>
                      <li>Analytics</li>
                      <li>Engagement Strategy</li>
                    </ul>
                </div>
            </FormAccordion>
            <FormAccordion
            title='Customised Package'
            border='#A3D6CE'
            textColor='#FFF'
            name='panel4'
            onChange={ this.handleChange.apply(this, ['panel4']) }
            isExpanded={this.state.isExpanded}
            background='#A3D6CE'>
                    <p className='accordionHtml'>Allow yourself to dream and combine our services to suit your budget and brand requirements.</p>
            </FormAccordion>
          </div>
        <p className="bottom-text">Try @ Today For Free. No risk and No Credit Card Required</p>
        <div style={{height: '80px'}}></div>
        <RequestDemo  title='Sign Up For A Consultation' modalButtonText='SUBMIT' comingFrom='home' onrequestSubmit = { this.onrequestSubmit.bind(this) } source="freetrail form" />       
      </div>
    )
  }
}

export { FreeTrailM };