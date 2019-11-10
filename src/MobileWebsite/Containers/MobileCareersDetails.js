import React from 'react';
import HeaderLogo from "../../assets/DesktopWebsite/top_logo.png";
import './Careers.css';
import LocationLogo from "../../assets/DesktopWebsite/SVG/location.svg";
import Icon from '@material-ui/core/Icon';







class MobileCareersDetails extends React.Component{
    state = {
        pos: {}
    }
    async componentWillMount(){ 
        this.setState({ pos: JSON.parse(localStorage.getItem("job")) })
    }
    render(){
        const { classes } = this.props;

        let responsibilities = [];
        console.log(this.state.pos.responsibilities.legth)
        for(let i=0, len=this.state.pos.responsibilities.length; i < len; i++){
            responsibilities.push(<li key={ `res-${i}` }> { this.state.pos.responsibilities[i] } </li>)
        }
        let skills = [];
        for(let i=0, len=this.state.pos.skills.length; i < len; i++){
            skills.push(<li key={ `skills-${i}` }> { this.state.pos.skills[i] } </li>)
        }

        return(
            
            <div className="mdiv">
                <div className="logo">
                    <img className="headImage" src = {HeaderLogo}></img>
                     <span><a className="goback" href="/mobile-careers">Go Back</a></span>
                </div>
                <div>
                    <h1 className="position_name">{ this.state.pos.position_name }</h1>
                    <span className="spanclass"><Icon className="iconLocation">place</Icon><span className="locationPin">{ this.state.pos.location }</span></span>

                </div>
                <div className="weare">
                    <p >
                        { this.state.pos.description }
                    </p>
                </div>
                <div >
                    <h3 className="requirement">RESPONSIBILTIES</h3>
                </div>
                <div className="creating">
                    <ul>
                        { responsibilities }
                    </ul>
                </div>
                <div >
                    <h3 className="roles">ROLES</h3>
                </div>
                <div className="creativity">
                    <ul>
                        { skills }
                    </ul>   
                </div>
                <div className="button">
                    <a href={ this.state.pos.apply_url }><button className="buttonapplynow">APPLY NOW</button></a>
                </div>
            </div>
        )
    }
}

export default MobileCareersDetails;
