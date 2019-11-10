import React from 'react';
import HeaderLogo from "../../assets/DesktopWebsite/top_logo.png";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './MobileBlogs.css';
import Services from '../Services';
import LocationLogo from "../../assets/DesktopWebsite/SVG/location.svg";
import Icon from '@material-ui/core/Icon';
import Header from '../Components/Header';
import ButtonExtended from '../Components/ButtonExtended'
import { CardHeader, CardActions, Button } from '@material-ui/core';




const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection:'column',
      //fontFamily: 'proxima_nova_altbold'
    },
});




class MobileCareers extends React.Component{
    state = {
        blogPosts: [],
    }


    async componentWillMount(){ 
        try {
          let blogPosts = await Services.getBlogs();
          console.log(blogPosts)
          this.setState({ blogPosts: blogPosts.blogs })
          console.log(this.state)
        }catch(e){
          console.log(e)
        }
    }

    onItemClick(e){
        let blog = this.state.blogPosts[e]
        localStorage.setItem("post", JSON.stringify(blog))
    }
     
    render(){
        //const { classes } = this.props;
        let posts = [];
        let showPosition = true
        for(let i=0,len=this.state.blogPosts.length; i < len; i++){
            let item = this.state.blogPosts[i];
            posts.push(
                <Card style={{width: '90%', borderColor: '#000', margin: '5% auto'}} key={ i }>
                  <CardHeader
                  title={<span className='card-heading'> { item.title } </span>}
                  subheader={ <span className='card-subheading'> { item.date } </span> }
                  />
                    <CardContent>
                          { item.short_description }
                    </CardContent>
                    <CardActions>
                      <a href="/blog-mobile-post" style={{textDecoration: 'none', textDecorationLine: 'none'}} onClick={ this.onItemClick.bind(this, i) }>
                        <Button style={{backgroundColor: '#da7b6e',
                        color: '#FFF',
                        fontFamily: 'ProximaNovaAlt-Bold',
                        fontSize: 12,
                        textDecorationLine:'none',
                        textDecoration: 'none',
                        border: 'none',
                        outline: 'none',
                        textAlign: 'center',
                        letterSpacing: '0.4px',
                        borderRadius: '17.4px'
                        }} className="buttonview">Read Article</Button>
                      </a>

                    </CardActions>
                </Card>
            )
        }
        if(!posts.length){
            showPosition = false
        }

        return(
            
            <div className="maindiv">
              <Header />
              <div className='spacer'></div>
              <ButtonExtended name='BLOG' color='#A3D6CE'/>   
              { posts }              
                {/* <div className="cardsdiv">
                    <div className="marginauto">
                        { !this.state.positions.length &&  <div className='no-positions-div'> No position available </div> }
                        { showPosition &&  positions }
                    </div>
                    <br></br>
                </div> */}
            </div>
            
        )
    }
}

export default withStyles(styles)(MobileCareers);
