import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import WhatIdo from './WhatIdo/WhatIdo';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const Home = () => {
    return (
       <div className="no-bottom no-top" id="content">
            <Banner></Banner>
            <About></About>
            <WhatIdo></WhatIdo>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <Facts></Facts>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;