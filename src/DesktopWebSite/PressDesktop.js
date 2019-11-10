import React from 'react';
import './PressDesktop.css';
import { Carousel } from 'react-responsive-carousel';

import Slider from "react-animated-slider";
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons/ArrowBack'

var PressJson = require('../press-links.json')


class PressDesktop extends React.Component {


  render(){

    let pressPostsArray1 = []
    let pressPostsArray2 = []
    let pressPostsArray3 = []
    let pressLinksArray = PressJson.links


    for(let i=13; i<=17; i++){
      pressPostsArray1.push(
        <span style={{margin: 15}} key={i}>
        <a target="_blank" href={pressLinksArray[i-1]}>
          <img className="imageSlider" src={require(`../assets/press-logos/logo-${i}.png`)}/>
        </a>
        </span>
      )
    }

    for(let i=7; i<=12; i++){
      pressPostsArray2.push(
        <span style={{margin: 15}} key={i}>
        <a target="_blank" href={pressLinksArray[i-1]}>
          <img className="imageSlider" src={require(`../assets/press-logos/logo-${i}.png`)}/>
        </a>
        </span>
      )
    }

    
    for(let i=1; i<=6; i++){
      pressPostsArray3.push(
        <span style={{margin: 15}} key={i}>
        <a target="_blank" href={pressLinksArray[i-1]}>
          <img className="imageSlider" src={require(`../assets/press-logos/logo-${i}.png`)}/>
        </a>
        </span>
      )
    }
    return(
      <div>
        <span className='section-heading' style={{paddingTop: '10vw', paddingBottom: '0'}}>
          WE ARE FEATURED IN
        </span>
        
        <Slider infinite={true}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0 30', padding: '0 20', alignItems: 'center'}}>
            { pressPostsArray1.reverse() }
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0 30', padding: '0 20', alignItems: 'center'}}>
            { pressPostsArray2.reverse() }
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0 30', padding: '0 20', alignItems: 'center'}}>
            { pressPostsArray3.reverse() }
          </div>
          
        </Slider>
      </div>
      
    );
  }
}


export default PressDesktop