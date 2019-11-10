import React from 'react'
import Header from '../Components/Header';
import ButtonExtended from '../Components/ButtonExtended';

import './MobileBlogs.css'

class MobileBlogPost extends React.Component {

  state={
    post: {}
  }

  componentWillMount(){
    this.setState({ post : JSON.parse(localStorage.getItem('post')) })
  }
  
  

  render(){

    let postContent = []

    let { subsections } = this.state.post

    subsections.map( (subsection) => {
      postContent.push(
        <div className='content'>
          <div className='blog-subsection-title'>
            {subsection.subsection_title}
          </div>
          <div className='blog-subsection-description'>
            {subsection.subsection_description}
          </div>
          
          <div className='subsection-image'>

            {subsection.subsection_image ? <img src={subsection.subsection_image}/> : null}  
            
          
          </div>
        </div>
      )
    })

    return(
      <div>
        <Header />
          <div className='spacer'></div>
          <ButtonExtended name='BLOG' color='#A3D6CE' />
          <span className='span-goback'><a href='/blog-m'>Go Back</a></span>
          <div className='blog-meta'>
            <h1 className='blog-title-m'> { this.state.post.title } </h1>
            <h3 className='blog-date-m'>{ this.state.post.date }</h3>
          </div>
          { postContent }
      </div>
    )
  }
}


export default MobileBlogPost;