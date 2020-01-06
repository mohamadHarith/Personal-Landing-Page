import React from 'react';

const PortfolioCard = (props)=>{
    return(
        <div className = "container-portfolio">
            	<div className = "portfolioCard">
                {props.content}
                </div>
        </div>
    );
}

export default PortfolioCard;