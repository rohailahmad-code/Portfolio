import React, { useEffect } from "react";
import "./Frontend.css";
import BackButton from "../BackButton/BackButton";
import Project from "../Project/Project";

import ProjectImg from "../../images/personal-portfolio.png";
import InsureImg from "../../images/insure.png";
import EasyBankImg from "../../images/easybank.png";
import NatureTour from "../../images/travel.png";
import HamdanTiles from "../../images/tiles-showroom.png";
import Calculator from "../../images/calculator.png";
import SmallProject from "../SmallProject/SmallProject";
import LargeProject from "../LargeProject/LargeProject";

const Frontend = () => {
  
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
    <div className="Frontend">
      <div id="progressBarContainer">
        <div id="progressBar"></div>
      </div>
      <BackButton />

      <LargeProject />

      <Project
        heading="Portfolio Landing Page"
        span="Portfolios are everything, promises are nothing."
        img={ProjectImg}
        subheading="Portfolio Website"

        subdetail="A portfolio website is a unique way to showcase your work and let others know about 
        yourself. It’s like an evergreen platform for your projects, case studies, and information about 
        you. In addition, it’s one of the best ways to express your personality, experience, and capabilities.
        Having your own website means customers are always able to find you and if interested, reach out for 
        you. If you don’t have an online presence nowadays, you are behind the times. 😉 A portfolio is a great 
        way for photographers, designers, developers and a wide range of artists to present their work online. 
        It lets you reflect your identity through your works – photos, graphic design, sketches, etc."

        para="Back in 2019 when I was learning front end web development I had learned too many things like HTML 
        syntax, elements, different tags, class, id, adding stylesheet, meta tags, and tables in HTML, and I also 
        covered CSS topics like selectors, declaration block, key and value pair, flexbox, grid, etc. There are so 
        many other topics that I can't name them here because they will become very lengthy. I was thinking to do 
        some real work with hands-on experience so I google it and find a very good platform called 'FRONTEND MENTOR'. 
        I really liked the platform so much they are doing such a great job because they are providing free designs 
        with all the assets and provide you all the instructions about the project that how you will do it so I choose 
        this Portfolio landing page and read all the instructions and download it. It seems to me like a tough game but 
        I didn't give up and started it. The FrontEnd Mentor will provide you with colors, fonts, font size, design, 
        responsive design for mobile, and photos. I think this is one of the best platform for a newbie. So come to the 
        topic, this website is a one-page static website it doesn't have any other page and it won't redirect you to 
        another page. You can check the Landing page by clicking the below link."
        link="https://personal-portfolio-landing-page.netlify.app/"
      />

      <Project
        heading="Insure"
        span="Humanizing your insurance."
        img={InsureImg}
        subheading="Insurance Landing Page"
        subdetail="Get your life insurance coverage easier and faster. We blend our expertise and technology to help you 
        find the plan that’s right for you. Ensure you and your loved ones are protected."

        para="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
        We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage 
        possible. Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when 
        you need it."
        link="https://insure-landing-page01.netlify.app/"
      />

      <Project
        heading="EasyBank"
        span="Next generation digital banking."
        img={EasyBankImg}
        subheading="EasyBank Landing Page"
        subdetail="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, 
        budgeting, investing, and much more. We leverage Open Banking to turn your bank account into your financial hub.
        Control your finances like never before."
        para="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
        See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. We don’t 
        do branches. Open your account in minutes online and start taking control of your finances right away. Manage your savings, 
        investments, pension, and much more from one account. Tracking your money has never been easier."
        link="https://easy-bank-landing-page1.netlify.app/"
      />

      <Project
        heading="Nature Tours"
        span="The great outdoor adventure"
        img={NatureTour}
        subheading="Nature Tours Landing Page"
        subdetail="Natural attractions are geographical or biological features that have a specific appeal to the tourism market. 
        Globally, there are countless varieties of natural attractions – no two natural attractions are the same because they have 
        been shaped by the unique natural forces of the surrounding environment. Natural attractions include deserts, polar regions, 
        rainforests, alpine areas, woodlands, grasslands, mountains, beaches, swamps, caves, oceans, cliffs, and rivers, as well as 
        the unique life forms that inhabit those environments (animals, birds, insects, and plants)."

        para="We visit natural attractions for many reasons, including:
              To enjoy the grandeur of nature.
              To escape from the pressures of urban life.
              To escape from humanity.
              To explore different landscapes.
              To experience outdoor adventures in a natural setting.
              To learn about the environment.
              To participate in conserving the environment."
        link="https://travel-website-landing-page.netlify.app/"
      />

      <Project
        heading="Hamdan Tiles"
        span="Hamdan tiles provide best quality of tiles and sanitary."
        img={HamdanTiles}
        subheading="Hamdan Tiles and Showroom"
        subdetail="Some call it fashion freedom, we call it fashion revolution. Hamdan Tiles provide best quality of tiles and sanitary.
        "
        para="This startup is one of my brother friends they are doing very good work. I didn't ask for the website i made it by my own 
        for experience and practice purpose. I made this along time ago it have been more than 2 years at that time i wasn't that much good at
        coding. I just tried and made this. First I made a wireframes for the website because wireframes are very important in case  if you don't
        have a design or prototype. After wireframes i search for fonts and colors. Font and Colors are the most imporatant element of the 
        website if you choose good font and colors your website well look awesome. You can check the website by clicking the below link."
        link="https://tiles-showroom.netlify.app/"
      />
    </div>
  );
};

export default Frontend;
