import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import WhatIdo from './WhatIdo/WhatIdo';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

const Home = () => {
    return (
       <div className="no-bottom no-top" id="content">
            <Banner></Banner>
            <About></About>
            <WhatIdo></WhatIdo>
            <Portfolio></Portfolio>
            <Resume></Resume>
        </div>
    );
};

export default Home;