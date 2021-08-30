import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import App from "./App";
import MyBlog from "./Blog";
import Skincaretest from "./skincare-test";
// import Notfound from "./notfound";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
           <Route path="/skincaretest" component={Skincaretest} />
            <Route path="/myblog" component={MyBlog} />
            {/* <Route component={Notfound} />  */}
        </Switch>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import App from "./App";
// // import Users from "./users";
// // import Contact from "./contact";
// // import Notfound from "./notfound";
// import Header from "./components/Header/header";
// import Footer from "./components/Footer/Footer";

// const routing = (
//   <Router>
//     <div>
//       <Header />
//       <hr />
//       <Switch>
//         <Route exact path="/" component={App} />
//         {/* <Route path="/users" component={Users} />
//         <Route path="/contact" component={Contact} />
//         <Route component={Notfound} /> */}
//       </Switch>
//       <Footer />
//     </div>
//   </Router>
// );

