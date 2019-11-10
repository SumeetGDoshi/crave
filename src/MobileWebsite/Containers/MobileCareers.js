import React from 'react';
import HeaderLogo from "../../assets/DesktopWebsite/top_logo.png";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Careers.css';
import Services from '../Services';
import LocationLogo from "../../assets/DesktopWebsite/SVG/location.svg";
import Icon from '@material-ui/core/Icon';
import Header from '../Components/Header';




const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection:'column',
      //fontFamily: 'proxima_nova_altbold'
    },
});




class MobileCareers extends React.Component{
    state = {
        positions: []
    }


    async componentWillMount(){ 
        try {
          let careersInfo = await Services.getCareers();
          console.log(careersInfo)
          this.setState({ positions: careersInfo.positions })
        }catch(e){
          console.log(e)
        }
    }

    onItemClick(e){
        let postion = this.state.positions[e]
        localStorage.setItem("job", JSON.stringify(postion))
    }
     
    render(){
        //const { classes } = this.props;
        let positions = [];
        let showPosition = true
        for(let i=0,len=this.state.positions.length; i < len; i++){
            let item = this.state.positions[i];
            positions.push(
                <Card className="cards" key={ i } >
                    <CardContent>
                        <h2 className="position">{ item.position_name }</h2>
                        <span><Icon className="iconLocation">place</Icon><span className="locationPin">{ item.location }</span></span>
                        <p className="text">
                            { item.description }
                        </p>
                        <a href="/mobile-careers-details" onClick={ this.onItemClick.bind(this, i) }><button className="buttonview">VIEW POSITION</button></a>
                    </CardContent>
                </Card>
            )
        }
        if(!positions.length){
            showPosition = false
        }

        return(
            
            <div className="maindiv">
                {/* <div className="logo">
                    <a href="/" ><img className="headImage" src = {HeaderLogo}></img></a>
                    <h2 className="careers">CAREERS</h2>
                </div> */}
                <Header /> 
                <div className='spacer'></div>   
                <div className="cardsdiv">
                    <div className="marginauto" style={{marginTop: 10}}>
                        { !this.state.positions.length &&  <div className='no-positions-div'> No positions available </div> }
                        { showPosition &&  positions }
                    </div>
                    <br></br>
                </div>
            </div>
            
        )
    }
}

export default withStyles(styles)(MobileCareers);
