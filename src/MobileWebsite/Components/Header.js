import React from 'react'
import { AppBar, Toolbar, withStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types';

import Collapse from '@material-ui/core/Collapse';

import headerLogo from '../../assets/MobileWebsite/header_logo.png'

import './Components.css'

const styles = theme => ({

  headerContainer:{
    width:"90vw",
    background:"#000",
    height:"auto",
    borderBottomLeftRadius:"35px",
    borderBottomRightRadius:"37px",
    textAlign:"center",
    marginRight: '5%',
    marginLeft: '5%',
  },
  brandLogo:{
    paddingTop: '2%',
    paddingBottom: '2%',
    "height":"90%",
    "textAlign":"center",
    "maxHeight":"93px",
    "display":"inline-block"
  },
  toolbarItems:{
    marginLeft: 'auto'
  },
  menuIcon:{
    marginLeft: 50,
  },
  grow: {
    flexGrow:1
  }
  
})

class Header extends React.Component {

  state = {
    anchorEl: null,
    checked: false
  };
  componentDidMount(){
  }

  handleMenu = event => {
    this.setState({ checked: !this.state.checked });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    return(
      
        <AppBar className={classes.headerContainer}>
          <Toolbar style={{ flex:1, width: '90vw', padding: '0px' }}>
            <div style={{ margin: '0 auto' }}>
              <a href='/mobile'><img className='headerLogo' src={headerLogo} alt='Brand Logo'/></a>
              <div>
                <Collapse in={this.state.checked}>
                <div style={{
                  color:'#FFF', 
                  fontFamily: 'ProximaNovaAlt-Regular',
                  fontSize:'22px',
                  padding: '10%',
                  textDecorationLine:'none'}}>
                  <a href='/mobile' style={{color:'#FFF', textDecorationLine:'none'}}>home</a>
                  <hr />
                  <a href='/referals' style={{color:'#FFF', textDecorationLine:'none'}}>referral</a>
                  <hr />
                  <a href='/mobile-careers' style={{color:'#FFF', textDecorationLine:'none'}}>careers</a>
                  <hr />
                  <a href='/blog-m' style={{color:'#FFF', textDecorationLine:'none'}}>blog</a>
                  <hr />
                  <a href='/press' style={{color:'#FFF', textDecorationLine:'none'}}>press</a>
                </div>
              </Collapse>
              </div>
            </div>
            <div className='menuIconContainer'>
              <IconButton color='default'
              onClick={this.handleMenu}>
                {this.state.checked ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </Toolbar>  
        </AppBar>
      
      
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);