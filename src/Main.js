import React, {Component} from 'react';
import PortfolioCard from './PortfolioCard';
import Portfolio from './Portfolio';
import MyLoader from './MyLoader';
import settings from './particles.json';
import Particles from 'react-particles-js';
import './style.css';



class Main extends Component{

    state = {
        display: false
    }

    componentDidMount(){
        console.log("component mounted");
        setTimeout(()=>{this.setState({display:true});}, 1000);
    }

    handleClick = () => {
       
        console.log('The link was clicked.');
      }
    
    render(){
       
        const contentLoader = <MyLoader />;
       
        if(this.state.display){
        return(
            <div>
                <div className = "container">
                    <Particles className='canvas' params={settings}></Particles>
                    <Portfolio></Portfolio>
                </div>
            </div>
        );
       }
       else
        return(
            <div>
                <div className = "container">
                    <Particles className='canvas' params={settings}></Particles>
                    <PortfolioCard content = {contentLoader}></PortfolioCard>
                </div>
            </div>
        );

  
    }
}

export default Main;