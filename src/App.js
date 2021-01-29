import React, { useState } from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown'; 
import Route from './components/Route';
import Header from './components/Header';

import './components/YoutubeHome.css'; 

// Home page imports 
import YoutubeHome from './components/YoutubeHome';
import GoogleAuth from './components/GoogleAuth';

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (<div className="ui container">
        <Header />
        <Route path="/">
            <YoutubeHome />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
        </Route>
        {/* <Route path="/translate">
        </Route> */}
        </div>
        
        );
};
