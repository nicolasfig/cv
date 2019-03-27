import React from 'react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Info from '../components/Info';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

import useGetData from '../hooks/useGetData';

const App = () => {

    const data = useGetData();
    console.log(data);

    return data.length === 0  ? <h1>Loading...</h1> : (
        <Main>
            <Sidebar>
                <About
                    avatar = {data.avatar}
                    name = {data.name}
                    profession = {data.profession}
                    bio = {data.bio}
                    address = {data.address}
                    social = {data.social}
                />
            </Sidebar>
            <Info>
                <Education
                    data = {data.education}
                />
                <Experience
                    experience = {data.experience} 
                />
                <Certificates
                    certificates = {data.certificates}
                />
                <Skills/>
            </Info>
        </Main>
    )
}

export default App;