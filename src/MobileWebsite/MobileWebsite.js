import React from "react";
import SwipeableViews from 'react-swipeable-views';
import Icon from '@material-ui/core/Icon';

import { mod } from 'react-swipeable-views-core';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

import { Dialog, DialogContent, DialogTitle, DialogContentText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import RequestDemo from './Components/RequestDemo';
import Header from './Components/Header';
import CustomSnackbar from './Components/CustomSnackbar';


import { WhoWeAre, 
    WhatWeDo, 
    HowWeDo, 
    WhatWouldCost, 
    WhoWeWorkWith, 
    ContactUs
} from './Containers'


import "./MobileWebsite.css";
import Services from "./Services";


class MobileWebsite extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            message: '',
            showSnackbar: false,
            hideHelper: false,  
            viewportHeight: window.innerHeight,
            viewportWidth: window.innerWidth,
            animateHeight: true,
            showPopup: false
        }
        this.variant = ""
        this.message = ""
    }



    componentDidMount(){
        setTimeout(()=>{
            sessionStorage.setItem('doLoaderShow', 1);
            this.forceUpdate();
        }, 3000);
        setTimeout(() => {this.setState({hideHelper: true})}, 7000);
    }

    onrequestSubmit(status){
        if(!status){
            this.variant = "error"
            this.message = "Server Error Occured! Try Again"
            this.setState({ showSnackbar: true });
            return;
        }
        this.variant = "success"
        this.message = "Your Request has been processed successfully."
        this.setState({ showSnackbar: true,showPopup: true });
    }
   
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    };
    render() {
        let isloadder = sessionStorage.getItem('doLoaderShow');
        if(!isloadder || isloadder == 0){
            return(
                <div style={{overflow:'hidden'}}>
                    <img src={require('../assets/MobileWebsite/opening.jpg')}
                    style={{ width: this.state.viewportWidth, height: this.state.viewportHeight }} />
                </div>
            );
        }

        return (
            <div className="mobileWebsiteContainer">
                {!this.state.hideHelper ? 
                    <div
                    onClick={()=>this.setState({hideHelper: true})} 
                    style={{ marginTop: '10%',
                    textAlign: 'center',
                    background: 'rgba(163,214,206, 0.9)',
                    color: '#2a2a2a',
                    fontSize: '1.5em',
                    fontFamily: 'ProximaNovaAlt-Regular',
                    margin: '0 auto',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex:'9999'
                    }}>
                        <div>
                        <Icon>arrow_forward</Icon>
                        <h4>Swipe to know us</h4>
                        </div>
                    </div> 
                : null } 
                <CustomSnackbar vertical="bottom" variant={ this.variant } message={ this.message } isOpen={ this.state.showSnackbar } handleClose={ this.handleClose.bind(this) }  />
                <Header />
                <div className='spacer'></div>
                <SwipeableViews enableMouseEvents animateHeight={this.state.animateHeight} onChangeIndex={ (last, index, meta)=>{
                    // if(last == 2 || last == 3 || last == 5){
                    //     this.setState({animateHeight:false})
                    //     return;
                    // }
                    // this.setState({animateHeight:true})
                    
                }}>
                    <WhoWeAre  style={{'paddingBottom': '100px' }} />
                    <WhatWeDo style={{'paddingBottom': '100px' }} />
                    <HowWeDo style={{'paddingBottom': '280px' }} />
                    <WhatWouldCost style={{'paddingBottom': '300px' }} />
                    <WhoWeWorkWith />
                    <ContactUs style={{'paddingBottom': '400px' }} onrequestSubmit={ this.onrequestSubmit.bind(this) } />
                </SwipeableViews>
                <div style={{height: '80px'}}></div>
                <RequestDemo title='Contact Us Now' modalButtonText='SUBMIT' comingFrom='home' onrequestSubmit={ this.onrequestSubmit.bind(this) } source="Contact Us Now"/>
                <Dialog
                open={this.state.showPopup}
                onClose={this.handleClose}
                style={{height: '50vh'}}>
                    <DialogTitle>Awesome! <IconButton aria-label="Close" style={{position: 'absolute', right: 20, top: 20}} onClick={ () => this.setState({showPopup: false}) }>                                                                                                                                                                                                           
                    <CloseIcon />                                                                                                                                                                                                                                                         
                    </IconButton></DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Thank You! The form has been submitted! Please fill in your customer information form 
                        <a style={{fontSize: 18, margin: 8}} href="https://docs.google.com/forms/d/e/1FAIpQLSdig5To636PFoB-tITUDf8VxaCnIm5MHSVvlmS73hUexqcDLA/viewform" target='_blank'>here</a> 
                    </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );

    }
}
export default MobileWebsite;