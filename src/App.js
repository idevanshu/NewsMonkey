import './App.css';

import React, { useState } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

  const  App = () =>  {
  let key =   process.env.REACT_APP_NEWS_API
  let country = "in"
  let pageSize = 6
  
    const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#27d6d6'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apikey={key} key="general" pageSize={pageSize} country={country} category="general" /></Route>
            <Route exact path="/business"><News setProgress={setProgress} apikey={key} key="business" pageSize={pageSize} country={country} category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} apikey={key} key="entertainment" pageSize={pageSize} country={country} category="entertainment" /></Route>
            <Route exact path="/health"><News setProgress={setProgress} apikey={key} key="health" pageSize={pageSize} country={country} category="health" /></Route>
            <Route exact path="/science"><News setProgress={setProgress} apikey={key} key="science" pageSize={pageSize} country={country} category="science" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} apikey={key} key="sports" pageSize={pageSize} country={country} category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress} apikey={key} key="technology" pageSize={pageSize} country={country} category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
  export default App;
