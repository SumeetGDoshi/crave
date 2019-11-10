import React from 'react'
import ButtonExtended from '../Components/ButtonExtended';
import LogoGrid from '../Components/LogoGrid';

import Noto from '../../assets/DesktopWebsite/brand_logos/1-Noto.png';
import Hotbox from '../../assets/DesktopWebsite/brand_logos/2-Hotbox.png';
import OrganicRiot from '../../assets/DesktopWebsite/brand_logos/3-Organic-Riot.png';
import DillParsley from '../../assets/DesktopWebsite/brand_logos/4-Dill_Parsley.png';
import Monarch from '../../assets/DesktopWebsite/brand_logos/5-Monarch.png';
import Ahakzai from '../../assets/DesktopWebsite/brand_logos/6-Ahakzai.png';
import TSwirl from '../../assets/DesktopWebsite/brand_logos/7-T-Swirl.png';
import Balade from '../../assets/DesktopWebsite/brand_logos/8-Balade.png';
import RAS from '../../assets/DesktopWebsite/brand_logos/9-RAS.png';
import Matto from '../../assets/DesktopWebsite/brand_logos/10-Matto.png';
import MikePattys from '../../assets/DesktopWebsite/brand_logos/11-Mike_Pattys.png';
import TsuruTonTa from '../../assets/DesktopWebsite/brand_logos/12-TsuruTonTan.png';

import '../Components/Components.css';
import { clients } from '../../utils';


class WhoWeWorkWith extends React.Component {

  constructor(props){
    super(props);
    this.list = [
      { uri: Noto,  ...clients['noto'] },
      { uri: Hotbox, ...clients['hotbox'] },
      { uri: OrganicRiot, ...clients['organic_riot'] },
      { uri: DillParsley, ...clients['dill_and'] },
      { uri: Monarch, ...clients['monarch'] },
      { uri: Ahakzai, ...clients['ahakazi'] },
      { uri: TSwirl, ...clients['t_swirl'] },
      { uri: Balade, ...clients['balade'] },
      { uri: RAS, ...clients['ras'] },
      { uri: Matto, ...clients['matto'] },
      { uri: MikePattys, ...clients['mike_and_pattys'] },
      { uri: TsuruTonTa, ...clients['tsuru'] }
    ]
  }

  render(){
    return(
      <div style={this.props.style}>
        <ButtonExtended name='WHO DO WE WORK WITH?' iconName='chevron_right' color='#DA7B6E'/>
        <section className='segment_body'>
        Tap on the logo to view their instagram page:
        </section>
        <LogoGrid list={this.list}/>
      </div>
    )
  }
}

export { WhoWeWorkWith };