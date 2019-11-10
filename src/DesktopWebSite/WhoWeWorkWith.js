import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import Slider from "react-animated-slider";
import Noto from '../assets/DesktopWebsite/brand_logos/1-Noto.png';
import Hotbox from '../assets/DesktopWebsite/brand_logos/2-Hotbox.png';
import OrganicRiot from '../assets/DesktopWebsite/brand_logos/3-Organic-Riot.png';
import DillParsley from '../assets/DesktopWebsite/brand_logos/4-Dill_Parsley.png';
import Monarch from '../assets/DesktopWebsite/brand_logos/5-Monarch.png';
import Ahakzai from '../assets/DesktopWebsite/brand_logos/6-Ahakzai.png';
import TSwirl from '../assets/DesktopWebsite/brand_logos/7-T-Swirl.png';
import Balade from '../assets/DesktopWebsite/brand_logos/8-Balade.png';
import RAS from '../assets/DesktopWebsite/brand_logos/9-RAS.png';
import Matto from '../assets/DesktopWebsite/brand_logos/10-Matto.png';
import MikePattys from '../assets/DesktopWebsite/brand_logos/11-Mike_Pattys.png';
import TsuruTonTa from '../assets/DesktopWebsite/brand_logos/12-TsuruTonTan.png';


// import Balade_Logo from "../assets/DesktopWebsite/brand_logos/Balade_Logo.png";
// import dill_and_logo from "../assets/DesktopWebsite/brand_logos/dill_and_logo.png";
// import hotbox_logo from "../assets/DesktopWebsite/brand_logos/hotbox_logo.png";
// import matto_logo from "../assets/DesktopWebsite/brand_logos/matto_logo.png";
// import mike_and_pattys_logo from "../assets/DesktopWebsite/brand_logos/mike_and_pattys_logo.png";
// import monarch_logo from "../assets/DesktopWebsite/brand_logos/monarch_logo.png";
// import organic_riot_logo from "../assets/DesktopWebsite/brand_logos/organic_riot_logo.png";
// import pelicana_logo from "../assets/DesktopWebsite/brand_logos/pelicana_logo.png";
// import shaadi_logo from "../assets/DesktopWebsite/brand_logos/shaadi_logo.png";
// import the_bean_logo from "../assets/DesktopWebsite/brand_logos/the_bean_logo.png";
// import the_model_book_logo from "../assets/DesktopWebsite/brand_logos/the_model_book_logo.png";
// import tsuru_logo from "../assets/DesktopWebsite/brand_logos/tsuru_logo.png";
// import balade_logo from '../assets/DesktopWebsite/brand_logos/balade_logo.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
    width: 160,
    cursor:'pointer'
  },
  control: {
    padding: '16px',
  },
  padder:{
    paddingTop: '40px',
    paddingBottom: '40px',
    marginTop: '20px',
    marginBottom: '20px'
  }
});

const logos = [
  { logo: Noto, index: 'noto' },
  { logo: Hotbox, index: 'hotbox' },
  { logo: OrganicRiot, index: 'organic_riot' },
  { logo: DillParsley, index: 'dill_and' },
  { logo: Monarch, index: 'monarch' },
  { logo: Ahakzai, index: 'ahakazi' },
  { logo: TSwirl, index: 't_swirl' },
  { logo: Balade, index: 'balade' },
  { logo: RAS, index: 'ras' },
  { logo: Matto, index: 'matto' },
  { logo: MikePattys, index: 'mike_and_pattys' },
  { logo: TsuruTonTa, index: 'tsuru' }
]


export class WhoWeWorkWith extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    let { classes } = this.props;
    return (
      <div className="who-we-work-with section-container">
        <div className="section-heading">WHO DO WE WORK WITH?</div>
        <div className={classes.padder}>
          <Grid container justify="center" className={classes.root} spacing={8}>
            <Grid item xs={8}>
              <Grid container justify="flex-start" spacing={8*3}>
                {logos.map(value => (
                  <Grid key={value.index} item >
                    <Paper className={classes.paper} elevation={0} square={true}>
                      <img src={value.logo} onClick={()=> {this.props.openModal(value.index)}}/>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

WhoWeWorkWith.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhoWeWorkWith);

// one square w: 262.859 px;
// h: 194.958px
// all squares w : 823.817px; h: 391.002px
