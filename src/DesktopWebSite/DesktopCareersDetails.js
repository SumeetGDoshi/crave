import React, { Component } from "react";
import HeaderLogo from "../assets/DesktopWebsite/top_logo.png";
import Icon from '@material-ui/core/Icon';
import PaymentsGraphics from "../assets/DesktopWebsite/Payments_Graphic.png";

class DesktopCareersDetails extends React.Component{
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
            
            <div className="mdivD">
                <div className="logoD">
                    <img className="headImageD" src = {HeaderLogo}></img>
                    <img className="graphicD" src= {PaymentsGraphics}></img>
                    
                </div>
                <div> <span className="gobackD"><a  href="/careers">Go Back</a></span></div>
               <div className="contentdivD">
                <div >
                    <h1 className="contentcreatorD"> { this.state.pos.position_name } </h1>
                    <span className="spanclassD"><Icon className="iconLocationD">place</Icon><span className="locationPinD"> { this.state.pos.location } </span></span>

                </div>
                
                <div className="weareD">
                    <p >
                        { this.state.pos.description }
                    </p>
                </div>
                        <div >
                            <h3 className="responsibilitiesD">RESPONSIBILTIES</h3>
                        </div>
                            <div className="creatingD">
                            <ul>
                                { responsibilities }
                            </ul>                               
                        </div>
                        <div >
                            <h3 className="skillsD">SKILLS</h3>
                        </div>
                        <div className="creativityD">
                            <ul>
                                { skills }
                            </ul>                            
                        </div>
                        <div className="buttonD">
                        <a href={ this.state.pos.apply_url }><button className="buttonapplynowD">APPLY NOW</button></a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default DesktopCareersDetails;
