import React, {useEffect} from 'react';
import './ReactApp.css';

import BackButton from '../BackButton/BackButton';
import Project from '../Project/Project';
import SmallProject from '../SmallProject/SmallProject';
 
import ReactImg from "../../images/react app.png";
import CalculatorImg from '../../images/calculator.png';
import CounterImg from '../../images/counter.png';
import AdditionGameImg from '../../images/addition-game.png';

const ReactApp = () => {


  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      const progressBar = document.getElementById("progressBar");

      progressBar.style.transform = `scale(${scroll}, 1)`;
      // progressBar.style.opacity = `${scroll}`;
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <div className="ReactApp">
      <div id="progressBarContainer">
        <div id="progressBar"></div>
      </div>
      <BackButton/>
      <Project
        heading="React Apps"
        span="React makes it painless to create interactive UIs."
        img={ReactImg}
        subheading="npx create-react-app hello_world"
        subdetail="React allows developers to create large web applications that can change data, 
        without reloading the page. The main purpose of React is to be fast, scalable, and simple. 
        It works only on user interfaces in the application. This corresponds to the view in the 
        MVC template."

        para="React is a free and open-source front-end JavaScript library for building user 
        interfaces based on UI components. It is maintained by Meta and a community of individual 
        developers and companies. You'll develop a strong understanding of React's most essential 
        concepts: JSX, class and function components, props, state, lifecycle methods, and hooks. 
        You'll be able to combine these ideas in React's modular programming style. I've been using 
        React for over a year now. I have made some React Apps which you can see below."
        link="https://reactjs.org/"
      />

      <SmallProject
      heading="Addition Game"
      span="Addition Game"
      para1="para1"
      img={AdditionGameImg}
      link="https://additiongame-by-rohail.netlify.app/"
      />

      <SmallProject
      heading="Counter"
      span="Counter made by me"
      para1="para1"
      img={CounterImg}
      link="https://counterapp-by-rohail.netlify.app/"
      />

      <SmallProject
      heading="Calculator"
      span="Calculator made by me"
      para1="para1"
      img={CalculatorImg}
      link="https://calculatorbyrohail.netlify.app/"
      />

    </div>
  )
}

export default ReactApp;