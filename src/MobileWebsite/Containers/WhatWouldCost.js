import React from 'react'
import ButtonExtended from '../Components/ButtonExtended';
import FormAccordion from '../Components/FormAccordion';
import '../Components/Components.css'


class WhatWouldCost extends React.Component {

  state = {
    isExpanded: null,
  }

  handleChange = panel => (event, expanded) => {
    
    this.setState({
      isExpanded: expanded ? panel : false
    });
    console.log(expanded)
  };


  render(){

    return(
      <div style={this.props.style}>
        <ButtonExtended name='WHAT DOES IT COST?' iconName='chevron_right' color='#A3D6CE'/>
        <section className='segment_body'>
            The option is yours:
        </section>
        <div className='formAccordionContainer'>
            <FormAccordion
            title='$300/per month'
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
                      <li>15 posts & 15 stories on Instagram & Facebook (no graphic design)</li>
                      <li>Surveillance</li>
                      <li>Analytics</li>
                    </ul> 
                </div>
            </FormAccordion>
            <FormAccordion
            title='$600/per month'
            border='#A3D6CE'
            textColor='#FFF'
            name='panel2'
            onChange={ this.handleChange.apply(this, ['panel2']) }
            isExpanded={this.state.isExpanded}
            background='#A3D6CE'>
                <div>
                    <span className='accordionHtmlTitle'>Hustle</span>
                    <ul className='accordionHtml'>
                      <li>15 Posts and 15 stories Instagram & Facebook</li>
                      <li>2 hours Photography or Graphics Design</li>
                      <li>Surveillance</li>
                      <li>Analytics</li>
                      <li>Ad Management (5 Creatives)</li>
                      OR
                      <li>Influencer Marketing (2 Influencer posts)</li>
                    </ul>
                </div>
            </FormAccordion>
            <FormAccordion
            title='$900/per month'
            border='#A3D6CE'
            name='panel3'
            textColor='#FFF'
            onChange={ this.handleChange.apply(this, ['panel3']) }
            isExpanded={this.state.isExpanded}
            background='#A3D6CE'>
                <div>
                    <span className='accordionHtmlTitle'>Disrupt</span>
                    <ul className='accordionHtml'>
                      <li>30 Posts and 30 stories of Instagram & Facebook</li>
                      <li>Graphic Design</li>
                      <li>2 hours of photography and 2 hours of videography</li>
                      <li>Surveillance</li>
                      <li>Ad Management (5 Creatives) </li>
                      OR
                      <li>Influencer Marketing (2 Influencer Posts)</li>
                      <li>Analytics</li>
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
                    <p className='accordionHtml'>This package lets you combine a variety of our services 
                      based on your brand requirements and budget</p>
            </FormAccordion>
          </div>
        </div>
    )
  }
}

export { WhatWouldCost };