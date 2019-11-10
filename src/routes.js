import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './App';
import Client from './Client'
import SignUp from './signUp';
import LoginPage from './loginPage';
import Packages from './packages';
import MobileWebsite from './MobileWebsite/MobileWebsite';
import Referrals from './MobileWebsite/Referrals';
import TermsCondition from "./MobileWebsite/Components/TermsCondition";
import CompanyDetails from "./MobileWebsite/Components/CompanyDetails"
import DesktopWebsite from "./DesktopWebSite/DesktopWebsite";
import MobilePayment from "./MobileWebsite/Containers/MobilePayment";
import DesktopPayment from "./DesktopWebSite/DesktopPayment";
import MobileCareers from "./MobileWebsite/Containers/MobileCareers";
import MObileCareersDetails from "./MobileWebsite/Containers/MobileCareersDetails";
import DesktopCareersDetails from "./DesktopWebSite/DesktopCareersDetails";
import DesktopCareers from './DesktopWebSite/DesktopCareers';
import DesktopBlogs from './DesktopWebSite/DesktopBlogs'
import DesktopBlogPost from './DesktopWebSite/DesktopBlogPost'
import MobileBlogList from "./MobileWebsite/Containers/MobileBlogList";
import MobileBlogPost from "./MobileWebsite/Containers/MobileBlogPost";
import Press from './MobileWebsite/Containers/Press'
import Freetrail from "./DesktopWebSite/Freetrail";
import { FreeTrailM } from "./MobileWebsite/Freetrail";
import { isMobile } from "./utils";
import { TermsandCondition } from "./DesktopWebSite/TermsandCondition";
import { Policy } from "./DesktopWebSite/Policy";


const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/client/:id" component={Client} />
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/packages" component={Packages}/>
      <Route path="/mobile" component={MobileWebsite}/>
      <Route path="/referals" component={Referrals}/>
      {/* <Route path="/companydetails" component={CompanyDetails}/>
      <Route path="/termscondition" component={TermsCondition}/> */}
      <Route path="/desktop" component={DesktopWebsite}/>
      <Route path="/MobilePayment" component={MobilePayment}/>
      <Route path="/DesktopPayment" component={DesktopPayment}/>
      <Route path="/mobile-careers" component={MobileCareers}/>
      <Route path="/mobile-careers-details" component={MObileCareersDetails}/> 
      <Route path="/careers-details" component={DesktopCareersDetails}/>
      <Route path="/careers" component={DesktopCareers}/>
      <Route path="/blog" component={DesktopBlogs}/>
      <Route path="/blog-post" component={DesktopBlogPost}/>
      <Route path="/blog-m" component={MobileBlogList}/>
      <Route path="/blog-mobile-post" component={MobileBlogPost}/>
      <Route path="/press" component={Press}/>
      <Route path="/freetrial" component={ isMobile() ?  FreeTrailM : Freetrail}/>
      <Route path="/terms-and-conditions" component={ TermsandCondition }/>
      <Route path="/privacy-policy" component={ Policy }/>
    </div>
  </Router>
);

export default AppRouter;