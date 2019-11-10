import React from 'react'
import HeaderLogo from "../assets/DesktopWebsite/top_logo.png";
import StripeImage from "../assets/DesktopWebsite/Payments_Graphic.png";
import LocationOnIcon from '@material-ui/icons/LocationOn';


import './DesktopCareers.css'
import Services from '../MobileWebsite/Services';


class DesktopCareers extends React.Component {
  state = {
    positions: []
  }

  async componentWillMount(){ 
    try {
      let careersInfo = await Services.getCareers();
      console.log(careersInfo)
      this.setState({ positions: careersInfo.positions })
    }catch(e){
      console.log(e)
    }
    

  }
  
  homeLogoClick(){
    
  }

  onItemClick(e){
    let postion = this.state.positions[e]
    localStorage.setItem("job", JSON.stringify(postion))
  }

  render(){
    let careers = [];
    let showPosition = true;
    for(let i=0,len=this.state.positions.length; i < len; i++){
      let pos = this.state.positions[i];
      
      careers.push(
        <div className='card-item' key={i}>
          <div className='cardtext-container'>
              <span className='cardheading'>{ pos.position_name }</span>
              <span className='cardSubHeading'><LocationOnIcon fontSize='inherit' />&nbsp; { pos.location } </span>
              <span className='cardText'> { pos.description } </span>
          </div>
          <div className='cardbtn-container'>
            <a href='/careers-details' onClick={ this.onItemClick.bind(this, i) }>
              <button className='cardbtn'>
                <span className='cardbtn-text'>View More</span>
              </button>
            </a>
          </div>
        </div>
      )
    }
    if(!careers.length){
      showPosition = false
    }
    return(
      <div className='careers-page'>
        <a href="/" ><img src={HeaderLogo} className='header-logo'/></a>
        <img src={StripeImage} className='stripes-image' />
        {/* Content Container */}
        <div className='content-container'>
          <span className='content-heading'>CAREERS</span>
          <div className='cards-container'>
            { !this.state.positions.length &&  <div className='no-positions-div'> No position available </div> }
            { showPosition &&  careers }
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopCareers;