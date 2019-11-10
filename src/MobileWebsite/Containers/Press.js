import React from 'react'
import Header from '../Components/Header';

import ButtonExtended from '../Components/ButtonExtended'
import RequestDemo from '../Components/RequestDemo';




var PressJson = require('../../press-links.json')

class Press extends React.Component {

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
    this.message="This is Success";
    this.variant = "success";
    this.code = null
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


  render(){

    let pressPostsArray1 = []
    let pressPostsArray2 = []

    let pressLinksArray = PressJson.links

    
    for(let i=1; i<=17; i++){
      if(i%2){
        pressPostsArray1.push(
          <span key={i}>
          <a target="_blank" href={pressLinksArray[i-1]}>
            <img src={require(`../../assets/press-logos/logo-${i}.png`)}/>
          </a>
          </span>
        )
        continue;
      }
      pressPostsArray2.push(
        <span key={i}>
        <a target="_blank" href={pressLinksArray[i-1]}>
          <img src={require(`../../assets/press-logos/logo-${i}.png`)}/>
        </a>
        </span>
      )
    }
    return(
      <div>
        <Header />
        <div className='spacer'></div>
        <ButtonExtended name='WE ARE FEATURED IN' color='#A3D6CE' />
        
        <div className='row'>
          <div className='column'>
          { pressPostsArray1.reverse() }
          </div>
          <div className='column'>            
            { pressPostsArray2.reverse() }
          </div>
      </div>
      </div>
    )
  }
}


export default Press