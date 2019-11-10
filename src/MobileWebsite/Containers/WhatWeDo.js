import React from 'react';
import ButtonExtended from '../Components/ButtonExtended';


import '../Components/Components.css'

class WhatWeDo extends React.Component {

  render(){
    return(
      <div style={this.props.style}>
        <ButtonExtended name='WHAT DO WE DO?' iconName='chevron_right' color='#DA7B6E'/>
        <div className='segment_body'>
        <section>
            By organising the social media industry, 
            we are helping businesses like yours find their identity online.
        </section>
        <br/>
        <section>
            We have broken down what it takes to create quality content and made it affordable
            so that every business no matter how small can find their place on social media.
        </section>
        </div>
      </div>
    )
  }
}

export { WhatWeDo };