import React from 'react';
import './App.css';



// Returns the Header section for the resume
function Header(props){
  return (
    <header className={props.className}>
      <h1>{props.children}</h1>
    </header>
  );
}

// Returns the professional summary section
function ProfessionalSummary(props){
  return (
    <section className={props.className}>
      <h2>Professional Summary</h2>
      <p>
        A dedicated and focused professional who excels at prioritizing, completing multiple tasks
        simultaneously and following through to achieve project goals. Seeking a job as a front-end developer
        in a company.
      </p>
    </section>
  );
}

// returns the projects section
function Projects(props){
  return (
    <section className={props.className}>
      <h2>Projects</h2>
      <div className="project">
        <h4>Xplore Recipe App</h4>
        <p>
          An asynchronous web app that allows a user to browse through recipes using the Edamam API, which
          has a database of 1.7+ million nutritionally analyzed recipes. A user gets detailed nutritional
          information on a recipe and it has a grocery list feature where the user can add his own items or
          ingredients from a recipe to the list.
        </p>
      </div>
      <div className="project">
        <h4>National Parks App</h4>
        <p>
          An asynchronous app allowing users to search through parks in multiple states of the US. This app
          uses the National Parks API.
        </p>
      </div>
      <div className="project">
        <h4>Quiz App</h4>
        <p>
          A jQuery based web app that prompts the user with 5 questions and keeps track of the question
          number and the score of the user and displays the result once the test is over.
        </p>
      </div>
    </section>
      
  );
}

// returns the experience section 
function Experience(props){
  return (
    <section className={props.className}>
      <h2>Experience</h2>
      <div className="experience">
        <div className="exp-header flex">
          <h4>Operations Manager</h4>
          <span>May 2015 - Present</span>
        </div>
        <h4>Aujla Star Tranport LLC, Indianapolis, IN</h4>
        <p>
          Responsible for establishing sister company Aujla Star Transport originally based in Dubai, U.A.E.
          Handled all major operations varying from dispatch, hiring and payroll. Handled driver/broker phone
          calls and resolved any issues that arose while on and off duty strengthening my customer service and
          communication skills.
        </p>
      </div>
      <div className="experience">
        <div className="exp-header flex">
          <h4>Transportation Supervisor</h4>
          <span>Jan 2012 - Apr 2015</span>
        </div>
        <h4>Aujla Star Heavy and Light Trucks Transport, LLC, Dubai, U.A.E.</h4>
        <p>
          Responsible for daily load planning for drivers where I managed the company payroll and shipment
          management systems. Worked with a team of 90 drivers. Working at this position taught me
          leadership skills in order to manage my team to complete large tasks in a timely manner.
        </p>
      </div>
    </section>
  );
}

// returns the education section
function Education(props){
  return (
    <section className={props.className}>
      <h2>Education</h2>
      <div className="education">
        <div className="edu-header flex">
          <h4>Computer systems operations and management</h4>
          <span>Jan 2008 - Dec 2011</span>
        </div>
        <h4>Diploma, Thompson Rivers University, Kamloops, BC, Canada</h4>
      </div>
      <div className="education">
        <div className="edu-header flex">
          <h4>Full Stack Web Development Bootcamp</h4>
          <span>May 2013 - Present</span>
        </div>
        <h4>Online Bootcamp, Thinkful</h4>
      </div>
    </section>
  );
}

// returns 
function Contact(props){
  return (
    <footer className={props.className}>
      <h2>Contact</h2>
      <address>
        <p><span>Name:</span> Raman Aujla</p>
        <p><span>Email:</span> <a href="mailto:raujla0228@gmail.com" target="_blank">raujla0228@gmail.com</a></p>
        <p><span>Phone:</span> <a href="tel:+13179979097"> +1 (317) 997 9097</a></p>
        <p><span>Address:</span> <a href="https://www.google.com/maps/place/7133+Foxthorn,+Canton,+MI+48187/@42.3363383,-83.4648318,17.02z/data=!4m5!3m4!1s0x883b52e2dbd1e625:0xd90f1aeb49707881!8m2!3d42.3362764!4d-83.4625376" target="_blank">7133 Foxthorn Dr, Canton, MI 48187</a></p>
      </address>
      <img src="raman.jpeg" alt="Ramans Portrait Photo" />
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="header-section">
        Raman Aujla
      </Header>
      <ProfessionalSummary className="professional-summary-section" />
      <Projects className="projects-section" />
      <Experience className="experience-section" />
      <Education className="education-section" />
      <Contact className="contact-section" />
    </div>
  );
}

export default App;
