import React from 'react'

import './Components.css'

class LogoGrid extends React.Component {

  render(){

    let column1 = [];
    let column2 = [];
    for(let i=0; i < this.props.list.length; i++){
      let { name, uri, instagram } = this.props.list[i];
      let item = <a key={i} rel="noopener noreferrer" href={instagram} target='_blank'><img className='grid_image' src={uri} alt={name}/></a>;
      if(i%2) {
        column2.push(item);
        continue;
      }
      column1.push(item);
    }

    return(
      <div className='row'>
        <div className='column'>
          { column1 }
        </div>
        <div className='column'>
          { column2 }
        </div>
      </div>
    )
  }
}

export default LogoGrid;