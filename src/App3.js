import React from "react";
import './App3.css';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App3 (){
   // return <Home />;
   return (
    <HashRouter>
        <Navigation/>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/about/intro">
            <h1>컴포넌트 아닌 라우터</h1>
        </Route>
        <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
   );
}

export default App3;