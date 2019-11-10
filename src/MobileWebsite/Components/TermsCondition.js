import React, { Component } from 'react';
//import CustomSnackbar from './CustomSnackbar';
import './Components.css';  
import './steps.css';
import Header from './Header';



class TermsCondition extends Component{
    render(){
        return(
            <div>
            <div >
            
                
                <Header />
                
                    <h1 className='step2'> STEP 2:</h1>
                    <p className='contract'>Review your contract</p>
                
                
                    
                
                 
                <div className='info'>
                    
                        <section >
                            <h1 className="cravepvtltd">CRAVE INFORMATION PRIVATE LIMITED</h1>
                            <p1 className="agreement">SERVICE LEVEL AGREEMENT</p1>
                    
                        </section>
                                
                        <section>
                            THIS SERVICE LEVEL AGREEMENT
                            ("Agreement") is enetered into at
                            Mumbai on 1st April("Effective Date"),
                            by and between:
                            Crave Information Private Limited,
                            (GST No.27AAHCC7450Q1Z0) (PAN No,
                            AAHCC74500Q) a company incorporated
                            under the provisions of the Indian Companies
                            Act,2013 having its registered officeat 111-A,
                            Nibbana CHSL, Nargis Dutt Road,Pali Hill,
                            Bandra West, Mumbai-400050
                                    
                
                        </section>
                </div>
                            


                </div>
                <div className="buttondiv">
                    <button className="footer">ACCEPT TERMS & CONDITIONS</button>
                
                    <button className="formsubmit" onClick={ this.onSubmit }>Submit</button>
                </div>

                  
        </div>
            
        )
    }   
}



export default TermsCondition;
