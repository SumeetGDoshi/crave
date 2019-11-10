import React, { Component } from "react";

import { clients, clientList } from "../utils";

import Slider from "react-animated-slider";

// import Balade_Logo from "../assets/DesktopWebsite/brand_logos/Balade_Logo.png";
// import Balade_logo_profile from "../assets/DesktopWebsite/brand_logos/Balade_logo_profile.jpg";

// import balade_logo from '../assets/DesktopWebsite/brand_logos/balade_logo.png';
import balade_profile from '../assets/DesktopWebsite/brand_logos/balade_profile.jpg'

import dill_and_logo from "../assets/DesktopWebsite/brand_logos/dill_and_logo.png";
import dill_and_profile from "../assets/DesktopWebsite/brand_logos/dill_and_profile.png";

import hotbox_logo from "../assets/DesktopWebsite/brand_logos/hotbox_logo.png";
import hotbox_profile from "../assets/DesktopWebsite/brand_logos/hotbox_profile.png";

import matto_logo from "../assets/DesktopWebsite/brand_logos/matto_logo.png";
import matto_profile from "../assets/DesktopWebsite/brand_logos/matto_profile.png";

import mike_and_pattys_logo from "../assets/DesktopWebsite/brand_logos/mike_and_pattys_logo.png";
import mike_and_pattys_profile from "../assets/DesktopWebsite/brand_logos/mike_and_pattys_profile.png";

import monarch_logo from "../assets/DesktopWebsite/brand_logos/monarch_logo.png";
import monarch_profile from "../assets/DesktopWebsite/brand_logos/monarch_profile.png";

import organic_riot_logo from "../assets/DesktopWebsite/brand_logos/organic_riot_logo.png";
import organic_riot_profile from "../assets/DesktopWebsite/brand_logos/organic_riot_profile.png";

import pelicana_logo from "../assets/DesktopWebsite/brand_logos/pelicana_logo.png";
import pelicana_profile from "../assets/DesktopWebsite/brand_logos/pelicana_profile.png";

import shaadi_logo from "../assets/DesktopWebsite/brand_logos/shaadi_logo.png";
import shaadi_profile from "../assets/DesktopWebsite/brand_logos/shaadi_profile.png";

import the_bean_logo from "../assets/DesktopWebsite/brand_logos/the_bean_logo.png";
import the_bean_profile from "../assets/DesktopWebsite/brand_logos/the_bean_profile.png";

import the_model_book_logo from "../assets/DesktopWebsite/brand_logos/the_model_book_logo.png";
import the_model_book_profile from "../assets/DesktopWebsite/brand_logos/the_model_book_profile.png";

import tsuru_logo from "../assets/DesktopWebsite/brand_logos/tsuru_logo.png";
import tsuru_profile from "../assets/DesktopWebsite/brand_logos/tsuru_profile.png";

import redbull_logo from "../assets/DesktopWebsite/brand_logos/red_bull_logo.png";
import redbull_profile from "../assets/DesktopWebsite/brand_logos/red_bull_profile.png";

import moms_logo from "../assets/DesktopWebsite/brand_logos/moms_logo.png";
import moms_profile from "../assets/DesktopWebsite/brand_logos/moms_profile.png";

import grayson_logo from "../assets/DesktopWebsite/brand_logos/grayson_logo.png";
import grayson_profile from "../assets/DesktopWebsite/brand_logos/grayson_profile.png";

import { Grid, Button, Icon } from "@material-ui/core";
import noto_grid from "../assets/DesktopWebsite/brand_logos/01_noto_grid.png";
import hotbox_grid from "../assets/DesktopWebsite/brand_logos/02_hotbox_grid.png";
import organic_riot_grid from "../assets/DesktopWebsite/brand_logos/03_organic_riot_grid.png";
import dill_and_grid from "../assets/DesktopWebsite/brand_logos/04_dill_parsley_grid.png";
import monarch_grid from "../assets/DesktopWebsite/brand_logos/05_monarch_grid.png";
import ahakazi_grid from "../assets/DesktopWebsite/brand_logos/06_ahakzai_grid.png";
import tswirl_grid from "../assets/DesktopWebsite/brand_logos/07_tswirl_grid.png";
import balade_grid from "../assets/DesktopWebsite/brand_logos/08_balade_grid.jpg";
import ras_grid from "../assets/DesktopWebsite/brand_logos/09_RAS_grid.png";
import matto_grid from "../assets/DesktopWebsite/brand_logos/10_matto_grid.png";
import mike_and_pattys_grid from "../assets/DesktopWebsite/brand_logos/11_mike_pattys_grid.png";
import tsurutontan_grid from "../assets/DesktopWebsite/brand_logos/12_tsurutontan_grid.png";

import './ClintInfo.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const logos = {
  // cast_you: cast_you_logo,
  // balade: balade_logo,
  dill_and: dill_and_logo,
  hotbox: hotbox_logo,
  matto: matto_logo,
  mike_and_pattys: mike_and_pattys_logo,
  monarch: monarch_logo,
  organic_riot: organic_riot_logo,
  pelicana: pelicana_logo,
  shaadi: shaadi_logo,
  the_bean: the_bean_logo,
  the_model_book: the_model_book_logo,
  tsuru: tsuru_logo,
  moms: moms_logo,
  redbull: redbull_logo,
  grayson: grayson_logo
};

const grids = {
  noto : noto_grid,
  hotbox: hotbox_grid,
  organic_riot: organic_riot_grid,
  dill_and: dill_and_grid,
  monarch: monarch_grid,
  ahakazi: ahakazi_grid,
  t_swirl: tswirl_grid,
  balade: balade_grid,
  ras: ras_grid,
  matto: matto_grid,
  mike_and_pattys: mike_and_pattys_grid,
  tsuru: tsurutontan_grid
};


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
    width: 160,
  },
  control: {
    padding: '16px',
  },
  padder:{
    paddingTop: '40px',
    paddingBottom: '40px',
    marginTop: '20px',
    marginBottom: '20px'
  },
  button: {
    margin: '8px',
    background: '#000',
    color: '#fff',
    borderRadius: '20px'
  },
  icon:{
    fontSize: '3rem !important'
  }
});


class ClientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: this.props.client,
      showLeft: true,
      showRight: true
    };
  }
  render() {
    let { classes } = this.props;
    const clientInfo = clients[this.state.client];
    const grid = grids[this.state.client]
    

    return (
      <div style={{ display: 'flex' }}>
        {<div className="left-arrow" onClick={ this.onArrayClick.bind(this, 'left') }>
          <Icon className={"icon-at icon-left"} fontSize={'large'}>keyboard_arrow_left</Icon>
        </div>}
        <div className="InstaPostCOntainer">
          <div className="post-holder">
            <div className="instgrid">
              <img src={grid} />
            </div>
            <div className="postinro">
              <div className="heading">
                <h3>{ clientInfo.name }</h3>
              </div>
              <div className="insta-info-holder">
                <div className="post">
                  { clientInfo.posts }
                  <label>posts</label>
                </div>
                <div className="post following">
                { clientInfo.followers }
                  <label>followers</label>
                </div>
              </div>
              <div className="description">
                <p>{ clientInfo.description }</p>
              </div>
              <div className="view-profile">
                <a href={clientInfo.instagram} target="_blank">
                <Button variant="contained" className={classes.button}>
                  View Instagram Profile
                </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      {<div className="right-arrow" onClick={ this.onArrayClick.bind(this, 'right') }><Icon className={"icon-at icon-left"} fontSize={'large'}>keyboard_arrow_right</Icon></div> }
      </div>
    );
  }
  onArrayClick(side){
    let currentIndex = clientList.indexOf(this.state.client);
    if(side == 'right' && (clientList.length-1) === currentIndex){
      currentIndex = -1
    }
    if(currentIndex === 0 && side == 'left'){
      currentIndex = clientList.length;
    }
    let nextI = (side == 'left' ) ? --currentIndex : ++currentIndex;
    this.setState({ client: clientList[nextI], showLeft: true, showRight: true })

  }
}

ClientInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientInfo);
