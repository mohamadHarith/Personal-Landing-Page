import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => {
    return(
        <ContentLoader 
            height={490}
            width={400}
            speed={1}
            // primaryColor="red"
            primaryColor="#c0c0c0"
            secondaryColor="#ecebeb"
        >
            {/* <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" /> */}

            <circle cx="200" cy="100" r="75"/>
            <rect x="50" y="210" rx="10" ry="10" width="300" height="35" /> 
            <rect x="50" y="285" rx="10" ry="10" width="300" height="15" />
            <rect x="50" y="315" rx="10" ry="10" width="300" height="15" /> 
            <rect x="50" y="345" rx="10" ry="10" width="300" height="15" />
            <rect x="50" y="430" rx="10" ry="10" width="300" height="35" />  
        </ContentLoader>
    );
}

export default MyLoader;