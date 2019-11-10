import React, {Component} from 'react'

import './client.css';

import { clients } from './utils';

// import logo1 from './assets/work/Mp_Logo.png';
// import logo2 from './assets/work/moms.png'
// import logo3 from './assets/work/monarch.png';
// import logo4 from './assets/work/modelBook.png'
// import logo5 from './assets/work/red_bull.png';
// import logo6 from './assets/work/grayson_logo.png';

// import grid1 from './assets/work/MPgrid.jpg';
// import grid2 from './assets/work/Moms_grid.jpg';
// import grid3 from './assets/work/Monarch_grid.jpg';
// import grid4 from './assets/work/TheModelBook.jpg';
// import grid5 from './assets/work/BrunchBeat.jpg';
//import grid6 from './assets/work/Grayson_website.jpg';

import viewInstaButton from './assets/work/insta.png';

// const logos = [logo1, logo2, logo3, logo4, logo5, logo6]
// const grids = [grid1, grid2, grid3, grid4, grid5]
//const grids = [grid1, grid2, grid3, grid4, grid5, grid6]

class Client extends Component {
  render() {
    return(
      <div></div>
    )
    // const {match: {params: {id}}} = this.props
    // console.log(this.props)
    // return (
    //   <div className="client-main">
    //     <div className="left-side-client">
    //       <img src={grids[id]} alt="grid" className="grid-img" />
    //     </div>
    //     <div className="right-side-client">
    //       <div style={{textAlign: 'center'}}>
    //         <img src={logos[id]} alt="logo" className="client-logo-page"/>
    //         <div className="text-data">{ clients[id].text }</div>
    //         <a href={clients[id].instagram} target="_blank"><img src={viewInstaButton} alt="GotoINsta" className="view-insta" /></a>
    //       </div>
    //     </div>
    //     <div/>
    //   </div>
    // )
  }
}

export default Client;
