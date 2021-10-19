import React, {Component} from 'react';
import SocialCard from './SocialCard'
import SideNavBar from '../CommonComp/SideNavBar'
import {Container} from 'react-bootstrap'
import Navbar from '../CommonComp/Navbar/index'

import '../Styles/home.css'

class Home extends Component{
    render(){
        let text =""
        return(
            <>
            <SideNavBar />
                <Container>
                    <Navbar />     
                    <h3 style={{padding:"20px"}}>Add Accounts</h3>
                    <div className="panel">
                    <SocialCard icon="fab fa-twitter-square" color="#00acee" title="Twitter" platform="twitter" text={text}/>
                    <SocialCard icon="fab fa-facebook-square" color="#3b5998" title="Facebook" platform="facebook" text={text}/>
                    <SocialCard icon="fab fa-instagram" color="rgb(193,53,132)" title="Instagram" platform="instagram" text={text}/>
                    <SocialCard icon="fab fa-linkedin" color="#c8232c" title="Linkedin" platform = "linkedin" text={text}/>
                    <SocialCard icon="fab fa-pinterest-square" color="#c8232c" title="Pinterest" platform = "pinterest" text={text}/>
                    <SocialCard icon="fab fa-google-play" color="#00acee" title="Google Store" platform="googleStore" text={text}/>                    
                    </div>
                </Container>
                  
            </>
        )
    }
}

export default Home