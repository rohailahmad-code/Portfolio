import React from 'react';
import './LargeProject.css';

import LmsHomeImage from '../../images/lms-home.png'
import FurtherDetail from '../FurtherDetail/FurtherDetail';

import LoginImg from '../../images/login.png';
import RegisterImg from '../../images/register.png';
import BrowseCourseImg from '../../images/BrowseCourse.png';
import NotificationImg from '../../images/notification.png';
import InboxImg from '../../images/inbox.png';
import DashboardImg from '../../images/dashboard.png';
import ModulesImg from '../../images/modules.png';
import ScheduleImg from '../../images/schedule.png';
import TasksImg from '../../images/tasks.png';
import ProfileImg from '../../images/profile.png';
import PaymentMethodImg from '../../images/payment.png';
import SettingsImg from '../../images/settings.png';


const LargeProject = () => {
  return (
    <div className='LargeProject'>
        <h1>TalentLab LMS</h1>
        <span>Learning is an experience,
        everything else is information.</span>
        <img src={LmsHomeImage} alt="" />
        <div className="MoreDetail">
            <h2>Online Course Provider (LMS)</h2>
            <span>Talent Lab is a online course provider LMS. This
            learning management system is much broader. It has 30 pages
            which are interconnected with each other and it has much 
            awesome functionality which you will see below.</span>
            <p className="text">Days started as a side project back in 2020. This was a Figma design, a friend told me about this project and I was free at that time I told him OKAY let's start the game. This website is based on LMS (Learning Management System) where students can easily apply for the course and can enroll themselves. The first pages of the website for a new user are Login and Register where the user can register himself and Login into LMS. More Detail of Login and Register are below </p>
            <a href=""></a>
        </div>

        <FurtherDetail heading="Login"
        para1="A login page is a web page or an entry page to a website that requires user identification and authentication, 
        regularly performed by entering a username and password combination." 
        img={LoginImg}
        para2="The Login page of a TalentLab LMS has an email input and password input. If you are an old user and you forget 
        your password. NO WORRIES..! You can click the below forget password link which will redirect you to the page where 
        you can change your password by verifying yourself as the owner of your email. After that there are two buttons, the 
        first one is the login button which is primary and the bellow button is for creation account purpose which is secondary, 
        in case you didn't register yourself as an LMS user then first you should register yourself as an LMS user. If you don't 
        want to register yourself manually, here we have another option where you can login directly with your Gmail, Facebook, 
        or LinkedIn account. "
         anchor="" />

        <FurtherDetail heading="Register"
        para1="A signup page (also known as a registration page) enables users and organizations to independently register and gain
        access to your system. It is common to have multiple signup pages depending on the types of people and organizations you want 
        to register." 
        img={RegisterImg}
        para2="A registration form is a list of fields that a user will input data into and submit to a company or individual. There 
        are many reasons why you would want a person to fill out a registration form. Companies use registration forms to sign up 
        customers for subscriptions, services, or other programs or plans. In TalentLab LMS Registration Form we required some input
        fields from user to register himself. By lefting the required input field empty the user can't be able to login to the LMS. 
        User must have to fill all the required input fields."
        anchor="" />

        <FurtherDetail heading="Course"
        para1="LMSs have evolved from earlier systems to now include courses. Here in TalentLab LMS we a page for courses where they 
        are offering different typeof courses." 
        img={BrowseCourseImg}
        para2="In TalentLab LMS the course page has a very attractive UI which attracts more users and gives them a good experience. 
        The UI provides a search input field below where you can browse any course that you want to do. We have a filter on the left 
        side where you can filter your course and on the right side, we have courses. This design was a little tricky for me but with 
        the help of flexbox, I code this page very easily. I highly recommend the flexbox to everyone who wants to make designs like this."
        anchor="" />

        <FurtherDetail heading="Notification"
        para1="Web push notifications (also known as browser push notifications) are actionable messages sent to a user's device from a 
        website via a browser. These messages are contextual, timely, personalized, and best used to engage, re-engage, and retain website 
        users." 
        img={NotificationImg}
        para2="Notification is one of the most important components of a website. The work of notification is to send a message to users 
        from the management team to inform them about any update. You can see the small red dots, these dots mean that those are the new 
        notification that is not visited by a user. Flexbox is something which will make your work easier and can save much time, with the 
        help of flexbox you can do more productive work in less time. "
        anchor="" />

        <FurtherDetail heading="Inbox"
        para1="An inbox is a repository in an email application that accepts incoming messages. An inbox is a web and mobile 
        tool to help you manage your personal communication directly from your portal or app. Build stronger trust and 
        relationships between each user. " 
        img={InboxImg}
        para2="The main idea of the inbox is to make it an easier process for users to interact with each other. Before the 
        portal inbox users were contacting each other via emails but when the idea of the inbox came now the majority of users 
        contacted each other on the portal via inbox. In the talentLab LMS inbox, we have 3 columns, on the left side, we 
        have user's profiles photos, names, times, and recent messages. In the middle, we have a chat box of a group and on 
        the right side, we have 3 small sections first one shows all members, and the below both shows shared files and shared 
        media. The layout is done with the help of Flexbox."
        anchor="" />

        <FurtherDetail heading="Dashboard"
        para1="A web dashboard is an online interface, or page on your website, that displays real-time data as insightful 
        charts and reports. A dashboard is a type of graphical user interface that often provides at-a-glance views of key 
        performance indicators (KPIs) relevant to a particular objective. In other usages, the dashboard is another name for 
        a progress report and is considered a form of data visualization. In providing this overview, business owners can save 
        time and improve their decision making by utilizing dashboards" 
        img={DashboardImg}
        para2="In TalentLab LMS we have such an attractive dashboard that gives a very good time and experience to the users. 
        In Dashboard, we have 4 different cards (section/components) 1. Upcoming Lessons 2. Tasks 3. Announcements 4. Grades. 
        In the above image, you can see the upcoming lesson card. These sections help students to get ready before the Upcoming 
        lessons. In the tasks card, we have a calendar where we can see the date of the assignments. This task section will 
        remind us of assignments. The announcement and grades are also very useful for the students. These four sections have 
        their own detail page. You can see those pages by clicking the below link."
        anchor="" />

        <FurtherDetail heading="Modules"
        para1="Modules are used to organize course content by weeks, units, or a different organizational structure. Modules
        essentially create a one-directional linear flow of what students should do in a course. Each module can contain files, 
        discussions, assignments, quizzes, and other learning materials." 
        img={ModulesImg}
        para2="The modules page of a TalentLab LMS consists of two-column. The left one shows the overview of the modules where 
        the user can check the week's overview in detail, on the left you have to just select the week, and on the other hand 
        (right side) the detail of the overview will show. The right side consists of a detailed overview and syllabus and further 
        you can click on the modules as well which will take you to another detail page where you can watch course videos and do 
        comments etc."
        anchor="" />

        <FurtherDetail heading="Schedule"
        para1="Schedule means to arrange that an event or activity will happen at a particular time and a list of the times when events are planned to happen, for example, the times when classes happen. The schedule commonly functions as the primary time management tool for the project" 
        img={ScheduleImg}
        para2="The schedule is one of the most important components of the LMS portal. In TalentLab LMS we provide a beautiful design where students can check their upcoming lessons. We build an option for students so that they can create their schedules on the bases of their choice. They can also import the schedule from other places. Scheduling can give students to many advantages. Some advantages of them are given below. 1. Scheduling helps you get clear on your purpose. 2. It helps you identify “crunch” times. 3. Scheduling allows for the prioritization of tasks. 4. Claps back against procrastination. 5. Adds contingency time for the “unexpected. 6. Saves your time.””"
        anchor="" />

        <FurtherDetail heading="Tasks"
        para1="Tasks are something you observe a student doing that demonstrated some level of skill or knowledge. For example, a “task” 
        might be correctly inspecting a forklift before use. The expectation is that the student would be demonstrating the ability to 
        correctly inspect a forklift, all while an “observer” watches and verifies that the student is able to inspect the forklift." 
        img={TasksImg}
        para2="In the system, tasks like the one above are created and then attached to “other” classified items. Multiple tasks can 
        be added to a single item. The item is assigned to the student. The “observer” than observes the student performing the task 
        and verifies within the system that the student can successfully complete the task. If the student is able to complete the 
        number of tasks above the threshold set by the admin on the item. In TalentLab LMS we have different sections, the first one
        is assignment where students have assignments name and second section is about action where student will upload their work. 
        The next sections are deadline, status, grade, and feedback."
        anchor="" />

        <FurtherDetail heading="Profile"
        para1="A profile page represents information regarding a user’s identity on a website or in a mobile app. It may contain personal 
        data, a profile photo, summary, interests, achievements, and more. A user profile is a collection of settings and information 
        associated with a user. It contains critical information that is used to identify an individual, such as their name, age, portrait 
        photograph, and individual characteristics such as knowledge or expertise." 
        img={ProfileImg}
        para2="Most of these features are optional, so their number and the overall interface composition depend on the design of a particular “About” tab. But majorly, a user profile should look as personalized and unconventional as possible. The design provides me to create the tabs for a profile. There are four tabs, about, career, courses, and portfolio. These tabs show the individual data of the student. On the top, we have a profile photo, name, address, work, and social links."
        anchor="" />

        <FurtherDetail heading="Payment Method"
        para1="A payment method is a way that customers pay for a product or service. Accepted payment methods may include cash, a gift 
        card, credit cards, prepaid cards, debit cards, or mobile payments. Learners who enroll in tuition-based courses can use their 
        Visa, Mastercard, or debit cards to make online payments or they can agree to be invoiced for the cost of tuition through direct 
        billing." 
        img={PaymentMethodImg}
        para2="Payment method is the most important page for the LMS portal where students can buy a course and pay the payment through Visa Card, Debit Card, Credit Card, etc. Without payment, a student can't buy a course that everyone knows. Here we have a Finance overview and payment history everything is shown in the above pic if you want to visit the page you can click the below link."
        anchor="" />

        <FurtherDetail heading="Settings"
        para1="The setting is a place of a website where the main feature of the website occurs. Each portal has its own different settings and different UI (Designs). Users are allowed to change the settings of the website." 
        img={SettingsImg}
        para2="In settings we have tabs on the left side and on the right side it shows the data of the tabs when user click the tab the data of 
        that tab will show on right side. We have profile where users can change their for example user want to change the profile photo so he can 
        click on the edit option on the photos and can change the photo. The other tab is about contact, the full contact data of the user are given 
        in detail. Another one is resume, account setting and privacy."
        anchor="" />

    </div>
  )
}

export default LargeProject;