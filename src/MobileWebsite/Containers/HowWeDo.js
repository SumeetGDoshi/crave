import React from 'react'
import ButtonExtended from '../Components/ButtonExtended';
import Accordian from '../Components/Accordian';

import '../Components/Components.css';


class HowWeDo extends React.Component {

  constructor(props){
    super(props);
    this.list = [
      { 
        name: "Content Strategy", 
        title: "Content Strategy", 
        hasText: true,
        parag: "Our cycle begins with an internal brainstorming through which we understand your brand’s values and vision to devise the most genuine social media strategy for you.", 
        iconName: "ballot",
        
      },
      {   
        name: "Photography", 
        title: "Photography",
        hasText: true, 
        parag: "In order to bring the strategy to life we conduct photoshoots every month. These are scheduled in advance keeping your convenience in mind.", 
        iconName: "photo_camera"
      },
      {   
        name: "Graphic Design", 
        title: "Graphic Design",
        hasText: true, 
        parag: "Our talented team of graphic designers adds the zing to take your content to the next level. Whether it’s an illustration, animation, gif or stop motion- we’ve got you covered.", 
        iconName: "graphic_eq"
      },
      {   name: "Surveillance", 
          title: "Surveillance",
          hasText: true, 
          parag: "Replying to every comment, review and direct message can be quite tedious. Leave it to us to make sure your followers feel connected with you at all times.", 
          iconName: "textsms"
      },
      {   
        name: "InfluencerMarketing", 
        title: "Influencer Marketing",
        hasText: true, 
        parag: "Influencers have the power to influence your brand’s perception and help you reach a wider audience. We help you reach them.", 
        iconName: "group_add"
      },
      {   
        name: "Ads", 
        title: "Ad Management",
        hasText: true, 
        parag: "We help you create and manage sponsored content on Instagram and Facebook to ensure maximum engagement and conversions.", 
        iconName: "speaker_phone"
      },
      {   
        name: "Analytics", 
        title: "Analytics",
        hasText: true, 
        parag: "At the end of every month, we send you a report detailing all the traction across your social media platforms. This allows you to check on the progress we've made, and allows us to get a better idea of what strategies work best for your brand.", 
        iconName: "show_chart"
      }
  ]
  }

  render(){
    return(
      <div style={this.props.style} className="howdowedo">
        <ButtonExtended name='HOW DO WE DO IT?' iconName='chevron_right' color='#E6CE57'/>
          <section className='segment_body'>
              We offer the following services that work together as a monthly cycle:
          </section>
          <section>
              <Accordian list={ this.list } background="#E6CE57" textColor="#fff" border="#E6CE57" />
          </section>
      </div>
    )
  }
}

export { HowWeDo };