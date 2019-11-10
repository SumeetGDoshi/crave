import React from 'react'

import HeaderLogo from "../assets/DesktopWebsite/top_logo.png";
import Icon from '@material-ui/core/Icon';
import PaymentsGraphics from "../assets/DesktopWebsite/Payments_Graphic.png";

import './DesktopBlogs.css'

class DesktopBlogPost extends React.Component {

  state={
    post: {}
  }

  componentWillMount(){
    this.setState({ post : JSON.parse(localStorage.getItem('post')) })
  }
  
  render() {
    let postContent = []

    let { subsections } = this.state.post

    subsections.map( (subsection) => {
      postContent.push(
        <div className='subsection'>
          <div className='subsection-title'>
            {subsection.subsection_title}
          </div>
          <div className='subsection-description'>
            {subsection.subsection_description}
          </div>
          
          <div className='subsection-image'>

            {subsection.subsection_image ? <img src={subsection.subsection_image}/> : null}  
            
          
          </div>
        </div>
      )
    })

    return (
      <div className="mdivD">
        <div className="logoD">
          <img className="headImageD" src = {HeaderLogo}></img>
          <img className="stripes-image-blog" src= {PaymentsGraphics}></img>
        </div>
        <span className="gobackSpan"><a href="/blog">Go Back</a></span>
          <div className="contentdivD">
            <div>
              <h1 className='blog-title'> { this.state.post.title } </h1>
              <h3 className='blog-date'>{ this.state.post.date }</h3>
            </div>
            <div className='subsection-description subsection'>
              <p>{ this.state.post.short_description }</p>
            </div>
            { postContent }
        </div>
      </div>
    )
  }
}


export default DesktopBlogPost