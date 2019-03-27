import React from 'react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Info from '../components/Info';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

const App = () => {
    return(
        <Main>
            <Sidebar>
                <About/>
            </Sidebar>
            <Info>
                <Education/>
                <Experience/>
                <Certificates/>
                <Skills/>
            </Info>
        </Main>
    )
}

export default App;