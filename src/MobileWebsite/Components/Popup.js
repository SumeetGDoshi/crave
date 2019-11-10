import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Refpopupdesktop from '../../assets/DesktopWebsite/refpopupdesktop.png';
import Refpopupmobile from '../../assets/DesktopWebsite/refpopupmobile.png';


import { withStyles } from '@material-ui/core/styles';
import { all } from 'q';
// import { ImportantDevices } from 'material-ui-icons';

const styles = theme => ({

  popupContainer: {
    fontFamily: 'ProximaNovaAlt-Light'
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
  heading: {
    fontSize: '1em',
    fontFamily: 'ProximaNovaAlt-Regular'
  },
  content: {
    fontFamily: 'ProximaNovaAlt-Light',
    padding: '5%',
  },
  contentImage:{
    position: 'absolute',
    top:0,
    right:0,
    width: '50% !important',
    

  },
  refCodeContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
    zIndex: '999999',
    width:'100%',
    position: 'absolute',
    
  },
  refCodeText:{
    borderRadius: '70px',
    width: '70%',
    textAlign: 'center',
    boxShadow: 'inset 0px 0px 14px -1px #ccc',
    backgroundColor: 'white'
    
  },
  referralCode:{
    padding: '5%'
  },

  
  mobilecontent:{
    fontFamily: 'ProximaNovaAlt-Light',
    padding: '5%',
  },
  mobilecontentImage:{
    position: 'absolute',
    top:'45px',
    right:0,
    width:'85% !important'
  },
  mobilerefCodeContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom: '10px',
    left: '30px',
    right: '30px'
  },
  mobilerefCodeText:{
    borderRadius: '75px',
    width: '100%',
    textAlign: 'center',
    boxShadow: 'inset 0px 0px 14px -1px #eee',
    backgroundColor: 'white',
    height:'62px'
  },
  mobilereferralCode:{
  padding:'2%',
  marginTop: '8%',
  fontSize: "25px"

  }


  
})

class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }


  render(){
    const { classes, title, children, onClose,popupScreen, ...other } = this.props;
    return(
      <Dialog
      maxWidth = 'lg'
      //fullScreen= {true}
      fullWidth = {true}
      open={this.props.open}
      onClose={this.props.onClose} {...other}>
        {/* <DialogTitle>
          <Typography className={classes.heading}>{ title }</Typography>
        </DialogTitle> */}
          {popupScreen ? <div className={classes.content} style={{height: '600px'}}>                                                                                                                                                                                                                                                                                                                                                                                         
            <img className = {classes.contentImage} src={Refpopupdesktop}></img>                                                                                  
            <div className={classes.refCodeContainer}>
            <h3>Here is your referral code</h3>
            <div className={classes.refCodeText}>                                                                     
              <h1 className={classes.referralCode}>{ children }</h1>
            </div>
            </div>
            
        </div> : 
        <div className={classes.mobilecontent} style={{height: '600px'}}>                                                                                                                                                                                                                                                                                                                                                                                         
          <img className = {classes.mobilecontentImage} src={Refpopupmobile}></img>                                                                                  
            <div className={classes.mobilerefCodeContainer}>
              <h4>Here is your referral code</h4>
              <div className={classes.mobilerefCodeText}>                                                                     
                <h1 className={classes.mobilereferralCode}>{ children }</h1>
              </div>
            </div>
        </div> }

        
            {onClose ? (
            <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>                                                                                                                                                                                                           
              <CloseIcon />                                                                                                                                                                                                                                                         
            </IconButton>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          ) : null}

      </Dialog>
    );
  }
}

export default withStyles(styles)(Popup);