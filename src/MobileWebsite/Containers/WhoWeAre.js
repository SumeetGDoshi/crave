import React from 'react'
import ButtonExtended from '../Components/ButtonExtended';


import '../Components/Components.css';


class WhoWeAre extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hideHelper: false
    }
  }
  render(){
    return(
      <div style={this.props.style}>
        <ButtonExtended iconName='chevron_right' name='WHO ARE WE?' color='#A3D6CE'/>
        <section className=' segment_body segment_who_we_are'>
        We are a social media solution that you can <strong>afford</strong> and most importantly <strong>trust.</strong>
        </section>
      </div>
    );
  }
}

export { WhoWeAre };