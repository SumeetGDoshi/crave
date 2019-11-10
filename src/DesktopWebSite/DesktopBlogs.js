import React from 'react'
import HeaderLogo from "../assets/DesktopWebsite/top_logo.png";
import StripeImage from "../assets/DesktopWebsite/Payments_Graphic.png";
import LocationOnIcon from '@material-ui/icons/LocationOn';


import './DesktopCareers.css'
import Services from '../MobileWebsite/Services';


class DesktopBlogs extends React.Component {
  state = {
    blogPosts: []
  }
  async componentWillMount(){ 
    try {
      let blogs = await Services.getBlogs();
      console.log(blogs.blogs)
      this.setState({ blogPosts: blogs.blogs })
    }catch(e){
      console.log(e)
    }

  }
  
  homeLogoClick(){
    
  }

  onItemClick(e){
    let blogPost = this.state.blogPosts[e]
    localStorage.setItem("post", JSON.stringify(blogPost))
  }

  render(){
    let blogPosts = [];
    let showPosition = true;
    for(let i=0,len=this.state.blogPosts.length; i < len; i++){
      let pos = this.state.blogPosts[i];
      console.log(pos)
      blogPosts.push(
        <div className='card-item' key={i}>
          <div className='cardtext-container'>
              <span className='cardheading'>{ pos.title }</span>
              <span className='cardSubHeading'>{ pos.date } </span>
              <span className='cardText'> { pos.short_description } </span>
          </div>
          <div className='cardbtn-container'>
            <a href='/blog-post' onClick={ this.onItemClick.bind(this, i) }>
              <button className='cardbtn'>
                <span className='cardbtn-text'>Read Article</span>
              </button>
            </a>
          </div>
        </div>
      )
    }
    if(!blogPosts.length){
      showPosition = false
    }
    return(
      <div className='careers-page'>
        <a href="/" ><img src={HeaderLogo} className='header-logo'/></a>
        <img src={StripeImage} className='stripes-image' />
        {/* Content Container */}
        <div className='content-container'>
          <span className='content-heading'>BLOG</span>
          <div className='cards-container'>
            { !this.state.blogPosts.length &&  <div className='no-positions-div'> No Blog Posts to show </div> }
            { showPosition &&  blogPosts }
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopBlogs;