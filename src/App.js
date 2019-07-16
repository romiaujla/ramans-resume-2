import React from 'react';
import './App.css';



// Returns the Header section for the resume
function Header(props){
  return (
    <header className={props.className}>
      <h1>Raman Aujla</h1>
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
        <h5>Xplore Recipe App</h5>
        <p>
          An asynchronous web app that allows a user to browse through recipes using the Edamam API, which
          has a database of 1.7+ million nutritionally analyzed recipes. A user gets detailed nutritional
          information on a recipe and it has a grocery list feature where the user can add his own items or
          ingredients from a recipe to the list.
        </p>
      </div>
      <div className="project">
        <h5>National Parks App</h5>
        <p>
          An asynchronous app allowing users to search through parks in multiple states of the US. This app
          uses the National Parks API.
        </p>
      </div>
      <div className="project">
        <h5>Quiz App</h5>
        <p>
          A jQuery based web app that prompts the user with 5 questions and keeps track of the question
          number and the score of the user and displays the result once the test is over.
        </p>
      </div>
    </section>
      
  );
}

function Experience(props){
  return (
    <section className={props.className}>
      <h2>Experience</h2>
      <div className="experience">
        <div className="exp-header">
          <h5>Operations Manager</h5>
          <span>May 2015 - Present</span>
        </div>
        <h5>Aujla Star Tranport LLC, Indianapolis, IN</h5>
        <p>
          Responsible for establishing sister company Aujla Star Transport originally based in Dubai, U.A.E.
          Handled all major operations varying from dispatch, hiring and payroll. Handled driver/broker phone
          calls and resolved any issues that arose while on and off duty strengthening my customer service and
          communication skills.
        </p>
      </div>
      <div className="experience">
        <div className="exp-header">
          <h5>Operations Manager</h5>
          <span>May 2015 - Present</span>
        </div>
        <h5>Aujla Star Tranport LLC, Indianapolis, IN</h5>
        <p>
          Responsible for establishing sister company Aujla Star Transport originally based in Dubai, U.A.E.
          Handled all major operations varying from dispatch, hiring and payroll. Handled driver/broker phone
          calls and resolved any issues that arose while on and off duty strengthening my customer service and
          communication skills.
        </p>
      </div>
    </section>
  );
}

function Education(props){
  return (
    <section className={props.className}>
      <h2>Education</h2>
      <div className="education">
        <h5></h5>
        <p></p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="header-section" />
      <ProfessionalSummary className="professional-summary-section" />
      <Projects className="projects-section" />
      <Experience className="experience-section" />
      <Education className="education-section" />
      <footer className="footer-section"></footer>
    </div>
  );
}

export default App;
