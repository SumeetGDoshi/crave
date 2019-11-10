import React, { Component } from "react";
import AOS from "aos";
import ReactCardFlip from "react-card-flip";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import scrollToComponent from "react-scroll-to-component";

import { validate } from "email-validator";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Form from "./Form";

import "aos/dist/aos.css";
import mainImg from "./assets/page1/CraveUnit-01.png";
import logo from "./assets/page1/CraveLogo-01.png";
import footerLogo from "./assets/page7/footer_logo.png";
import sendButton from "./assets/page1/SubscribeforNewletterArrow-01.png";
// Import Background
import Background from "./assets/Background.svg";
import closeIcon from "./assets/form/Closing_Icon.png";
import mobileMenu from "./assets/mobile_menu.png";
import mobileMenuClose from "./assets/mobile_menu_close.png";

// Import Packages Images
import package500 from "./assets/page3/500EuroMonth.png";
import package500flip from "./assets/page3/500EuroMonth_Back.png";
import package750 from "./assets/page3/750EuroMonth.png";
import package750flip from "./assets/page3/750EuroMonth-Back.png";
import package1000 from "./assets/page3/1000EuroMonth.png";
import package1000flip from "./assets/page3/1000EuroMonth-Back.png";
import packageCustom from "./assets/page3/CustomPackage.png";
import packageCustomFlip from "./assets/page3/CustomPackage-Back.png";
// Import Quality meets affordability
import qualityImg from "./assets/page4/QualityMeets.png";
import affordabilityImg from "./assets/page4/Affordability.png";
// Import Outsourcing assets
import bridge from "./assets/page5/bridge-with-text2.png";
import our_bot from "./assets/page7/bot_page.png";
import agencyBreakdown from "./assets/page5/agencyBreakdown.png";
import hangingPage1 from "./assets/page5/HangingPage1.png";
import hangingPage2 from "./assets/page5/HangingPage2.png";
import hangingPage3 from "./assets/page5/HangingPage3.png";
// Import Our Bot Assets
import botIcon1 from "./assets/page6/ServicesettingsIcon.png";
import botIcon2 from "./assets/page6/DollarIcon.png";
import botIcon3 from "./assets/page6/ReducePricesIcon.png";
import botIcon4 from "./assets/page6/ClientServiceIcon.png";
import progressIcon from "./assets/page6/ProgressIcon.png";
import botDiagram from "./assets/page6/bot-diagram.png";
import botWithLinks from "./assets/page6/bot-with-layers.png";
import ourBotSmallBusinesses from "./assets/page6/bot-page_elements_0018_small-business.png";
import ourBotPhotography from "./assets/page6/bot-page_elements_0019_photographer.png";
import ourBotInfluences from "./assets/page6/bot-page_elements_0017_influencer.png";
import ourBotContentCreators from "./assets/page6/bot-page_elements_0021_content-creators.png";
import ourBotGraphicDesigners from "./assets/page6/bot-page_elements_0020_designer-copy.png";
import spagiStreamlinesIcon from "./assets/page6/bot-page_elements_0008_streamline.png";
import spagiQualityIcon from "./assets/page6/bot-page_elements_0006_quality.png";
import spagiAutomatesIcon from "./assets/page6/bot-page_elements_0007_automate.png";
import spagiArrowIcon from "./assets/page6/bot-page_elements_0015_arrow1.png";

// Import Footer Image
import footer from "./assets/page7/Footer.png";
import facebookIcon from "./assets/page7/FooterFacebookIcon-01-01.png";
import twitterIcon from "./assets/page7/FooterTwitterIcon-01.png";
import instaIcon from "./assets/page7/FooterInstagram-01.png";
// Import Services Images
import monthlyCycleOutline from "./assets/page2/MonthlyCycle_Outline.png";
import monthlyCycleYellow from "./assets/page2/MonthlyCycle_Yellow.png";
import servicesCircle from "./assets/page2/ServicesCircle.png";

// Work
import Work from "./assets/page7/WorkPage-01.png";
import MonarchOne from "./assets/page7/Monarch1-01.png";
import MonarchOneLogo from "./assets/work/monarch.png";
import MonarchGrid from "./assets/work/Monarch_grid.jpg";
import TheModelBookGrid from "./assets/work/modelbook-1-03.png";
import TheModelBookLogo from "./assets/work/the_model_book_logo.jpg";
import RedBullLogo from "./assets/work/red_bull_logo.jpg";
import RedBullGrid from "./assets/work/red_bull_grid.jpg";
import GraysonGrid from "./assets/work/grayson_grid.jpg";
import GraysonLogo from "./assets/work/grayson_logo.png";
import MonarchTwo from "./assets/page7/Monarch2-01-01.png";
import ViewAll from "./assets/page7/ViewAll-01.png";

// Import work Logos
import logo1 from "./assets/work/Mp_Logo.png";
import logo2 from "./assets/work/moms.png";
import logo3 from "./assets/work/monarch.png";
import logo4 from "./assets/work/modelBook.png";
import logo5 from "./assets/work/red_bull.png";
import logo6 from "./assets/work/grayson_logo.png";

// import business types card
import usBusinessCard from "./assets/form/US_Business.png";
import indianBusinessCard from "./assets/form/Indian_Business.png";
import applicantsBusinessCard from "./assets/form/Applicants.png";
import influencerBusinessCard from "./assets/form/Influencer.png";

import { StripeProvider } from 'react-stripe-elements';

import "./App.css";

const customStyles = {
  content: {
    top: "20%",
    bottom: "20%",
    left: "16%",
    right: "16%",
    padding: 0,
    display: "flex",
    alignItems: "center",
    borderRadius: "8px"
  }
};

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};
class MonarchLeft extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={MonarchOneLogo} className="work-card-image-top" alt="img" />
          <div className="work-card-text">
            Monarch is a stylish rooftop bar & lounge that offers unbeatable
            views and premium table service. Picked out particularly styled
            shots to create a theme that takes the audience from bright day-time
            shots to a lively nightlife rooftop bar.
          </div>
        </div>
      </div>
    );
  }
}

class MonarchCenter extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={MonarchGrid} className="work-card-grid" alt="img" />
        </div>
      </div>
    );
  }
}

class MonarchRight extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={MonarchOneLogo} className="work-card-image-top" alt="img" />
          <div className="work-card-text line-break">
            17 influencer collaborations
            <br />
            <br />
            Total reach of over 621k
            <br />
            <br />
            Engagement of over 18k on their content
          </div>
        </div>
      </div>
    );
  }
}

class TheModalBookLeft extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img
            src={TheModelBookLogo}
            className="work-card-image-top"
            alt="img"
          />
          <div className="work-card-text">
            “Crave planned and executed a social media strategy for us that made
            us go viral. They helped us gain traction from the day of our
            launch, and have been very efficient since. We love working with
            them” - Alison, Founder
          </div>
        </div>
      </div>
    );
  }
}

class TheModalBookCenter extends Component {
  render() {
    return (
      <div className="work work-center">
        <div className="card">
          <img src={TheModelBookGrid} className="work-card-grid" alt="img" />
        </div>
      </div>
    );
  }
}

class TheModalBookRight extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img
            src={TheModelBookLogo}
            className="work-card-image-top"
            alt="img"
          />
          <div className="work-card-text line-break">
            We launched The Model Book on social media with a successful
            campaign called #themodelfacechallenge that got over 300 postings,
            23 Influencer Collaborations and a 27m+ overall reach across IG!
          </div>
        </div>
      </div>
    );
  }
}

class GraySonLeft extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={GraysonLogo} className="work-card-image-top" alt="img" />
          <div className="work-card-text">
            “Crave has been a huge asset to the marketing and promotion of our
            bar. They handle everything from social media, customer engagement,
            influencers and even photo-shoots for our pages. They are very hands
            on, always available, and make sure our socials are operating at top
            potential at all times” - LeAnn, General Manager
          </div>
        </div>
      </div>
    );
  }
}

class GraySonCenter extends Component {
  render() {
    return (
      <div className="work work-center">
        <div className="card">
          <img src={GraysonGrid} className="work-card-grid" alt="img" />
        </div>
      </div>
    );
  }
}
class GraySonRight extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={GraysonLogo} className="work-card-image-top" alt="img" />
          <div className="work-card-text line-break">
            Influencer collaborations: 14 Total influencer reach: 649k Overall
            engagement through influencers: 29k likes, 201k views and 670
            comments
          </div>
        </div>
      </div>
    );
  }
}

class RedBullLeft extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={RedBullLogo} className="work-card-image-top" alt="img" />
          <div className="work-card-text">
            We have also organized influencer events. #BrunchBeat was one such
            event, in collaboration with Red Bull and Indie Fork.
          </div>
        </div>
      </div>
    );
  }
}

class RedBullCenter extends Component {
  render() {
    return (
      <div className="work work-center">
        <div className="card">
          <img src={RedBullGrid} className="work-card-grid" alt="img" />
        </div>
      </div>
    );
  }
}
class RedBullRight extends Component {
  render() {
    return (
      <div className="work">
        <div className="card">
          <img src={RedBullLogo} className="work-card-image-top" alt="img" />
          <div className="work-card-text line-break">
            Crave was responsible for inviting all influencers and managed to
            get 65 to attend, with a combined reach of 5.2m! 300 photos were
            posted on IG with the hashtag #BrunchBeat on Instagram!
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    this.work_stats = {
      clients: { count: 25, has_plus: true },
      total_reach_on_ig: { count: 40000000, has_plus: false },
      influencer_collabs: { count: 190, has_plus: false },
      influencer_reach: { count: 7900000, has_plus: false },
      creators: { count: 20, has_plus: true },
      photographers: { count: 50, has_plus: true },
      creators: { count: 250, has_plus: true }
    };
    this.state = {
      isFlipped1: false,
      isFlipped2: false,
      isFlipped3: false,
      isFlipped4: false,
      isModalOpen: false,
      isWorkModalOpen: false,
      contactStep: 0, // Step 0 for displaying types of contact and 1 for showing it's form
      contactType: 0,
      email: "",
      showMenu: !window.mobilecheck(),
      emailError: false,
      work_stats: {
        clients: { count: 0, has_plus: true },
        total_reach_on_ig: { count: 0, has_plus: false },
        influencer_collabs: { count: 0, has_plus: false },
        influencer_reach: { count: 0, has_plus: false },
        creators: { count: 0, has_plus: true },
        photographers: { count: 0, has_plus: true },
        creators: { count: 0, has_plus: true }
      },
      popupModalOverlayClass: "closed"
    };
    this.numberOfCallbacks = 0;
    this.animateCountsInterval = undefined;
  }
  componentDidMount() {
    let self = this;
    let animateCountsInterval = undefined;
    window.addEventListener("scroll", function(e) {
      if (
        self.isInViewport(document.getElementsByClassName("work-section")[0])
      ) {
        // var numberOfCallbacks = 0;
        if (typeof self.animateCountsInterval == "undefined") {
          self.animateCountsInterval = setInterval(
            self.animateCountIntervalCallback,
            100,
            self
          );
        }
      }
    });
  }

  componentWillMount

  animateCountIntervalCallback = appScope => {
    if (appScope.numberOfCallbacks++ > 24) {
      clearInterval(appScope.animateCountsInterval);
      return;
    }
    // this.setState({
    //   work_stats: {}
    // });
    appScope.setState({
      work_stats: {
        clients: {
          count:
            appScope.state.work_stats.clients.count +
            appScope.work_stats.clients.count / 25,
          has_plus: true
        },
        total_reach_on_ig: {
          count:
            appScope.state.work_stats.total_reach_on_ig.count +
            appScope.work_stats.total_reach_on_ig.count / 25,
          has_plus: false
        },
        influencer_collabs: {
          count:
            appScope.state.work_stats.influencer_collabs.count +
            appScope.work_stats.influencer_collabs.count / 25,
          has_plus: false
        },
        influencer_reach: {
          count:
            appScope.state.work_stats.influencer_reach.count +
            appScope.work_stats.influencer_reach.count / 25,
          has_plus: false
        },
        creators: {
          count:
            appScope.state.work_stats.creators.count +
            appScope.work_stats.creators.count / 25,
          has_plus: true
        },
        photographers: {
          count:
            appScope.state.work_stats.photographers.count +
            appScope.work_stats.photographers.count / 25,
          has_plus: true
        },
        creators: {
          count:
            appScope.state.work_stats.creators.count +
            appScope.work_stats.creators.count / 25,
          has_plus: true
        }
      }
    });
  };
  formatStatNumbers = statObject => {
    let number = Math.round(statObject.count);
    let add_plus = statObject.has_plus;
    let points_after_decimal = 1;
    var SI_SYMBOL = ["", "k", "m", "G", "T", "P", "E"];

    // what tier? (determines SI symbol)
    var tier = (Math.log10(number) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number + (add_plus ? "+" : "");

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;
    if (scaled % 10 == 0) {
      points_after_decimal = 0;
    }
    // format number and add suffix
    return (
      scaled.toFixed(points_after_decimal) + suffix + (add_plus ? "+" : "")
    );
  };

  componentWillMount() {
    AOS.init({ duration: 1000 });
  }

  openModal = () => {
    const { email } = this.state;
    this.setState({ isModalOpen: true });
  };
  openModalFreeTrial = () => {
    // debugger;
    window.fbq("track", "ClickFreeTrial", {
      timeClicked: new Date().getTime()
    });
    const { email } = this.state;
    this.setState({ isModalOpen: true, contactStep: 1, contactType: 4 });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
      isWorkModalOpen: false,
      contactStep: 0
    });
  };

  changePopupModalClass = popupClass => {
    this.setState({
      popupModalOverlayClass: popupClass
    });
  };

  changePopupModalTexts = (headerText = "", bodyText = "") => {
    this.setState({
      popupModalTitle: headerText,
      popupModalBody: bodyText
    });
  };

  isInViewport = el => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  };
  clickContactCard = type => {
    this.setState({
      contactStep: 1,
      contactType: type
    });
  };
  updateEmail = e => {
    this.setState({
      email: e.target.value,
      emailError: e.target.value.length === 0
    });
  };
  toggleMenu = () => {
    window.mobilecheck() &&
      this.setState({
        showMenu: !this.state.showMenu
      });
  };
  render() {
    const menuVis = this.state.showMenu
      ? "slide-in slide-in-slide"
      : "slide-in slide-in-hidden";
    return (
      <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">

      <div className="root-div">
        <ReactTooltip />

        <nav className="sticky">
          <div className="nav-ribbon">
            <div className="logo-name">
              <img
                src={process.env.PUBLIC_URL + "/CraveLogo-01.png"}
                className="name"
                alt="name"
              />
            </div>
            <div
              className={
                "mobile mobbile-menu float-right hamburger " +
                (this.state.showMenu ? "hamburger-open" : "hamburger-close")
              }
              onClick={this.toggleMenu}
            >
              <div />
            </div>
          </div>
          <ul onClick={this.toggleMenu} className={"menulist " + menuVis}>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={() =>
                scrollToComponent(this.Violet, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
            >
              HOME
            </li>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={() =>
                scrollToComponent(this.Services, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
            >
              SERVICES
            </li>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={() =>
                scrollToComponent(this.Packages, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
            >
              PACKAGES
            </li>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={() =>
                scrollToComponent(this.Outsourcing, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
            >
              OUTSOURCING
            </li>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={() =>
                scrollToComponent(this.OurBot, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
            >
              OUR MODEL
            </li>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={() =>
                scrollToComponent(this.Work, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
            >
              WORK
            </li>
            <li
              style={{
                cursor: "pointer"
              }}
              onClick={this.openModal}
            >
              CONTACT US
            </li>
          </ul>
        </nav>

        <div className="top-text">
          <p>
            <b>A Social Media Solution You Can Trust And Afford</b>
          </p>
          <p className="para-1">
            Crave isn't an agency or an impersonal internet service. We're a
            start up that's broken down what it takes to create a solution that
            genuinely adds value and is also affordable.
          </p>
          <p className="para-1">
            We're our own combination of streamlined content creation,
            outsourcing to Mumbai, software automation, artificial intelligence,
            photography, influencer marketing and more.
          </p>
          <p style={{ marginTop: "30px" }}>
            <b>There's no place like Crave. Welcome</b>
          </p>
          <div className="email-section">
            <a
              alt="img"
              className="crave-btn-pure free-trial-btn"
              onClick={this.openModalFreeTrial}
            >
              Request A Free Trial
            </a>
          </div>
        </div>
        <img className="main-img" src={mainImg} alt="mainimg" />
        {/* Services Section */}

        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <section
            ref={section => {
              this.Services = section;
            }}
            style={{
              paddingTop: "40px"
            }}
          >
            <p className="services-text">SERVICES</p>
            <div className="services-div">
              <img src={servicesCircle} className="services-circle" alt="img" />
              <img
                src={monthlyCycleOutline}
                onMouseEnter={e => (e.currentTarget.src = monthlyCycleYellow)}
                onMouseLeave={e => (e.currentTarget.src = monthlyCycleOutline)}
                className="services-hover-img"
                alt="img"
              />
            </div>
          </section>
          {/* Packages Section */}
          <section
            ref={section => {
              this.Packages = section;
            }}
          >
            <p className="packages-text">PACKAGES</p>
            <div className="yellow-line" />
            <div className="package-cards-div">
              <div className="package-card">
                <ReactCardFlip
                  isFlipped={this.state.isFlipped1}
                  flipSpeedBackToFront="0.3"
                  flipSpeedFrontToBack="0.3"
                >
                  <span
                    key="front"
                    onMouseEnter={() => this.setState({ isFlipped1: true })}
                    onMouseLeave={() =>
                      this.isFlipped1 ? this.setState({ isFlipped1: false }) : 3
                    }
                  >
                    <img src={package500} className="package-card" alt="img" />
                  </span>
                  <span
                    key="back"
                    onMouseEnter={() =>
                      this.setState({ isFlipped1: !window.mobilecheck() })
                    }
                    onMouseLeave={() => this.setState({ isFlipped1: false })}
                  >
                    <img
                      src={package500flip}
                      className="package-card"
                      alt="img"
                    />
                  </span>
                </ReactCardFlip>
              </div>
              <div className="package-card">
                <ReactCardFlip
                  isFlipped={this.state.isFlipped2}
                  flipSpeedBackToFront="0.3"
                  flipSpeedFrontToBack="0.3"
                >
                  <span
                    key="front"
                    onMouseEnter={() => this.setState({ isFlipped2: true })}
                    onMouseLeave={() =>
                      this.isFlipped2 ? this.setState({ isFlipped2: false }) : 3
                    }
                  >
                    <img src={package750} className="package-card" alt="img" />
                  </span>
                  <span
                    key="back"
                    onMouseEnter={() =>
                      this.setState({ isFlipped2: !window.mobilecheck() })
                    }
                    onMouseLeave={() => this.setState({ isFlipped2: false })}
                  >
                    <img
                      src={package750flip}
                      className="package-card"
                      alt="img"
                    />
                  </span>
                </ReactCardFlip>
              </div>
              <div className="package-card">
                <ReactCardFlip
                  isFlipped={this.state.isFlipped3}
                  flipSpeedBackToFront="0.3"
                  flipSpeedFrontToBack="0.3"
                >
                  <span
                    key="front"
                    onMouseEnter={() => this.setState({ isFlipped3: true })}
                    onMouseLeave={() =>
                      this.isFlipped3 ? this.setState({ isFlipped3: false }) : 3
                    }
                  >
                    <img src={package1000} className="package-card" alt="img" />
                  </span>
                  <span
                    key="back"
                    onMouseEnter={() =>
                      this.setState({ isFlipped3: !window.mobilecheck() })
                    }
                    onMouseLeave={() => this.setState({ isFlipped3: false })}
                  >
                    <img
                      src={package1000flip}
                      className="package-card"
                      alt="img"
                    />
                  </span>
                </ReactCardFlip>
              </div>
              <div className="package-card">
                <ReactCardFlip
                  isFlipped={this.state.isFlipped4}
                  flipSpeedBackToFront="0.3"
                  flipSpeedFrontToBack="0.3"
                >
                  <span
                    key="front"
                    onMouseEnter={() => this.setState({ isFlipped4: true })}
                    onMouseLeave={() =>
                      this.isFlipped4 ? this.setState({ isFlipped4: false }) : 3
                    }
                  >
                    <img
                      src={packageCustom}
                      className="package-card"
                      alt="img"
                    />
                  </span>
                  <span
                    key="back"
                    onMouseEnter={() =>
                      this.setState({ isFlipped4: !window.mobilecheck() })
                    }
                    onMouseLeave={() => this.setState({ isFlipped4: false })}
                  >
                    <img
                      src={packageCustomFlip}
                      className="package-card"
                      alt="img"
                    />
                  </span>
                </ReactCardFlip>
              </div>
            </div>
          </section>
          {/* Quality Meets Affordability Section */}
          <section className="quality-meets-div">
            <img
              className="quality-meets-img quality-img"
              src={qualityImg}
              alt="qualityImage"
            />
            <img
              className="quality-meets-img affordability-img"
              src={affordabilityImg}
              alt="affordabilityimage"
            />
          </section>
          {/* Outcourcing section */}
          <section
            className="outsourcing-section"
            ref={section => {
              this.Outsourcing = section;
            }}
          >
            <img src={bridge} className="bridge-img" alt="bridge" />
          </section>
        </div>
        {/* Our bot (HOW WE’RE ORGANIZING SOCIAL MEDIA
) section */}
        {/* <section
          className="our-bot-section"
          ref={section => {
            this.OurBot = section;
          }}
        >
          <img src={our_bot} className="bridge-img" alt="our bot" />
        </section> */}
        <section
          className="our-bot-section"
          ref={section => {
            this.OurBot = section;
          }}
        >
          <div className="our-bot heading-description-wrapper">
            <div className="our-bot heading">OUR MODEL</div>
            <div className="our-bot description">
              We're organizing the whole social media marketing industry for
              small businesses.
              <br />
              We noticed that almost every small business today needs social
              media marketing and yet there aren't any solutions that are both
              affordable and genuinely add value.
              <br />
              At the same time we saw that the market is actually full of
              content creators, photographers, graphic designers, influencers
              and others needed to do social media marketing the right way.
              <br />
              What were doing is aggregating the market, connecting small
              businesses with the best of these already available pools of
              talent, putting them in processes regulated by software and
              manually quality check every single piece of content that goes
              out.
            </div>
          </div>
          <div className="our-bot bot-diagram">
            <div className="our-bot entities">
              <div className="entity">
                <div className="entity-description">SMALL BUSINESSES</div>
                <div className="entity-image">
                  <img src={ourBotSmallBusinesses} alt="" />
                </div>
              </div>
              <div className="entity">
                <div className="entity-description">PHOTOGRAPHY</div>
                <div className="entity-image">
                  <img src={ourBotPhotography} alt="" />
                </div>
              </div>
              <div className="entity">
                <div className="entity-description">INFLUENCERS</div>
                <div className="entity-image">
                  <img src={ourBotInfluences} alt="" />
                </div>
              </div>
              <div className="entity">
                <div className="entity-description">CONTENT CREATORS</div>
                <div className="entity-image">
                  <img src={ourBotContentCreators} alt="" />
                </div>
              </div>
              <div className="entity">
                <div className="entity-description">GRAPHIC DESIGNERS</div>
                <div className="entity-image">
                  <img src={ourBotGraphicDesigners} alt="" />
                </div>
              </div>
            </div>
            <div className="bot-image">
              <img src={botWithLinks} alt="our bot" />
            </div>
          </div>

          <div className="spagi-details-container">
            <div class="spagi-description">
              Crave's data driven model <span className="highlight">SPAGI</span>{" "}
              (Survellience, Photography, Ads, Graphic Design and Influencer
              Marketing) <br />
              will be the most efficient system that:
            </div>
            <div className="spagi-diagram">
              <div className="spagi-diagram-tile spagi-diagram-left">
                <div className="spagi-diagram-image">
                  <img src={spagiStreamlinesIcon} />
                </div>
                <div className="spagi-diagram-text">
                  <span className="highlight">Streamlines</span> all our
                  services to work in an auto-pilot cycle
                </div>
              </div>
              <div className="spagi-diagram-arrow">
                <img src={spagiArrowIcon} />
              </div>
              <div className="spagi-diagram-tile spagi-diagram-center">
                <div className="spagi-diagram-image">
                  <img src={spagiQualityIcon} />
                </div>
                <div className="spagi-diagram-text">
                  <span className="highlight">Allows</span> the core team to
                  keep constant checks on the quality of content through regular
                  automated and manual ratings and feedback forms.
                </div>
              </div>
              <div className="spagi-diagram-arrow">
                <img src={spagiArrowIcon} />
              </div>
              <div className="spagi-diagram-tile spagi-diagram-right">
                <div className="spagi-diagram-image">
                  <img src={spagiAutomatesIcon} />
                </div>
                <div className="spagi-diagram-text">
                  <span className="highlight">Automates</span> reminders,
                  coordination and scheduling using in-house software solutions
                </div>
              </div>
            </div>
            <div class="clear" />
            <div className="spagi-description-footer">
              <div className="spagi-description-footer-top">
                SPAGI has upto{" "}
                <span className="highlight">150 data points</span> for each
                content creator.
              </div>
              <div className="spagi-description-footer-bottom">
                Every month, the content creator will be rated on their content,
                communication and overall work ethic. These ratings will then be
                automated to generate a score, on the basis of which the salary
                for each content creator will be calculated
              </div>
            </div>
          </div>
        </section>
        {/* Our Work Section */}
        <section
          className="work-section"
          ref={section => {
            this.Work = section;
          }}
        >
          {/* <p className="bot-heading">WORK</p>
          <p className="f25 center margin-top-10">
            <b>CLIENTS WORKED WITH : 25+</b>
          </p>
          <p className="f25 center">
            <b>CREATORS WORKED WITH: 250+</b>
          </p>
          <p className="f25 center">
            <b>TOTAL REACH: 40M</b>
          </p> */}
          <p className="bot-heading">WORK</p>
          <div className="work-stats-container">
            <div className="work-stat">
              <div className="work-stat-description">CLIENTS WORKED WITH</div>
              <div className="work-stat-number">
                {this.formatStatNumbers(this.state.work_stats.clients)}
              </div>
            </div>

            <div className="work-stat">
              <div className="work-stat-description">TOTAL REACH</div>
              <div className="work-stat-number">
                {this.formatStatNumbers(
                  this.state.work_stats.total_reach_on_ig
                )}
              </div>
            </div>

            <div className="work-stat">
              <div className="work-stat-description">CREATORS WORKED WITH</div>
              <div className="work-stat-number">
                {this.formatStatNumbers(this.state.work_stats.creators)}
              </div>
            </div>
          </div>
          <div className="work-images">
            <Slider autoplay="5000">
              {window.mobilecheck()
                ? [
                    <div style={{ display: "flex" }}>
                      <MonarchLeft />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <MonarchCenter />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <MonarchRight />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <TheModalBookLeft />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <TheModalBookCenter />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <TheModalBookRight />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <RedBullLeft />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <RedBullCenter />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <RedBullRight />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <GraySonLeft />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <GraySonCenter />
                    </div>,
                    <div style={{ display: "flex" }}>
                      <GraySonRight />
                    </div>
                  ]
                : [
                    <div style={{ display: "flex" }}>
                      <MonarchLeft />
                      <MonarchCenter />
                      <MonarchRight />
                    </div>,

                    <div style={{ display: "flex" }}>
                      <TheModalBookLeft />
                      <TheModalBookCenter />
                      <TheModalBookRight />
                    </div>,

                    <div style={{ display: "flex" }}>
                      <RedBullLeft />
                      <RedBullCenter />
                      <RedBullRight />
                    </div>,

                    <div style={{ display: "flex" }}>
                      <GraySonLeft />
                      <GraySonCenter />
                      <GraySonRight />
                    </div>
                  ]}
            </Slider>
            {/*                    <div className="work">
                <img src={MonarchOne} className="work-slider-image" alt="img" />
              </div>
              <div className="work-center">
                <img src={Work} className="work-slider-image" alt="img" />
              </div>
              <div className="work">
                <img src={MonarchTwo} className="work-slider-image" alt="img" />
              </div>*/}
          </div>
          <div style={{ position: "relative" }}>
            <a
              alt="img"
              className="crave-btn"
              href="https://drive.google.com/open?id=1nWb3IjrfIQ0lgi4phFNVulEJEgpkRNwx"
              target="_blank"
            >
              View Work Deck
            </a>
          </div>
        </section>
        {/* Footer */}
        <footer
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            marginTop: "40px",
            padding: "1%"
          }}
        >
          <div className="footer-logo">
            <img src={footerLogo} />
          </div>
          <ul
            style={{
              color: "white",
              textAlign: "center"
            }}
          >
            <li
              onClick={() =>
                scrollToComponent(this.Violet, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
            >
              HOME
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Services, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
            >
              SERVICES
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Packages, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
            >
              PACKAGES
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Violet, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
            >
              OUTSOURCING
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Work, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
            >
              WORK
            </li>
            <li onClick={this.openModal}>CONTACT US</li>
            <li className="social-icons-container">
              <a
                href="http://www.facebook.com/cravesocialmedia"
                target="_blank"
              >
                <img src={facebookIcon} className="social-icons" alt="name" />
              </a>
              <a href="http://www.instagram.com/crave.social" target="_blank">
                <img src={instaIcon} className="social-icons" alt="name" />
              </a>
            </li>
          </ul>
          <div className="clear" />
          <div className="footer-copyright-text">
            @2018 CRAVE. ALL RIGHTS RESERVED
          </div>
        </footer>
        {/* Here is the code for modal */}
        <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.openModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            src={closeIcon}
            alt="close"
            className="close-icon"
            onClick={this.closeModal}
          />
          {this.state.contactStep === 0 ? (
            <div className="contact-card-div">
              <img
                className="business-card"
                src={usBusinessCard}
                alt="img"
                onClick={() => this.clickContactCard(0)}
              />
              <img
                className="business-card"
                src={indianBusinessCard}
                alt="img"
                onClick={() => this.clickContactCard(1)}
              />
              <img
                className="business-card"
                src={applicantsBusinessCard}
                alt="img"
                onClick={() => this.clickContactCard(2)}
              />
              <img
                className="business-card"
                src={influencerBusinessCard}
                alt="img"
                onClick={() => this.clickContactCard(3)}
              />
              {/* <div className="contact-card" onClick={() => this.clickContactCard(0)}>US BUSINESSES</div>
                <div className="contact-card" onClick={() => this.clickContactCard(1)}>INDIAN BUSINESSES</div>
                <div className="contact-card" onClick={() => this.clickContactCard(2)}>APPLICANTS</div>
                <div className="contact-card" onClick={() => this.clickContactCard(3)}>INFLUENCER</div> */}
            </div>
          ) : (
            <Form
              type={this.state.contactType}
              close={this.closeModal}
              email={this.state.email}
              changeModalClass={this.changePopupModalClass}
              changeModalTexts={this.changePopupModalTexts}
            />
          )}
        </Modal>
        <Modal
          isOpen={this.state.isWorkModalOpen}
          onAfterOpen={this.openModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div>
              <Link to="/client/0" target="_blank">
                <img src={logo1} alt="logo" className="work-logos" />
              </Link>
              <Link to="/client/1" target="_blank">
                <img src={logo2} alt="logo" className="work-logos" />
              </Link>
              <Link to="/client/2" target="_blank">
                <img src={logo3} alt="logo" className="work-logos" />
              </Link>
            </div>
            <div>
              <Link to="/client/3" target="_blank">
                <img src={logo4} alt="logo" className="work-logos" />
              </Link>
              <Link to="/client/4" target="_blank">
                <img src={logo5} alt="logo" className="work-logos" />
              </Link>
              <Link to="/client/5" target="_blank">
                <img src={logo6} alt="logo" className="work-logos" />
              </Link>
            </div>
          </div>
        </Modal>
        <div
          className={"overlay " + this.state.popupModalOverlayClass}
          onClick={() => {
            this.changePopupModalClass("closed");
          }}
        >
          <div
            className={"modal popup-modal " + this.state.popupModalOverlayClass}
            id="modal1"
          >
            <div className="content">
              <h1 className="title">{this.state.popupModalTitle}</h1>
              <p>{this.state.popupModalBody}</p>
              <a
                className="btn close-modal"
                data-modal="#modal1"
                href="#"
                onClick={() => {
                  this.changePopupModalClass("closed");
                }}
              >
                Okay
              </a>
            </div>
          </div>
        </div>
      </div>
      </StripeProvider>
    );
  }
}

export default App;
