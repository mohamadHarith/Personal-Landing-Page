import React, {Component} from 'react';
import dp from './dp.jpg';




class Portfolio extends Component{
    
    constructor(props){
        super(props);
        
    }
    
    render(){
    
        return(       
            <div className = "container-portfolio">
                <div className="portfolioCard">
                    <div className="avatar-container">
                        <div className="avatar">
                            <img src={dp}/>
                        </div>
                    </div>			
                    <div className="information">
                        <h1>Mohamad Harith</h1>
                        <p><i className="fas fa-briefcase"></i>Student</p>
                        <p><i className="fas fa-graduation-cap"></i>Multimedia University, Cyberjaya</p>
                        <p><i className="fas fa-home"></i>Johor Bahru, Malaysia</p>								
                    </div>
                
                    <div className="social-media">
                        
                        <span title="Confessions"><a target="_blank" href="https://twitter.com/ImdepressedSoul"><i class="fab fa-twitter"></i></a></span>
                        <span title="Hire Me"><a target="_blank" href="https://www.linkedin.com/in/mohamad-harith-163649150/"><i className="fab fa-linkedin-in"></i></a></span>
                        <span title="Projects"><a target="_blank" href="https://github.com/mohamadHarith"><i className="fab fa-github"></i></a></span>
                    </div>
                </div>
            </div>
        );
     }
}

export default Portfolio;